import React from 'react';
import { Navigate } from 'react-router-dom';

function RedirectRoute({ renderElement, redirectTo, children }) {
  return renderElement ? children : <Navigate to={redirectTo} />;
}

export default RedirectRoute;
