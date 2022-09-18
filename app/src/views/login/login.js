import { React, useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
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
import { CheckIcon } from '@chakra-ui/icons';
import query from '../../queries/query';

// const _sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
// const timer = async () => {
//   await _sleep(1000);
//   console.log('First');
// };

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toast = useToast();
  const [userLoadingState, setUserLoadingState] = useState(false);

  const UserLogin = async (username, password) => {
    // await timer();
    setUserLoadingState(true);
    const { loading, response, value } = await query.UserLogin({
      user_id: username,
      user_pw: password,
    });
    if (loading) return 'Loading...';

    // if ('200' != response) return `Error! ${response.message}`;
    // return 'success';
    setUserLoadingState(false);
    if ('200' == response && '600' == value.data.Login.error) {
      toast.closeAll();
      toast({
        title: `Welcome ${username}!`,
        status: 'success',
        isClosable: false,
      });
    } else {
      toast.closeAll();
      toast({
        title: `Incorrect username or password.`,
        description: 'Please double-check and try again.',
        status: 'error',
        isClosable: false,
      });
    }
  };

  const LoginButton = () => {
    const statuses = ['success', 'error'];

    return (
      <Button
        leftIcon={<CheckIcon />}
        height={'45px'}
        colorScheme="teal"
        fontSize={'12pt'}
        isLoading={userLoadingState}
        shadow={'lg'}
        onClick={() => {
          UserLogin(username, password);
        }}
      >
        Sign in
      </Button>
    );
  };

  useEffect(() => {
    //
  }, [userLoadingState]);

  return (
    <>
      <Flex
        height={'100%'}
        w="500px"
        alignItems={'center'}
        justifyContent={'center'}
        alignContent={'center'}
      >
        <Box width={'70%'} maxWidth={'500px'} boxShadow={'dark-lg'} bg={'gray.50'} rounded={'md'}>
          <Flex direction={'column'} p={50} rounded={10}>
            <Heading size={'md'} mb={5} color={'black'} textAlign={'center'}>
              Sign in
            </Heading>
            <FormControl mb={'10px'}>
              <FormLabel>Username</FormLabel>
              <Input
                id="user_id"
                placeholder="ID"
                variant={'filled'}
                shadow={'inner'}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    UserLogin(username, password);
                  }
                }}
              />
            </FormControl>
            <FormControl mb={'25px'}>
              <FormLabel>Password</FormLabel>
              <Input
                id="password"
                placeholder="Password"
                variant={'filled'}
                type="password"
                shadow={'inner'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    UserLogin(username, password);
                  }
                }}
              />
            </FormControl>
            <LoginButton />
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
