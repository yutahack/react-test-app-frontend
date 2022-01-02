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

const Main = () => {
  //

  return (
    <>
      <div className="Main">
        <Flex height={'1000px'} justifyContent={'center'} pt="35px">
          <Box
            h="550px"
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
                mb={'5vh'}
                w={'500px'}
                rounded={'15px'}
                boxShadow={'inner'}
              >
                <MainApp />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </div>
    </>
  );
};

export default Main;
