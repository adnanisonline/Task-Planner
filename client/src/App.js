import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { useAuth } from './context/authContext';
import RedirectRoute from './components/redirectRoute';
import Navbar from './components/navbar';
import TaskForm from './pages/taskForm';
import TaskList from './pages/taskList';
import Login from './pages/login';
import Signup from './pages/signUp';
import NotFound from './pages/notFound';

function App() {
  const { token } = useAuth();

  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={
            <RedirectRoute renderElement={!token} redirectTo="/tasks">
              <Login />
            </RedirectRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectRoute renderElement={!token} redirectTo="/tasks">
              <Signup />
            </RedirectRoute>
          }
        />
        <Route
          path="/tasks"
          element={
            <RedirectRoute renderElement={!!token} redirectTo="/login">
              <TaskList />
            </RedirectRoute>
          }
        />
        <Route
          path="/tasks/new"
          element={
            <RedirectRoute renderElement={!!token} redirectTo="/login">
              <TaskForm />
            </RedirectRoute>
          }
        />
        <Route
          path="/tasks/edit/:id"
          element={
            <RedirectRoute renderElement={!!token} redirectTo="/login">
              <TaskForm />
            </RedirectRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
