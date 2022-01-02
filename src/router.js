import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './views/login/login';
import Main from './views/main/main';
import PrivateRouter from './privateRouter';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem', color: 'white' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          <Route path="/a" element={<PrivateRouter />} />
          <Route path="/" element={<></>} />
          <Route path="/Signin" element={<Login />} />
          <Route path="/Main" element={<Main />} />
          <Route
            path="/test"
            element={
              <>
                <p>adffa</p>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
