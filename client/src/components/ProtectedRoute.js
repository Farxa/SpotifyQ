import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children, redirectTo, token}) {
    
  return token ? children : <Navigate to={redirectTo} />
}
