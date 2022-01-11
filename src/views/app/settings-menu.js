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
import { FcSettings } from 'react-icons/fc';

const SettingsMenu = () => {
  //
  //
  return (
    <>
      <Box
        alignItems="center"
        h="50px"
        pl="5px"
        pr="5px"
        mt="15px"
        mb="10px"
        ml="7px"
        bg="gray.100"
        shadow="inner"
        rounded="25px"
        w="50px"
      >
        <Flex h="100%" justifyContent="center" alignContent="center">
          <Button
            _selected={{ color: 'white', bg: 'blue.400', rounded: '20px' }}
            shadow="base"
            p="10px"
            h="40px"
            mt="5px"
            rounded="full"
          >
            <FcSettings size="20px" />
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default SettingsMenu;
