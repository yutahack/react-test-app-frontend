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
} from '@chakra-ui/react';
import './style.css';
import MainApp from './main-app';
import Login from '../login/login';

const Main = () => {
  //

  return (
    <>
      {/* <div className="Main">
        <Flex height={'100vh'} justifyContent={'center'} pt="35px">
          <Box
            bg={'gray.200'}
            w={'550px'}
            height={'90vh'}
            roundedTopLeft={'25px'}
            roundedTopRight={'25px'}
            shadow={'dark-lg'}
          >
            <Flex
              //   justifyContent={'center'}
              alignItems={'center'}
              direction={'column'}
            >
              <Box
                bg={'gray.50'}
                height={'620px'}
                mt={'25px'}
                mb={'25px'}
                w={'500px'}
                rounded={'15px'}
                boxShadow={'inner'}
              > */}
      <MainApp />
      {/* <Login />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </div> */}
    </>
  );
};

export default Main;
