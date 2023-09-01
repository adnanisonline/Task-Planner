import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { fetchTasks, deleteTask } from '../api/tasks';
import { SuccessToast, ErrorToast } from '../components/toast';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const tasksPerPage = 3;


  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const tasksData = await fetchTasks();
      setTasks(tasksData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      const updatedTasks = tasks.filter((task) => task._id !== taskId);
      setTasks(updatedTasks);
      SuccessToast('Task Deletion - Succesful')
    } catch (error) {
      ErrorToast(error.response.data.message);
    }
  };

  const limit = currentPage * tasksPerPage;
  const offset = limit - tasksPerPage;
  const currentTasks = tasks.slice(offset, limit);


  return (
    <div className="container mt-5">
      <div className="d-flex mb-4">
        <Link to="/tasks/new" className="btn btn-primary">
          New Task
        </Link>
      </div>
      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <div className="row">
            {currentTasks.map((task) => (
              <div key={task._id} className="col-md-12 mb-4">
                <div className="card shadow">
                  <div className="card-body d-flex flex-column align-items-start">
                    <div className="d-flex justify-content-between w-100 mb-3">
                      <h5 className="card-title mt-2">{task.title}</h5>
                      <div>
                        <Link to={`/tasks/edit/${task._id}`} className="btn btn-info">
                          <FontAwesomeIcon icon={faEdit} />
                        </Link>
                        <button onClick={() => handleDeleteTask(task._id)} className="btn btn-danger m-2">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </div>
                    <p className="card-text">{task.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          { tasks.length > tasksPerPage && 
            <ul className="pagination">
              {Array.from({ length: Math.ceil(tasks.length / tasksPerPage) }).map((_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button onClick={() => setCurrentPage(index + 1)} className="page-link">
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          }
        </div>
      )}
    </div>
  );
}

export default TaskList;
