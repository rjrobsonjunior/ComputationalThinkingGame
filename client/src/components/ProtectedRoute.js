import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    const navigate = useNavigate();
  
    return (
      <Routes>
        <Route
          {...rest}
          render={props => (
            isAuthenticated ? <Component {...props} /> : navigate('/')
          )}
        />
      </Routes>     
    );
};
  
export default ProtectedRoute;
  