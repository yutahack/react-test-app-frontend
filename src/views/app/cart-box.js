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
  SkeletonText,
  Image,
  ScaleFade,
  useDisclosure,
  SlideFade,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { CgClose } from 'react-icons/cg';
import './style.css';
import YnModal from '../modal/yn-modal';
import { priceToString } from '../../utils/utils';
import CustomButton from '../../components/custom-button';
import useLocalStorage from '../../utils/local-storage';

var removePrdSeq = 0;
const CartBox = (props) => {
  const [inCart, setInCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { isOpen: isOpenYnModal, onOpen: onOpenYnModal, onClose: onCloseYnModal } = useDisclosure();
  //   const removePrdInfo = { prd_code: '', prd_name: '', prd_price: '', prd_img: '' };
  //   const [inCart, setInCart] = useLocalStorage('inCart', '');

  //   const cart = [
  //     { id: 0, prd_code: '0001', prd_name: 'Hamburger01', prd_price: '1000' },
  //     { id: 1, prd_code: '0002', prd_name: 'Hamburger02', prd_price: '1000' },
  //     { id: 2, prd_code: '0003', prd_name: 'Hamburger03', prd_price: '1000' },
  //   ];
  //   const { isOpen, onToggle } = useDisclosure();

  const flexCardFrameStyle = {
    baseStyle: {
      w: '100px',
      h: '100px',
      bg: 'red.100',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  const CartItemFrame = (props) => {
    var isEmptry = false;
    try {
      isEmptry = props.cart.prd_code ? false : true;
    } catch {
      isEmptry = true;
    }

    return (
      <Flex w="110px" h="110px" alignItems="center" justifyContent="center">
        <Box w="100px" h="100px" bg="gray.300" boxShadow="inner" rounded="10px">
          <Flex h="100%" w="100%" alignItems="center" justifyContent="center" direction="column">
            {isEmptry ? (
              <Text color="gray.500">Empty</Text>
            ) : (
              <CartItem prd_code={props.cart.prd_code} seq={props.seq} />
            )}
          </Flex>
        </Box>
      </Flex>
    );
  };

  //   const CartItemFrame = ({ cart }) => {
  //     return (
  //       <>
  //         <Flex w="110px" h="110px" alignItems="center" justifyContent="center">
  //           <Box w="100px" h="100px" bg="gray.300" boxShadow="inner" rounded="10px">
  //             <Flex h="100%" alignItems="center" justifyContent="center" direction="column">
  //               {/* {cart[0] ? <Text color="gray.500">Empty</Text> : <CartItem prd_code="0001" />} */}
  //               {console.log('aaa', cart[0].prd_code)}
  //             </Flex>
  //           </Box>
  //         </Flex>
  //         <Flex w="110px" h="110px" alignItems="center" justifyContent="center">
  //           <Box w="100px" h="100px" bg="gray.300" boxShadow="inner" rounded="10px">
  //             <Flex h="100%" alignItems="center" justifyContent="center" direction="column">
  //               {/* {cart[1] ? <Text color="gray.500">Empty</Text> : <CartItem prd_code="0001" />} */}
  //             </Flex>
  //           </Box>
  //         </Flex>
  //         <Flex w="110px" h="110px" alignItems="center" justifyContent="center">
  //           <Box w="100px" h="100px" bg="gray.300" boxShadow="inner" rounded="10px">
  //             <Flex h="100%" alignItems="center" justifyContent="center" direction="column">
  //               {/* {cart[2] ? <Text color="gray.500">Empty</Text> : <CartItem prd_code="0001" />} */}
  //             </Flex>
  //           </Box>
  //         </Flex>
  //       </>
  //     );
  //   };
  //   const CartItem = (props) => {
  //     return (
  //       <>
  //         <Flex h="100%" w="100%" justifyContent="center" alignContent="center" alignItems="center">
  //           <Box h="90%" w="90%" bg="white" rounded="5px" boxShadow="inner">
  //             <Image src={'prodImages/' + props.prd_code + '.png'}></Image>
  //           </Box>
  //         </Flex>
  //       </>
  //     );
  //   };

  const CartItem = (props) => {
    return (
      <>
        {/* <SlideFade in={true} offsetY="20px"> */}
        <Flex h="100%" w="100%" justifyContent="center" alignContent="center" alignItems="center">
          <Button
            h="90%"
            w="90%"
            bg="gray.50"
            rounded="5px"
            p="5px"
            boxShadow="inner"
            onClick={() => {
              onOpenYnModal();
              removePrdSeq = props.seq;
              //   console.log('pushed seq:', removePrdSeq);
            }}
          >
            <div>
              <Image src={'prodImages/' + props.prd_code + '.png'}></Image>
              <Box
                w="20px"
                h="20px"
                top="0"
                right="0"
                bg="gray.300"
                roundedTopRight="5px"
                roundedBottomLeft="3px"
                position="absolute"
              >
                <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
                  <CgClose color="white" />
                </Flex>
              </Box>
            </div>
          </Button>
        </Flex>
        {/* </SlideFade> */}
      </>
    );
  };

  useEffect(() => {
    //
    // rconsole.log('Cart:', inCart);
    console.log('cart-box-changed');

    // Calc total place
    let totalPrice = 0;
    inCart.map((value, index) => {
      totalPrice += parseInt(value.prd_price);
    });
    setTotalPrice(totalPrice);
  }, []);

  const BuyButton = () => {
    return (
      <>
        <Box
          as="button"
          w="100%"
          h="100%"
          mr="10px"
          ml="5px"
          boxShadow="base"
          borderRadius="10px"
          border="white"
          borderWidth="10px"
          bg="red.500"
          color="white"
          lineHeight="1.2"
          transition="all 0.5s cubic-bezier(.08,.52,.52,1)"
          //   _hover={{ bg: '#ebedf0' }}
          _active={{
            bg: 'red.600',
            transform: 'scale(0.9)',
            borderColor: '#bec3c9',
          }}
          _focus={{
            boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
          }}
        >
          <Flex direction="column">
            <Text fontSize="20px" fontWeight="bold" mt="0px">
              구매하기
            </Text>
            {/* <Text fontSize="14px" pt="6px">
              10,000 원
            </Text> */}
            {/* <Box
              bg="gray.50"
              color="black"
              fontSize="12px"
              mt="10px"
              p="3px"
              rounded="5px"
              boxShadow="inner"
            > */}
            <Text fontSize="14px" mt="5px">
              {priceToString(totalPrice) + ' 원'}
            </Text>
            {/* </Box> */}
          </Flex>
        </Box>
      </>
    );
  };
  //

  const RemovePrdModalMessage = (props) => {
    // console.log('clicked', removePrdSeq);
    return (
      <>
        <div>
          <Flex h="100%" w="100%" justifyContent="center" alignContent="center">
            <Flex
              h="100%"
              w="100%"
              direction="column"
              justifyContent="center"
              alignContent="center"
              alignItems="center"
            >
              <Image
                h="80%"
                w="80%"
                src={
                  inCart[removePrdSeq]
                    ? 'prodImages/' + inCart[removePrdSeq].prd_code + '.png'
                    : null
                }
              ></Image>
              <Text textAlign="center" fontSize="32px">
                {inCart[removePrdSeq] ? inCart[removePrdSeq].prd_name : null}
              </Text>
              <Text textAlign="center" fontSize="20px">
                {inCart[removePrdSeq]
                  ? priceToString(inCart[removePrdSeq].prd_price) + ' 원'
                  : null}
              </Text>
              <Text textAlign="center" mt="20px">
                장바구니에서 해당 상품을 제외하시겠습니까?
              </Text>
            </Flex>
          </Flex>
        </div>
      </>
    );
  };

  const clickedModalYnButton = (btnType) => {
    switch (btnType) {
      case 'Y':
        // var newCart = cart.filter((n) => n !== removePrdSeq);
        const removePrdInfo = inCart[removePrdSeq];
        const tmp = [...props.cartState.cartList];
        tmp.splice(removePrdSeq, 1);
        setInCart(tmp);
        props.cartState.setCartList(tmp);

        props.showToast({
          title: removePrdInfo.prd_name + ' 상품을 장바구니에서 제외하였습니다.',
          status: 'success',
        });
        break;

      case 'N':
        break;
    }
    onCloseYnModal();
  };

  // useEffect(() => {
  //   console.log('a', inCart);
  // }, [inCart]);

  //   useEffect(() => {
  //     window.addEventListener('storage', () => {
  //       const c = localStorage.getItem('inCart');
  //       console.log('c', c);
  //       setCartListner(c);
  //     });
  //   }, []);

  useEffect(() => {
    // console.log('cart-box-changed', props.cartState.cartList);
    var tmp = [...props.cartState.cartList];
    // console.log('cart-box-tmp', tmp);
    setInCart(tmp);
    // console.log('cart-box-incart', inCart);
  }, [props.cartState.cartList]);

  return (
    <>
      <Box h="120px" bg="blue.500" borderRadius="10px" boxShadow="base" mt="10px" bg="gray.200">
        <Flex h="120px" alignItems={'center'} alignContent="center">
          <Flex w="360px" ml="5px" alignItems="center" alignContent="center">
            <CartItemFrame cart={inCart[0]} seq={0} />
            <CartItemFrame cart={inCart[1]} seq={1} />
            <CartItemFrame cart={inCart[2]} seq={2} />
          </Flex>

          <Flex w="100%" h="100px" direction="column">
            <Flex w="100%" h="100%">
              <BuyButton />
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <YnModal
        isOpen={isOpenYnModal}
        onClose={onCloseYnModal}
        onClickedY={() => clickedModalYnButton('Y')}
        onClickedN={() => clickedModalYnButton('N')}
        body={<RemovePrdModalMessage />}
        title=""
      ></YnModal>
    </>
  );
};

export default CartBox;
