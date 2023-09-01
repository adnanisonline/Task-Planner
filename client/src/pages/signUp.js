import React from 'react';
import { useFormik } from 'formik';
import { signupValidationSchema } from '../validators/signupValidator';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/users';
import { SuccessToast, ErrorToast } from '../components/toast';

function Signup() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signupValidationSchema,
    onSubmit: async (values) => {
      try {
        const response = await signup(values);
        const { token } = response;
        register(token);
        SuccessToast('Signup Successful')
        navigate('/tasks');
      } catch (error) {
        ErrorToast(error.response.data.message);
      }
    },
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Sign Up</h3>
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-danger">{formik.errors.name}</div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-danger">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div className="text-danger">{formik.errors.confirmPassword}</div>
                  ) : null}
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary mt-3">Sign Up</button>
                </div>
              </form>
              <div className="text-center mt-5">
                <p>Already have an account? <a href="/login">Login</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
