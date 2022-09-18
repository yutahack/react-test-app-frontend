import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './views/login/login';

const PrivateRouter = () => {
  const auth = false;
  if (auth) {
    return <h1>aa</h1>;
  } else {
    return <Navigate to="/signin" />;
  }
};

export default PrivateRouter;
