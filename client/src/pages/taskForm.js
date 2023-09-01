import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { taskValidationSchema } from '../validators/taskValidator';
import { fetchTaskById, createTask, updateTask } from './../api/tasks';
import { SuccessToast, ErrorToast } from '../components/toast';

function TaskForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const formik = useFormik({
    initialValues:{
      title: '',
      description: '',
    },
    validationSchema: taskValidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      if (id) {
        handleUpdateTask(values);
      } else {
        handleCreateTask(values);
      }
      setSubmitting(false);
    },
  });

  const handleCreateTask = (values) => {
    createTask(values)
      .then(() => {
        SuccessToast('Task Creation - Succesful')
        navigate('/tasks');
      })
      .catch(error => {
        ErrorToast(error.response.data.message);
      });
  };

  const handleUpdateTask = (values) => {
    updateTask(id, values)
      .then(() => {
        SuccessToast('Update Task - Succesful')
        navigate('/tasks');
      })
      .catch(error => {
        ErrorToast(error.response.data.message);
      });
  };

  useEffect(() => {
    if (id && !formik.initialValuesFetched) {
      fetchTaskById(id)
        .then(taskData => {
          formik.setFieldValue('title', taskData.title);
          formik.setFieldValue('description', taskData.description);
          formik.initialValuesFetched = true;
        })
        .catch(error => {
          console.error('Error fetching task data:', error);
        });
    }
  }, [id, formik, formik.initialValuesFetched]);

  return (
    <div className="container mt-4">
      <h2>{id ? 'Edit Task' : 'Create Task'}</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title && (
            <div className="text-danger">{formik.errors.title}</div>
          )}
        </div>
        <div className="form-group mt-3">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description && (
            <div className="text-danger">{formik.errors.description}</div>
          )}
        </div>
        <div className="form-group mt-3">
          {id ? (
            <div>
              <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>
                Update Task
              </button>
              <button type="button" className="btn btn-secondary m-2" onClick={() => navigate('/tasks')}>
                Cancel
              </button>
            </div>
          ) : (
            <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>
              Create Task
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
