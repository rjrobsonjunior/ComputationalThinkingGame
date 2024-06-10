import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {toast} from 'react-toastify';
import Loading from './Loading';


const ProtectedRoute = ({ isAuthenticated, isLoading }) => {

  if (isLoading) {
    console.log("Aguardando checkAuth...");
    return <Loading />;
    //return <div>Loading...</div>; // Ou qualquer outro componente de carregamento
    
  }
  console.log("PROTECTEDROUTED: ", isAuthenticated);

  if (!isAuthenticated) {
    toast.error("Você não está logado no sistema!", { autoClose: 3000 });
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

  