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
  Image,
} from '@chakra-ui/react';
import AnimatedProgressProvider from './ProgressProviders/AnimatedProgressProvider';
// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Animation
import { easeQuadInOut } from 'd3-ease';
// import AnimatedProgressProvider from './AnimatedProgressProvider';
import ChangingProgressProvider from './ProgressProviders/ChangingProgressProvider';

const Purchasing = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Flex h="100%" w="500px" direction="column" justifyContent="center" alignItems="center">
        <Text fontSize="36px" mb="50px">
          결제를 진행중입니다.
        </Text>

        <Flex w="50%" direction="column">
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={100}
            duration={3.0}
            easingFunction={easeQuadInOut}
            //   repeat
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbar
                  value={value}
                  text={`${roundedValue}%`}
                  /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                  styles={buildStyles({ pathTransition: 'none' })}
                />
              );
            }}
          </AnimatedProgressProvider>
        </Flex>
      </Flex>
    </>
  );
};

export default Purchasing;
