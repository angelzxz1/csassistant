import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Grid,
  GridItem,
  Input,
  Textarea,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

const HelperIcon = ({ text }) => {
  const hover = {
    _after: {
      content: `"${text}"`,
      position: "absolute",
      bottom: "120%",
      left: "120%",
      display: "none",
      borderRadius: "md",
      border: "solid 1px",
      p: 2,
      bg: "yellow.400",
      color: "black",
    },
    _hover: {
      _after: {
        display: "block",
      },
    },
  };
  return (
    <Flex
      ml={1}
      borderRadius="100%"
      border="solid 1px"
      w={5}
      h={5}
      justify="center"
      align="center"
      cursor="pointer"
      position="relative"
      {...hover}
    >
      ?
    </Flex>
  );
};

const Add = () => {
  return (
    <Grid>
      <Flex m={3}>First Name</Flex>
      <Input />
      <Flex m={3}>Last Name</Flex>
      <Input />
      <Flex m={3} align="center" h="5">
        <Flex>List of template names</Flex>
        <HelperIcon text="" />
      </Flex>
      <Textarea />
      <Flex m={3} align="center" h="5">
        <Flex> List of templates</Flex>
        <HelperIcon text="" />
      </Flex>
      <Textarea />
    </Grid>
  );
};

const Update = () => {
  return (
    <Grid>
      <GridItem></GridItem>
    </Grid>
  );
};

const GenModal = (props) => {
  const { Tittle, gridArea, onClick, Action } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} gridArea={gridArea}>
        Add
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{Tittle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{Action === "Add" ? <Add /> : <Update />}</ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClick}>
              {Action}
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default GenModal;
