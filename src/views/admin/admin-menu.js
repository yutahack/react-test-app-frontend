import { React, useState, useEffect } from 'react';
import { Button, Flex, Menu, Box, SimpleGrid, Text } from '@chakra-ui/react';
import useLocalStorage from '../../utils/local-storage';
import { priceToString } from '../../utils/utils';
import CustomButtonR from '../../components/custom-button-r';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/custom-button';
import { BiSquareRounded } from 'react-icons/bi';
import { AiFillPieChart } from 'react-icons/ai';

const AdminMenu = () => {
  let navigate = useNavigate();

  const AdminButton = (props) => {
    return (
      <CustomButton
        h="60px"
        color="gray.100"
        activeColor="gray.300"
        m="0"
        br="10px"
        onClick={() => {
          navigate(props.nav);
        }}
      >
        <Flex direction="row" h="100%">
          {props.icon === undefined ? (
            <Flex
              w="30%"
              h="100%"
              background="gray.200"
              direction="column"
              justifyContent="center"
              alignItems="center"
              borderTopLeftRadius="10px"
              borderBottomLeftRadius="10px"
            >
              <BiSquareRounded size="30px" color="#bfbfbf" />
            </Flex>
          ) : (
            <Flex w="30%" justifyContent="center" alignItems="center">
              <Flex justifyContent="center" style={{ alignItems: 'center', color: '#bfbfbf' }}>
                {props.icon}
              </Flex>
            </Flex>
          )}
          <Flex justifyContent="start" alignItems="center">
            <Text wordBreak="break-word" fontWeight="500" fontSize="20px" color="black" pl="10px">
              {props.title}
            </Text>
          </Flex>
        </Flex>
      </CustomButton>
    );
  };
  return (
    <>
      <Flex w="500px" h="100%" direction="column" justifyContent="center" alignItems="center">
        <div style={{ fontSize: '32px' }}>관리자 메뉴</div>

        <Flex h="30px" />

        <Box w="400px" h="290px" boxShadow="base" bg="gray.400" borderRadius="15px" p="0px">
          <SimpleGrid columns={2} spacing="10px" padding="10px">
            <AdminButton
              title="매출 조회"
              icon={<AiFillPieChart size="25px" />}
              nav="/Admin/Sales"
            ></AdminButton>
            <AdminButton />
            <AdminButton />
            <AdminButton />
            <AdminButton />
            <AdminButton />
            <AdminButton />
            <AdminButton />
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
};

export default AdminMenu;
