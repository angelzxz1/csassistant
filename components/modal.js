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
      content: text,
      position: "absolute",
      bottom: "120%",
      left: "120%",
      display: "none",
      borderRadius: "md",
      border: "solid 1px",
      maxH: "100px",
      w: "500px",
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

const Add = ({ form }) => {
  //Quedaste aqui--------------------------------------------------------
  return (
    <Grid>
      <Flex m={3}>First Name</Flex>
      <Input />
      <Flex m={3}>Last Name</Flex>
      <Input />
      <Flex m={3} align="center" h="5">
        <Flex>List of template names</Flex>
        <HelperIcon
          text={`"Paste the name of the button like this '{name}' and replace name with the name you want for the button, remember that the order of the names will be linked to the order of the template"`}
        />
      </Flex>
      <Textarea />
      <Flex m={3} align="center" h="5">
        <Flex> List of templates</Flex>
        <HelperIcon
          text={`"Paste the template of the button like this '{template}' and replace template with the template you want for the button, remember that the order of the names will be linked to the order of the template"`}
        />
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
  const { form, setForm } = useState({});
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
          <ModalBody>
            {Action === "Add" ? (
              <Add form={{ form, setForm }} />
            ) : (
              <Update form={{ form, setForm }} />
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              mr={3}
              onClick={() => {
                onClick();
              }}
            >
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
