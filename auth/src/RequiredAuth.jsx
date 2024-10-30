import {useLocation, Navigate, Outlet} from 'react-router-dom';
import useAuth from './hooks/useAuth';

import React from 'react'

function RequiredAuth() {
    const {auth} = useAuth();
    const location = useLocation();
    console.log(auth.username)
  return (
   auth?.username ? 
   <Outlet/> : 
   <Navigate to="/login" 
   state={{from: location}} replace/>
  )
}

export default RequiredAuth