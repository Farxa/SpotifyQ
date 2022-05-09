import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children, redirectTo, code}) {
    
  return code ? children : <Navigate to={redirectTo} />
}
