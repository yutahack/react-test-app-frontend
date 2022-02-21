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
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  useDisclosure,
  Image,
  Text,
} from '@chakra-ui/react';
import './style.css';
import ProductCard from './product-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import client from '../../client/client';
import { css } from '@emotion/react';
import PuffLoader from 'react-spinners/PuffLoader';
import BuyModal from '../modal/buy-modal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';
import SettingsMenu from './settings-menu';
import { useNavigate } from 'react-router-dom';

// install Swiper modules
SwiperCore.use([Pagination]);

// Override Loading Spinner style
const lsOverride = css`
  margin: 0 auto;
  border-color: red;
`;

const ProductSwiper = (props) => {
  let navigate = useNavigate();
  const [prodcutList, setProdcutList] = useState([]);
  const [productListLoadingState, setProductListLoadingState] = useState(true);

  // const burger_prds = [
  //   { id: 0, prd_code: '0001', prd_name: 'Hamburger01', prd_price: '1000' },
  //   { id: 1, prd_code: '0002', prd_name: 'Hamburger02', prd_price: '1000' },
  //   { id: 2, prd_code: '0003', prd_name: 'Hamburger03', prd_price: '1000' },
  //   { id: 3, prd_code: '0001', prd_name: 'Product04', prd_price: '1000' },
  //   { id: 4, prd_code: '0001', prd_name: 'Product05', prd_price: '1000' },
  //   { id: 5, prd_code: '0001', prd_name: 'Product06', prd_price: '1000' },
  //   { id: 6, prd_code: '0001', prd_name: 'Product07', prd_price: '1000' },
  //   { id: 7, prd_code: '0001', prd_name: 'Product08', prd_price: '1000' },
  //   { id: 8, prd_code: '0001', prd_name: 'Product09', prd_price: '1000' },
  //   { id: 9, prd_code: '0001', prd_name: 'Product10', prd_price: '1000' },
  //   { id: 10, prd_code: '0001', prd_name: 'Product11', prd_price: '1000' },
  //   { id: 11, prd_code: '0001', prd_name: 'Product12', prd_price: '1000' },
  //   { id: 12, prd_code: '0001', prd_name: 'Product13', prd_price: '1000' },
  // ];

  const AddProducts = (props) => {
    //
    var offset = 0;
    var tmp = [];
    prodcutList.map((v, i) => {
      if (props.prd_type === v.prd_type) {
        tmp.push(v);
      }
    });
    return (
      <div>
        {tmp.map(
          (v, i) =>
            i % 6 == 0 && (
              <SwiperSlide>
                <Wrap h="420px" p={'5px'} pt="0px" spacing={'10px'}>
                  {mapProducts(tmp, i, props.cartState)}
                  {/* {console.log(i)} */}
                </Wrap>
              </SwiperSlide>
            )
        )}
      </div>
    );
    // return (
    //   <div>
    //     {products.map(
    //       (product, i) =>
    //         i % 6 == 0 && (
    //           <SwiperSlide>
    //             <Wrap h="420px" p={'5px'} pt="0px" spacing={'10px'}>
    //               {mapProducts(products, i)}
    //               {/* {console.log(i)} */}
    //             </Wrap>
    //           </SwiperSlide>
    //         )
    //     )}
    //   </div>
    // );
  };

  const mapProducts = (products, offset, cartState) => {
    return (
      <>
        {products.map(
          (value, i) =>
            i < offset + 6 &&
            i >= offset && (
              <WrapItem>
                <ProductCard
                  key={i}
                  prd_code={value.prd_code}
                  prd_name={value.prd_name}
                  prd_price={value.prd_price}
                  cartState={cartState}
                />
              </WrapItem>
            )
        )}
      </>
    );
  };

  // const mapProductList = (data) => {
  //   console.log(data);
  //   var tmp = [];
  //   data.map((v, i) => {
  //     console.log('vpt', v.prd_type);
  //     tmp.push ({prd_type: })
  //   });
  // };

  const fetchProductList = async () => {
    setProductListLoadingState(true);

    const { loading, response, value } = await client.getProductList({
      offset: 0,
      limit: 999,
      conditions: '',
    });
    if (loading) return 'Loading...';

    console.log('val!', value);
    // if ('200' != response) return `Error! ${response.message}`;
    // return 'success';
    setProductListLoadingState(false);
    if ('200' == response && '600' == value.data.GetProductList.error) {
      setProdcutList(value.data.GetProductList.result);
    } else {
      console.log('ng');
    }
  };

  useEffect(() => {
    //
    fetchProductList();
    // let timer = setTimeout(() => {
    //   setProductListLoadingState(false);
    // }, 2000);
  }, []);

  return (
    // <Box
    //   h="lg"
    //   bg="gray.100"
    //   mt={'5px'}
    //   mb={'5px'}
    //   rounded={'0px'}
    //   shadow={'inner'}
    //   justifyContent={'center'}
    // >
    <>
      <>
        <Tabs h="480px" pt="0px" isFitted variant="soft-rounded" colorScheme="green">
          <Flex>
            <TabList
              alignItems="center"
              h="50px"
              pl="5px"
              pr="5px"
              mt="15px"
              mb="10px"
              bg="gray.100"
              shadow="inner"
              rounded="25px"
              w="420px"
            >
              <Tab
                _selected={{ color: 'white', bg: 'blue.400', rounded: '20px' }}
                shadow="base"
                p="10px"
                h="40px"
                ml="0px"
                mr="10px"
              >
                버거
              </Tab>
              <Tab
                _selected={{ color: 'white', bg: 'blue.400', rounded: '20px' }}
                shadow="base"
                p="10px"
                h="40px"
                ml="0px"
                mr="10px"
              >
                스낵
              </Tab>
              <Tab
                _selected={{ color: 'white', bg: 'blue.400', rounded: '20px' }}
                shadow="base"
                p="10px"
                h="40px"
                ml="0px"
              >
                사이드
              </Tab>
            </TabList>

            <SettingsMenu />
          </Flex>

          {productListLoadingState ? (
            <>
              <Box h="400px">
                <Flex h="100%" w="100%" justifyContent="center" alignItems="center">
                  <PuffLoader color={'#5A97DB'} loading={true} size={80}></PuffLoader>
                </Flex>
              </Box>
            </>
          ) : (
            <TabPanels>
              <TabPanel p="0px">
                <Swiper pagination={true} className="mySwiper">
                  {AddProducts({ prd_type: 'PT0001', cartState: props.cartState })}
                </Swiper>
              </TabPanel>
              <TabPanel p="0px">
                <Flex width="100%" pl="0">
                  <Swiper pagination={true} className="mySwiper">
                    {AddProducts({ prd_type: 'PT0002', cartState: props.cartState })}
                  </Swiper>
                </Flex>
              </TabPanel>
              <TabPanel p="0px">
                <Flex width="100%" pl="0">
                  <Swiper pagination={true} className="mySwiper">
                    {AddProducts({ prd_type: 'PT0003', cartState: props.cartState })}
                  </Swiper>
                </Flex>
              </TabPanel>
            </TabPanels>
          )}
        </Tabs>
      </>
    </>
  );
};

export default ProductSwiper;
