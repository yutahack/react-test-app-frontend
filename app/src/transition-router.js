import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
  useLocation,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import Login from './views/login/login';
import Main from './views/main/main';
import PrivateRouter from './privateRouter';
import './transition-router-style.css';
import AuthProvider from './views/Auth/Auth';
import Purchase from './views/purchase/purchase';
import Purchasing from './views/purchase/purchasing';
import Success from './views/purchase/purchase-success';
import Password from './views/admin/password';
import AdminMenu from './views/admin/admin-menu';
import Sales from './views/admin/sales';
import useLocalStorage from './utils/local-storage';

const TransitionRouter = () => {
  const location = useLocation();
  const [authority, setAuthority] = useLocalStorage('authority', '');
  let navigate = useNavigate();

  const RequireAuth = (props) => {
    const auth = window.localStorage.getItem('authority');
    if (auth !== '""') {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
      {/* <TransitionGroup className="transition-group">
        <CSSTransition key={location.pathname} classNames="fade" timeout={500}> */}
      <Routes location={location}>
        {/* <Route path="/a" element={<PrivateRouter />} />
            <Route path="/" element={<></>} /> */}
        <Route path="/Signin" element={<Login />} />
        <Route path="/Main" element={RequireAuth() ? <Main /> : <Navigate to="/Signin" />} />
        {/* <Route path="/Main" element={<Main />} /> */}
        <Route path="/Purchase" element={<Purchase />} />
        <Route path="/Purchasing" element={<Purchasing />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/Admin/Password" element={<Password />} />
        <Route path="/Admin/Menu" element={<AdminMenu />} />
        <Route path="/Admin/Sales" element={<Sales />} />
        <Route
          path="*"
          element={
            <Flex w="500px" h="100%" fontSize="80px" justifyContent="center" alignItems="center">
              404
            </Flex>
          }
        />

        {/* <Route path="/*">
          <AuthProvider>
            <Route path="Main" element={<Main />} />
          </AuthProvider>
        </Route> */}
      </Routes>
      {/* </CSSTransition>
      </TransitionGroup> */}
      {/* </BrowserRouter> */}
    </>
  );
};

export default TransitionRouter;
