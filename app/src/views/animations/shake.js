import React, { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';
import './shake.css';

const AnimatedButton = (props) => {
  return <div className={props.shake}>{props.children}</div>;
};

export default AnimatedButton;
