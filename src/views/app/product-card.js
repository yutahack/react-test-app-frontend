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
  Center,
  Square,
  Text,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

import './style.css';
import '../animations/shake.css';
import { priceToString } from '../../utils/utils';
import BuyModal from '../modal/buy-modal';
import CustomButton from '../../components/custom-button';
import ShakeText from '../animations/shake';
import useLocalStorage from '../../utils/local-storage';

const ProductCard = (props) => {
  const {
    isOpen: isOpenBuyModal,
    onOpen: onOpenBuyModal,
    onClose: onCloseBuyModal,
  } = useDisclosure();

  const [itemNumber, setItemNumber] = useState(1);
  const [shakeAnimation, setShakeAnimation] = useState(false);
  const [shake, setShake] = useState(false);
  const [showWarnMessage, setShowWarnMessage] = useState(false);
  //   const [lsCart, setLsCart] = useLocalStorage('inCart', []);

  const BuyModalMessage = (props) => {
    // console.log('clicked', removePrdSeq);
    return (
      <>
        <div>
          <Flex direction="column">
            <Flex
              h="100%"
              w="100%"
              justifyContent="center"
              alignContent="center"
              direction="row"
              mb="10px"
            >
              <Flex
                h="100%"
                w="50%"
                justifyContent="center"
                alignContent="center"
                alignItems="center"
              >
                <Image
                  h="100%"
                  w="100%"
                  src={'prodImages/' + props.prd_code + '.png'}
                  // shadow="inner"
                  // borderColor="black"
                  // borderWidth="10px"
                  // background="gray.100"
                  // rounded="20px"
                ></Image>
                {/* <Text textAlign="center" fontSize="32px">
                {cart[removePrdSeq].prd_name}
              </Text>
              <Text textAlign="center" fontSize="20px">
                {priceToString(cart[removePrdSeq].prd_price) + ' 원'}
              </Text>
              <Text textAlign="center" mt="20px">
                장바구니에서 해당 상품을 제외하시겠습니까?
              </Text> */}
              </Flex>
              <Flex
                w="45%"
                direction="column"
                justifyContent="center"
                alignContent="center"
                //   alignItems="center"
                pl="20px"
              >
                <Text fontSize="30px">{props.prd_name}</Text>
                <Text fontSize="24px">{priceToString(props.prd_price) + ' 원'}</Text>
              </Flex>
            </Flex>

            <Flex width="100%" height="80px">
              <Flex
                width="100%"
                height="60px"
                direction="row"
                justifyContent="center"
                alignContent="center"
                alignItems="center"
              >
                <Flex width="60px" height="100%" justifyContent="center" alignItems="center">
                  <CustomButton
                    w="90%"
                    h="90%"
                    color="green.400"
                    activeColor="green.600"
                    onClick={() => clickedPlusMinusButton('-')}
                  >
                    <MinusIcon />
                  </CustomButton>
                </Flex>
                <Flex width="150px" height="100%" justifyContent="center" alignItems="center">
                  <Box w="90%" h="90%" bg="gray.100" rounded="full" boxShadow="inner">
                    <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
                      <Text fontSize="30px">{itemNumber}</Text>
                    </Flex>
                  </Box>
                </Flex>
                <Flex width="60px" height="100%">
                  <CustomButton
                    w="90%"
                    h="90%"
                    color="green.400"
                    activeColor="green.600"
                    onClick={() => clickedPlusMinusButton('+')}
                  >
                    <AddIcon />
                  </CustomButton>
                </Flex>
              </Flex>
            </Flex>

            <ShakeText w="100%" shake={shakeAnimation ? 'shake' : null}>
              <Text w="100%" h="30px" color="red" textAlign="center">
                {showWarnMessage && '장바구니에는 최대 3개의 상품을 담을 수 있습니다.'}
              </Text>
            </ShakeText>
          </Flex>
        </div>
      </>
    );
  };
  //

  const clickedPlusMinusButton = (btnType) => {
    console.log();
    switch (btnType) {
      case '+':
        // var tmp = [...props.cartState.cartList];
        // let cartItemNumber = tmp.length;
        // if (cartItemNumber < 3 - itemNumber) {
        //   setItemNumber(itemNumber + 1);
        // }
        setItemNumber(itemNumber + 1);
        break;

      case '-':
        if (itemNumber > 1) {
          setItemNumber(itemNumber - 1);
        }
        break;
    }
  };

  const clickedModalYnButton = (btnType) => {
    switch (btnType) {
      case 'Y':
        setShowWarnMessage(false);
        var tmp = [...props.cartState.cartList];

        if (tmp.length <= 3 - itemNumber) {
          for (var i = 0; i < itemNumber; i++) {
            tmp.push({
              prd_code: props.prd_code,
              prd_name: props.prd_name,
              prd_price: props.prd_price,
            });
          }
          props.cartState.setCartList(tmp);
          //   setLsCart(tmp);

          setItemNumber(1);
          onCloseBuyModal();
          //   setShowWarnMessage(false);
        } else {
          //에러가 뜬 상태에서 두번 누르면 다시 흔들기
          if (!showWarnMessage) {
            setShowWarnMessage(true);
          } else {
            setShakeAnimation(true);
            setShowWarnMessage(true);
          }
        }
        break;

      case 'N':
        setItemNumber(1);
        onCloseBuyModal();
        setShowWarnMessage(false);
        break;
    }
  };

  useEffect(() => {
    setShakeAnimation(true);
  }, [showWarnMessage]);

  useEffect(() => {
    setTimeout(() => {
      setShakeAnimation(false);
    }, 500);
  }, [shakeAnimation]);

  useEffect(() => {
    <></>;
  }, []);

  return (
    <>
      <Box
        as="button"
        w="150px"
        h="180px"
        maxW="sm"
        borderWidth="1px"
        borderRadius="15px"
        boxShadow={'base'}
        bgColor={'white'}
        onClick={() => {}}
        border="1px"
        borderColor="#ccd0d5"
        lineHeight="1.2"
        transition="all 0.5s cubic-bezier(.08,.52,.52,1)"
        _hover={{ bg: '#ebedf0' }}
        _active={{
          bg: '#dddfe2',
          transform: 'scale(0.85)',
          borderColor: '#bec3c9',
        }}
        _focus={{
          boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
        }}
        onClick={onOpenBuyModal}
      >
        <Flex h="100%" direction="column">
          <Box
            h="110px"
            w="100%"
            bg="gray.100"
            boxShadow="base"
            borderTopLeftRadius="15px"
            borderTopRightRadius="15px"
          >
            <Flex alignItems="center" h="100%" justifyContent="center" alignContent="center">
              <Image src={'prodImages/' + props.prd_code + '.png'} w="110" h="110"></Image>
            </Flex>
          </Box>
          <Flex h="100%" direction="column" justifyContent="center" alignContent="center">
            <Text fontSize="16px" fontWeight="bold" mb="3px">
              {props.prd_name}
            </Text>
            <Text>{priceToString(props.prd_price) + ' 원'}</Text>
          </Flex>
        </Flex>
      </Box>

      <BuyModal
        isOpen={isOpenBuyModal}
        onClose={onCloseBuyModal}
        onClickedY={() => clickedModalYnButton('Y')}
        onClickedN={() => clickedModalYnButton('N')}
        body={
          <BuyModalMessage
            prd_code={props.prd_code}
            prd_name={props.prd_name}
            prd_price={props.prd_price}
            cartState={props.cartState}
          />
        }
        title=""
        cartState={props.cartState}
      ></BuyModal>
    </>
  );
};

export default ProductCard;
