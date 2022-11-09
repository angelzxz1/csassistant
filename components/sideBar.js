import {
  Box,
  Flex,
  useColorModeValue,
  Button,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";

const NoteButton = ({ text, label, uncheck, cho }) => {
  const [message, setMessage] = useState("");
  const componentDidUpdate = () => {
    setMessage("Coppied!");
    setTimeout(() => setMessage(""), 3000);
  };
  return (
    <Flex direction="column">
      <Button
        onClick={() => {
          navigator.clipboard.writeText(text);
          uncheck(false);
          componentDidUpdate();
          cho.setEscLink("");
          cho.setChoNumber("");
        }}
        colorScheme={useColorModeValue("teal", "blue")}
      >
        {label}
      </Button>
      <Flex w="100%" justify="center" pt={1}>
        {message}
      </Flex>
    </Flex>
  );
};

const Note = () => {
  const [escLink, setEscLink] = useState("");
  const [choNumber, setChoNumber] = useState("");
  const [isEscalated, setIsEscalated] = useState(false);
  const cho = { setEscLink, setChoNumber };
  return (
    <Flex w="100%" direction="column" fontSize={14}>
      <Flex w="100%" direction="column" pt={1}>
        <Flex w="100%" justify="center" pb={1}>
          Internal Notes
        </Flex>
        <Flex w="100%" direction="column" justify="space-evenly">
          <NoteButton
            cho={cho}
            text={`<b>Player Inquiry</b>: \n<b>Resolution</b>: \n${
              isEscalated
                ? `<a href="${escLink}" target="_blank"><b>${choNumber}</a></b></b>\n`
                : ""
            }<b>Ticket ID</b>: `}
            label="Email"
            uncheck={setIsEscalated}
          />
          <NoteButton
            cho={cho}
            text={`<b>Player Inquiry</b>: \n<b>Resolution</b>: \n${
              isEscalated
                ? `<a href="${escLink}" target="_blank"><b>${choNumber}</a></b></b>\n`
                : ""
            }<b>Chat ID</b>: `}
            label="Chat"
            uncheck={setIsEscalated}
          />
          <NoteButton
            cho={cho}
            text={`<b>Player Inquiry</b>: \n<b>Resolution</b>: \n${
              isEscalated
                ? `<a href="${escLink}" target="_blank"><b>${choNumber}</a></b></b>\n`
                : ""
            }<b>Phone Number</b>: `}
            label="Call"
            uncheck={setIsEscalated}
          />
        </Flex>
      </Flex>
      <Flex w="100%" direction="column" pt={5}>
        <Flex w="100%" justify="center" pb={5}>
          Notes with escalation?
          <Checkbox
            ml={3}
            isChecked={isEscalated}
            onChange={() => {
              setIsEscalated((prev) => !prev);
            }}
          />
        </Flex>
        <Flex w="100%" justify="space-evenly" direction="column">
          <Flex justify="center">CHO link</Flex>
          <Input
            value={escLink}
            borderColor={useColorModeValue("teal", "blue.100")}
            placeholder="Paste the CHO link here"
            mt={1}
            isDisabled={!isEscalated}
            onChange={(e) => {
              setEscLink(e.target.value);
            }}
          />
          <Flex justify="center">CHO Number</Flex>
          <Input
            value={choNumber}
            borderColor={useColorModeValue("teal", "blue.100")}
            placeholder="Paste the CHO number here"
            mt={2}
            isDisabled={!isEscalated}
            onChange={(e) => {
              setChoNumber(e.target.value);
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

const SideBar = (props) => {
  const { display, w, ...rest } = props;
  return (
    <Box
      mt={14}
      position={{
        base: "",
        lg: "absolute",
      }}
      border="solid 1px"
      borderLeft={{ base: "1px", lg: "0px" }}
      p={4}
      borderRightRadius="10px"
      borderLeftRadius={{ base: "10px", lg: "0px" }}
      display={display}
      w={w}
    >
      <Note />
    </Box>
  );
};
export default SideBar;
