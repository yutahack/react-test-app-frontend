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
import { ArrowRightIcon } from '@chakra-ui/icons';
import useLocalStorage from '../../utils/local-storage';
import { priceToString } from '../../utils/utils';
import CustomButtonR from '../../components/custom-button-r';
import { useNavigate } from 'react-router-dom';

const Purchase = () => {
  const [cartList, setCartList] = useState([]);
  const [localCartList, setLocalCartList] = useLocalStorage('localCartList', []);
  const [totalPrice, setTotalPrice] = useState('');
  const [payment, setPayment] = useState('');
  let navigate = useNavigate();

  const columnHeaders = [
    { name: 'No', key: 'no', width: '15%' },
    { name: '상품', key: 'prd_name', width: '50%' },
    { name: '수량', key: 'amount', width: '20%' },
    { name: '소계', key: 'prd_price', width: '20%' },
  ];

  const headerHeight = '50px';
  const listHeight = '70px';

  const ProductListHeader = (props) => {
    return (
      <Flex w={props.width}>
        <Box w="100%" h={headerHeight}>
          <Flex h="100%">
            {props.headers.map((v, i) => {
              return (
                <Flex
                  w={v.width}
                  h="100%"
                  justifyItems="center"
                  alignContent="center"
                  alignItems="center"
                >
                  <Text w="100%" fontWeight="bold">
                    {v.name}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    );
  };

  const SortList = (props) => {
    var seq = 1;
    const d = props.data;
    const output = d.reduce((acc, curr) => {
      curr.amount = 1;
      const exists = acc.find((o) => o.prd_code === curr.prd_code && o.prd_name === curr.prd_name);

      exists ? exists.amount++ : acc.push(curr);

      return acc;
    }, []);
    // console.log('out', output);

    const img_src = (code) => {
      return 'prodImages/' + code + '.png';
    };

    const inc_seq = () => {
      var s = seq;
      seq = s + 1;
    };

    return (
      <>
        <Flex width={props.width} maxHeight="100px" direction="column">
          {output.map((v1, i) => {
            return (
              <>
                <Flex>
                  <Box
                    w="100%"
                    h={listHeight}
                    bg="gray.100"
                    boxShadow="inner"
                    borderRadius="10px"
                    mb="5px"
                  >
                    <Flex h="100%">
                      {columnHeaders.map((v2, i) => {
                        let keyVal = Reflect.get(v1, v2.key);
                        if ('no' === v2.key) {
                          keyVal = seq;
                        } else if ('prd_price' === v2.key) {
                          keyVal = priceToString(keyVal * v1.amount) + ' 원';
                        }

                        // console.log('v', v1, v2);
                        // console.log('kv', keyVal);
                        return (
                          <Flex
                            w={v2.width}
                            h="100%"
                            justifyItems="center"
                            alignContent="center"
                            alignItems="center"
                          >
                            {'prd_name' === v2.key ? (
                              <Flex
                                w="100%"
                                h="100%"
                                justifyContent="center"
                                alignItems="center"
                                pl="10px"
                                pr="10px"
                              >
                                <Image src={img_src(v1.prd_code)} w="30%" />
                                <Text w="60%">{keyVal}</Text>
                              </Flex>
                            ) : (
                              <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
                                <Text w="100%">{keyVal}</Text>
                              </Flex>
                            )}
                          </Flex>
                        );
                      })}
                      {inc_seq()}
                    </Flex>
                  </Box>
                </Flex>
              </>
            );
          })}
        </Flex>
      </>
    );
  };

  const ProductList = (props) => {
    const d = props.data;

    return (
      <>
        {/* <Box boxShadow="inner" bg="gray.100" h="380px"> */}
        <Flex width="100%" h="280px" direction="column" alignItems="center">
          <ProductListHeader width="98%" headers={props.headers} />

          <SortList width="98%" data={props.data} />
        </Flex>
        {/* </Box> */}
      </>
    );
  };

  const PaymentIcon = (props) => {
    let iconLabel = '';
    switch (props.payment) {
      case 'credit-card':
        iconLabel = '신용카드';
        break;

      case 'samsung-pay':
        iconLabel = '삼성페이';
        break;

      case 'kakao-pay':
        iconLabel = '카카오페이';
        break;

      case 'ssg-pay':
        iconLabel = 'SSG PAY';
        break;

      case 'payco':
        iconLabel = 'PAYCO';
        break;

      default:
        iconLabel = '';
        break;
    }
    return (
      <>
        <Flex direction="column" w="80px" m={props.m}>
          <CustomButtonR
            w="70px"
            h="70px"
            r="10px"
            color="gray.100"
            activeColor="gray.200"
            mr="00px"
            onClick={() => setPaymentMethod(iconLabel)}
          >
            {'credit-card' === props.payment && (
              <Image src={'paymentIcons/creditcard-icon.png'} p="10px"></Image>
            )}
            {'samsung-pay' === props.payment && (
              <Image src={'paymentIcons/sampay-icon.webp'} borderRadius="10px"></Image>
            )}
            {'kakao-pay' === props.payment && (
              <Image src={'paymentIcons/kakaopay-icon.jpeg'} borderRadius="10px"></Image>
            )}
            {'ssg-pay' === props.payment && (
              <Image src={'paymentIcons/ssgpay-icon.png'} borderRadius="10px"></Image>
            )}
            {'payco' === props.payment && (
              <Image src={'paymentIcons/payco-icon.png'} borderRadius="10px"></Image>
            )}
          </CustomButtonR>
          <Text fontWeight="bold" fontSize="14px" mt="5px">
            {iconLabel}
          </Text>
        </Flex>
      </>
    );
  };

  const PurchaseMessage = (props) => {
    return (
      <>
        <Text fontSize="20px" fontWeight="bold">
          {props.message}
        </Text>
      </>
    );
  };

  const PurchaseField = (props) => {
    return (
      <>
        <Flex
          h="80%"
          p="0px"
          w={props.w}
          justifyContent="center"
          alignItems="center"
          borderRadius="10px"
          bg="gray.50"
          shadow="inner"
        >
          <Text fontSize="20px" fontWeight="bold">
            {props.message}
          </Text>
        </Flex>
      </>
    );
  };

  const setPaymentMethod = (method) => {
    setPayment(method);
  };

  useEffect(() => {
    var tmp = [...localCartList];
    setCartList(tmp);

    var tp = 0;
    localCartList.map((v, i) => {
      tp += parseInt(v.prd_price);
    });
    setTotalPrice(tp);
  }, [localCartList]);

  const messageSpace = '7px';
  return (
    <>
      <div>
        {/* <Flex
          w="500px"
          h="60px"
          bg="blue.500"
          alignItems="center"
          justifyContent="center"
          roundedTopLeft="10px"
          roundedTopRight="10px"
          shadow="lg"
        >
          <Text fontSize="24px" fontWeight="bold" color="white" alignItems="center">
            구매하기
          </Text>
        </Flex> */}

        {/* <Flex direction={'column'} width={'500px'} pt="0px" pl="10px" pr="10px"> */}

        <Box
          w="480px"
          borderRadius="0"
          boxShadow="base"
          bg="gray.300"
          borderRadius="10px"
          p="10px"
          m="10px"
        >
          <Text
            fontSize="20px"
            fontWeight="bold"
            color="black"
            textAlign="start"
            alignItems="left"
            ml="10px"
          >
            1. 구매하실 상품과 수량을 확인해주세요.
          </Text>
          {cartList && <ProductList data={localCartList} headers={columnHeaders} />}
        </Box>

        <Box
          w="480px"
          borderRadius="0"
          boxShadow="base"
          bg="gray.300"
          borderRadius="10px"
          pt="10px"
          pl="10px"
          pr="10px"
          ml="10px"
          mr="10px"
          mb="10px"
        >
          <Text
            fontSize="20px"
            fontWeight="bold"
            color="black"
            textAlign="start"
            alignItems="left"
            ml="10px"
          >
            2. 결제 수단을 선택하세요.
          </Text>
          <Flex direction="row" justifyContent="center">
            <PaymentIcon payment="credit-card" m="10px" />
            <PaymentIcon payment="samsung-pay" m="10px" />
            <PaymentIcon payment="kakao-pay" m="10px" />
            <PaymentIcon payment="ssg-pay" m="10px" />
            <PaymentIcon payment="payco" m="10px" />
          </Flex>
        </Box>

        <Box
          w="480px"
          h="95px"
          borderRadius="0"
          boxShadow="base"
          bg="gray.300"
          borderRadius="10px"
          p="10px"
          ml="10px"
          mr="10px"
        >
          <Flex h="100%" justifyContent="center" alignItems="center">
            <PurchaseMessage message="총 금액" />
            <Flex w={messageSpace} />
            <PurchaseField w="23%" message={priceToString(totalPrice) + ' 원'} />
            <Flex w={messageSpace} />
            <PurchaseMessage message="을" />
            <Flex w={messageSpace} />
            <PurchaseField w="23%" message={payment} />
            <Flex w={messageSpace} />
            <PurchaseMessage message="로" />
            <Flex w={messageSpace} />
            <CustomButtonR
              h="80%"
              w="23%"
              r="10px"
              color="red.500"
              activeColor="red.600"
              mr="00px"
              onClick={() => {
                navigate('/Purchasing');
                console.log(navigate);
              }}
            >
              <Flex justifyContent="center" alignItems="center">
                <Text fontWeight="bold">결제하기</Text>
                <ArrowRightIcon ml="5px" mb="1px" w="10px" />
              </Flex>
            </CustomButtonR>
          </Flex>
        </Box>
      </div>
    </>
  );
};

export default Purchase;
