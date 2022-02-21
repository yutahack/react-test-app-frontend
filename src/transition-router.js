import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BrowserRouter, Routes, Route, Switch, useLocation } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import Login from './views/login/login';
import Main from './views/main/main';
import PrivateRouter from './privateRouter';
import './transition-router-style.css';
import Purchase from './views/purchase/purchase';
import Purchasing from './views/purchase/purchasing';
import Success from './views/purchase/purchase-success';
import Password from './views/admin/password';
import AdminMenu from './views/admin/admin-menu';
import Sales from './views/admin/sales';

const TransitionRouter = () => {
  const location = useLocation();
  return (
    <>
      {/* <BrowserRouter> */}
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.pathname} classNames="fade" timeout={500}>
          <Routes location={location}>
            {/* <Route path="/a" element={<PrivateRouter />} />
            <Route path="/" element={<></>} /> */}
            <Route path="/Signin" element={<Login />} />
            <Route path="/Main" element={<Main />}></Route>
            <Route path="/Purchase" element={<Purchase />} />
            <Route path="/Purchasing" element={<Purchasing />} />
            <Route path="/Success" element={<Success />} />
            <Route path="/Admin/Password" element={<Password />} />
            <Route path="/Admin/Menu" element={<AdminMenu />} />
            <Route path="/Admin/Sales" element={<Sales />} />
            <Route
              path="*"
              element={
                // <div style={{ width: '100%', height: '100%', background: 'red' }}>
                //   <div style={{ fontSize: '24px' }}>zz</div>
                // </div>
                <Flex
                  w="500px"
                  h="100%"
                  fontSize="80px"
                  justifyContent="center"
                  alignItems="center"
                >
                  404
                </Flex>
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
