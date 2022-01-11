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
  const toast = useToast();
  const [cartList, setCartList] = useState([]);
  const [inCart, setInCart] = useLocalStorage('inCart', []);

  const showToast = async (props) => {
    toast.closeAll();
    toast({
      title: props.title,
      status: props.status,
      isClosable: false,
      position: 'bottom',
      // render: () => (
      //   <>
      //     {/* <Box color='white' p={3} bg='blue.500'>
      //     Hello World
      //     </Box> */}
      //     <CustomToast />
      //   </>
      // ),
    });
  };

  useEffect(() => {
    <></>;
    // setInCart([{ id: 0, prd_code: '0001', prd_name: 'Hamburger01', prd_price: '1000' }]);
    console.log('uE-main-apps changed', cartList);
  }, [cartList]);

  return (
    <>
      <div>
        <Flex h={'80vh'} direction={'column'} pl="10px" pr="10px">
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
