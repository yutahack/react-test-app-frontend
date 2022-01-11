import { React, useState, useEffect } from 'react';
import { Button, Box } from '@chakra-ui/react';

const CustomButton = (props) => {
  return (
    <>
      <Box
        as="button"
        w={props.w}
        h={props.h}
        mr={props.mr}
        ml={props.ml}
        mt={props.mt}
        mb={props.mb}
        boxShadow="base"
        borderRadius="10px"
        border="white"
        borderWidth="10px"
        borderRadius="full"
        color="white"
        background={props.color}
        lineHeight="1.2"
        transition="all 0.5s cubic-bezier(.08,.52,.52,1)"
        _active={{
          bg: props.activeColor,
          transform: 'scale(0.9)',
          borderColor: '#bec3c9',
        }}
        _focus={{
          boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
        }}
        onClick={props.onClick}
      >
        {props.children}
      </Box>
    </>
  );
};

export default CustomButton;
