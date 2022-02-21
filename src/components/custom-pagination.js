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
  Text,
  layout,
} from '@chakra-ui/react';

const CustomPagination = (props) => {
  const [currNum, setCurrNum] = useState(1);

  return (
    <Flex direction="row">
      <Button
        onClick={() => {
          props.handler('prev');
        }}
      >
        이전
      </Button>
      {/* 
      {currNum.map((v, i) => (
        
      ))} */}

      <Button
        onClick={() => {
          props.handler('next');
        }}
      >
        다음
      </Button>
    </Flex>
  );
};

export default CustomPagination;
