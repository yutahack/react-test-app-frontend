import { React, useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Flex,
  Text,
  Box,
} from '@chakra-ui/react';
import CustomButton from '../../components/custom-button';

const BuyModal = (props) => {
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent mt="200px" borderRadius="30px">
          {/* <ModalHeader>{props.title}</ModalHeader> */}
          <ModalHeader pt="30px" pl="40px" pr="40px" pb="0px">
            <Box h="50px" bg="gray.500" rounded="full" alignContent="center" boxShadow="base">
              <Flex h="100%" alignContent="center" alignItems="center" justifyContent="center">
                <Text textAlign="center" color="white">
                  구매 수량 선택
                </Text>
              </Flex>
            </Box>
          </ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>{props.body}</ModalBody>

          <ModalFooter>
            <Flex w="100%" h="50px" mb="20px" justifyContent="center">
              {/* <Button w="150px" h="100%" ml={3} borderRadius="full" onClick={props.onClickedN}>
                아니오
              </Button> */}
              <CustomButton
                w="120px"
                color="gray.300"
                activeColor="gray.500"
                onClick={props.onClickedN}
                mr="20px"
              >
                <Text fontWeight="bold">취소</Text>
              </CustomButton>
              {/* <Button
                w="150px"
                h="100%"
                borderRadius="full"
                colorScheme="blue"
                mr={3}
                onClick={props.onClickedY}
              >
                예
              </Button> */}
              <CustomButton
                w="210px"
                color="red.500"
                activeColor="red.600"
                mr="00px"
                onClick={props.onClickedY}
              >
                <Text fontWeight="bold">장바구니 추가</Text>
              </CustomButton>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BuyModal;
