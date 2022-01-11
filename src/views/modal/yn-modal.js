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
} from '@chakra-ui/react';
import CustomButton from '../../components/custom-button';

const YnModal = (props) => {
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="20px">
          <ModalHeader>{props.title}</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>{props.body}</ModalBody>

          <ModalFooter>
            <Flex w="100%" h="50px" mb="20px" justifyContent="center">
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
                <Text fontWeight="bold">아니오</Text>
              </CustomButton>
              <CustomButton
                w="210px"
                color="blue.400"
                activeColor="blue.600"
                onClick={props.onClickedY}
              >
                <Text fontWeight="bold">예</Text>
              </CustomButton>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default YnModal;
