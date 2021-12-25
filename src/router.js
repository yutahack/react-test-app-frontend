import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './views/login/login';

const router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/signin" element={<Login />} />
          <Route
            path="/test"
            element={
              <>
                <p>adffa</p>
              </>
            }
          />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default router;
