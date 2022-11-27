import { React, useState, useEffect } from 'react';
import {
  Button,
  Flex,
  Heading,
  Input,
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  useToast,
  Wrap,
  WrapItem,
  Spacer,
} from '@chakra-ui/react';
import './style.css';
import ProductsSwiper from '../app/products-swiper';
import CartBox from '../app/cart-box';
import client from '../../client/client';
import CustomToast from '../../components/custom-toast';
import useLocalStorage from '../../utils/local-storage';

const MainApp = () => {
  const [toastHeight, setToastHeight] = useState('800px');

  const toast = useToast({
    position: 'top',
    containerStyle: {
      marginTop: toastHeight,
    },
  });
  // Global cart list
  const [cartList, setCartList] = useState([]);
  const [localCartList, setLocalCartList] = useLocalStorage('localCartList', []);

  const showToast = async (props) => {
    toast.closeAll();
    toast({
      title: props.title,
      status: props.status,
      isClosable: false,
      // position: 'bottom',
      // render: () => (
      //   <>
      //     {/* <Box color='white' p={3} bg='blue.500'>
      //     Hello World
      //     </Box> */}
      //     <CustomToast />
      //   </>
      // ),
      containerStyle: {
        marginTop: toastHeight,
      },
    });
  };

  useEffect(() => {
    <></>;
    // setInCart([{ id: 0, prd_code: '0001', prd_name: 'Hamburger01', prd_price: '1000' }]);
    console.log('uE-main-apps changed', cartList);
    setLocalCartList(cartList);
  }, [cartList]);

  return (
    <>
      <div>
        <Flex direction={'column'} width={'500px'} h="100%" pl="10px" pr="10px">
          <ProductsSwiper cartState={{ cartList: cartList, setCartList: setCartList }} />
          <CartBox
            cartState={{ cartList: cartList, setCartList: setCartList }}
            showToast={showToast}
          />
        </Flex>
      </div>
    </>
  );
};

export default MainApp;
