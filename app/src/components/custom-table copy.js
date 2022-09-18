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
} from '@chakra-ui/react';

const CustomTable2 = (props) => {
  const fontSize = props.fontSize;
  const data = props.data;
  const header = props.header;

  const Header = (props) => {
    return (
      <Flex w={props.width}>
        <Box w="100%" h={props.headerHeight}>
          <Flex h="100%">
            {props.headers.map((v, i) => {
              return (
                <Flex
                  // w={v.width}
                  // w={() => {
                  //   const len = props.headers.length;
                  //   // console.log(v.width);
                  //   const wid = (100 / len) * (parseInt(v.width) / 10);
                  //   console.log('w:', wid + '%');
                  //   return wid + '%';
                  // }}
                  // w="100%"
                  grow={v.grow}
                  h="100%"
                  justifyItems="center"
                  alignContent="center"
                  alignItems="center"
                  background="blue.400"
                >
                  <Text w="100%" color="#fff" fontWeight="bold" fontSize={fontSize}>
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

  const Data = (props) => {
    return (
      <>
        {data.map((v, i) => {
          return (
            <Flex w={props.width}>
              <Box w="100%" h={props.dataHeight}>
                <Flex h="100%" direction="row">
                  {Object.keys(data[i]).map((key, i) => {
                    console.log(key);
                    return (
                      <Flex
                        h="100%"
                        justifyItems="center"
                        alignContent="center"
                        alignItems="center"
                        background="#fff"
                      >
                        <Text w="100%" color="#000" fontWeight="400" fontSize={fontSize}>
                          {/* {data[i][key]} */}
                          {'a'}
                        </Text>
                      </Flex>
                    );
                  })}
                </Flex>
              </Box>
            </Flex>
          );
        })}
      </>
    );
  };

  return (
    <Flex direction="column" width="100%">
      <Header width={props.width} headers={props.header} headerHeight={props.headerHeight} />
      <Data width={props.width} headers={props.header} dataHeight={props.dataHeight} />
    </Flex>
  );
};

export default CustomTable2;
