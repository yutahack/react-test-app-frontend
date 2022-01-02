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

const ProductCard = () => {
  //
  return (
    <Box
      w="150px"
      h="30vh"
      maxW="sm"
      borderWidth="1px"
      borderRadius="10px"
      boxShadow={'base'}
      bgColor={'white'}
    >
      <Box h="20vh" bg="green.400" borderTopLeftRadius="10px" borderTopRightRadius="10px">
        d
      </Box>
    </Box>
  );
};

export default ProductCard;
