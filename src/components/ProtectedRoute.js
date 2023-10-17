import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute(props) {
    const token = localStorage.getItem('token');

    // If there's no token, render the <Navigate /> component to redirect to /login.
    if (!token) {
        return <Route {...props} element={<Navigate to="/login" replace />} />;
    }

    // If there's a token, render the component passed as the element prop.
    return <Route {...props} />;
}

export default ProtectedRoute;
