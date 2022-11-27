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
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { TiDelete } from 'react-icons/ti';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { ArrowRightIcon } from '@chakra-ui/icons';
import useLocalStorage from '../../utils/local-storage';
import { priceToString } from '../../utils/utils';
import CustomButtonR from '../../components/custom-button-r';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/custom-button';

const Password = () => {
  let navigate = useNavigate();
  const [pw, setPw] = useState('');
  const [showClearButton, setShowClearButton] = useState('collapse');
  const [authority, setAuthority] = useLocalStorage('authority', '');

  const onNumKeyClick = (val) => {
    if (pw.length < 8) {
      let tmp = pw;
      setPw(tmp + val);
    }
  };

  const onDelKeyClick = (val) => {
    if (pw.length > 0) {
      let tmp = pw;
      setPw(tmp.slice(0, -1));
    }
  };

  const verityPw = (val) => {
    let pw = '1111';
    if (pw === val) {
      return true;
    } else {
      return false;
    }
  };

  const onConfirmKeyClick = (val) => {
    var res = verityPw(pw);
    if (res) {
      navigate('/Admin/Menu');
    } else {
      setPw('');
    }
  };

  const NumKey = (props) => {
    return (
      <>
        <CustomButton
          color="blue.300"
          activeColor="blue.500"
          m="5px"
          w="80px"
          h="80px"
          onClick={() => onNumKeyClick(props.text)}
        >
          <Text fontSize="32px">{props.text}</Text>
        </CustomButton>
      </>
    );
  };
  const DeleteKey = (props) => {
    return (
      <>
        <CustomButton
          color="gray.300"
          activeColor="gray.500"
          m="5px"
          w="80px"
          h="80px"
          onClick={() => onDelKeyClick()}
        >
          <Flex justifyContent="center">
            <RiDeleteBack2Fill size="32px" />
          </Flex>
        </CustomButton>
      </>
    );
  };
  const ConfirmKey = (props) => {
    return (
      <>
        <CustomButton
          color="red.500"
          activeColor="red.600"
          m="5px"
          w="80px"
          h="80px"
          onClick={() => onConfirmKeyClick()}
        >
          {/* <Text fontSize="32px">{props.text}</Text> */}
          <Flex justifyContent="center">
            <BsArrowReturnLeft size="30px" />
          </Flex>
        </CustomButton>
      </>
    );
  };

  const KeyPad = () => {
    return (
      <>
        <Flex direction="column">
          <Flex direction="row">
            <NumKey text="1" />
            <NumKey text="2" />
            <NumKey text="3" />
          </Flex>
          <Flex direction="row">
            <NumKey text="4" />
            <NumKey text="5" />
            <NumKey text="6" />
          </Flex>
          <Flex direction="row">
            <NumKey text="7" />
            <NumKey text="8" />
            <NumKey text="9" />
          </Flex>
          <Flex direction="row">
            <DeleteKey />
            <NumKey text="0" />
            <ConfirmKey />
          </Flex>
        </Flex>
      </>
    );
  };

  useEffect(() => {
    if (0 === pw.length) {
      setShowClearButton('collapse');
    } else {
      setShowClearButton('visible');
    }
  }, [pw]);
  return (
    <>
      <Flex w="500px" h="100%" direction="column" justifyContent="center" alignItems="center">
        <div style={{ fontSize: '32px' }}>관리자 로그인</div>

        <Flex h="30px" />

        <InputGroup w="250px">
          <Input
            type="password"
            fontSize="36px"
            height="50px"
            textAlign="center"
            maxLength="8"
            placeholder="--------"
            shadow="inner"
            background="white"
            onChange={(event) => {
              setPw(event.target.value);
            }}
            value={pw}
            pr="30px"
            borderRadius="full"
          />
          <InputRightElement h="100%" pr="15px">
            <Button
              w="30px"
              h="80%"
              bg="transparent"
              borderRadius="full"
              onClick={() => {
                setPw('');
              }}
              visibility={showClearButton}
            >
              <Flex>
                <TiDelete color="gray" size="30px" />
              </Flex>
            </Button>
          </InputRightElement>
        </InputGroup>

        <Flex h="30px" />

        <KeyPad />

        <Flex h="30px" />
        <Flex>
          <Button
            w="260px"
            h="40px"
            bg="gray"
            borderRadius="full"
            onClick={() => {
              setAuthority('');
              navigate('/Signin');
            }}
          >
            <div style={{ color: 'White' }}>LOGOUT</div>
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Password;
