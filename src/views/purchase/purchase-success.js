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

import 'react-circular-progressbar/dist/styles.css';
import { Transition, animated, useSpring } from 'react-spring';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const AnimatedTitle = () => {
    const spring = useSpring({
      opacity: 1,
      marginTop: 0,
      from: { opacity: 0, marginTop: -20 },
      config: { duration: '300' },
    });
    return (
      <animated.div style={spring}>
        <Text fontSize="36px" mb="50px">
          결제가 완료되었습니다.
        </Text>
      </animated.div>
    );
  };

  const SampleSpringA = () => {
    // (A)
    const [enter, setEnter] = useState(false);
    const spring = useSpring({
      //   fontSize: enter ? '24pt' : '12pt',
      //   color: enter ? 'red' : 'green',
      //   width: enter ? '100%' : '50%',
      width: '100%',
      from: { width: '10%' },
      config: { duration: '5000' },
      delay: '500',
    });
    return (
      <animated.div
        style={spring}
        // onMouseEnter={(e) => setEnter(true)}
        // onMouseLeave={(e) => setEnter(false)}
      >
        {/* <Flex h="100px" bg="gray.500"></Flex> */}
        <Box w="200px" h="200px" rounded="full" bg="red.100">
          aa
        </Box>
      </animated.div>
    );
  };

  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/Main');
    }, 3 * 1000);
  }, []);
  const props = useSpring({
    to: [
      { opacity: 1, color: 'black' },
      { opacity: 0, color: 'rgb(14,26,19)' },
    ],
    from: { opacity: 0, color: 'red' },
  });
  const sexystyle = {
    width: '50%',
    margin: '0 auto',
    marginTop: 150,
  };

  return (
    <>
      <Flex h="100%" w="500px" direction="column" justifyContent="center" alignItems="center">
        {/* <Text fontSize="36px" mb="50px">
          결제가 완료되었습니다.
        </Text> */}
        <Flex height="300px">
          <AnimatedTitle />
        </Flex>
        <Flex w="50%" direction="column">
          {/* <SampleSpringA /> */}
        </Flex>
      </Flex>
    </>
  );
};

export default Success;
