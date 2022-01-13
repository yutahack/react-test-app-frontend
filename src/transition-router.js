import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BrowserRouter, Routes, Route, Switch, useLocation } from 'react-router-dom';
import Login from './views/login/login';
import Main from './views/main/main';
import PrivateRouter from './privateRouter';
import './transition-router-style.css';

const TransitionRouter = () => {
  const location = useLocation();
  return (
    <>
      {/* <BrowserRouter> */}
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.pathname} classNames="fade" timeout={500}>
          <Routes location={location}>
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
            <Route path="/Main" element={<Main />}></Route>
            <Route
              path="/test"
              element={
                <>
                  <p>adffa</p>
                </>
              }
            />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      {/* </BrowserRouter> */}
    </>
  );
};

export default TransitionRouter;
