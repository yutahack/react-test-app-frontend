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
import Products from '../app/products';

const MainApp = () => {
  return (
    <>
      <div>
        {/* <Flex justifyContent={'center'} flexDirection={'column'}>
          <Box height={'100px'}>11</Box>

          <Box flex={'1'}> 11</Box>
          <Box height={'100px'}>11</Box>
        </Flex> */}
        <Flex h={'80vh'} direction={'column'} p={'10px'}>
          <Box h="50px" bg="red.500">
            Header
          </Box>
          <Spacer />
          <Products />
          <Spacer />
          <Box h="50px" bg="blue.500">
            Footer
          </Box>
        </Flex>
      </div>
    </>
  );
};

export default MainApp;
