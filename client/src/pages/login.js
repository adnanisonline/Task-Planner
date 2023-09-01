import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginValidationSchema } from '../validators/loginValidator';
import { useAuth } from '../context/authContext';
import { login } from '../api/users';
import { SuccessToast, ErrorToast } from '../components/toast';

function Login() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try {
        const response = await login(values);
        const { token } = response;
        register(token);
        SuccessToast("Login Successful")
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
              <h3 className="card-title text-center mb-4">Login</h3>
              <form onSubmit={formik.handleSubmit}>
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
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary mt-3">Login</button>
                </div>
              </form>
              <div className="text-center mt-5">
                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
