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
} from '@chakra-ui/react';
import './style.css';
import ProductCard from './product-card';

const Products = () => {
  //
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
    <Tabs h="lg" pt="10px" isFitted variant="soft-rounded" colorScheme="green">
      <TabList h="30px">
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel p="5px">
          <Wrap p={'0px'} pt="00px" spacing={'10px'}>
            <WrapItem>
              <ProductCard />
            </WrapItem>
            <WrapItem>
              <ProductCard />
            </WrapItem>
            <WrapItem>
              <ProductCard />
            </WrapItem>
          </Wrap>
        </TabPanel>
        <TabPanel>
          <Wrap h={'lg'} p={'0px'} pt="10px" spacing={'10px'}></Wrap>
        </TabPanel>
      </TabPanels>
    </Tabs>
    // </Box>
  );
};

export default Products;
