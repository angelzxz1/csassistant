import {
  Box,
  Flex,
  Container,
  Heading,
  useColorModeValue,
  Image,
  Link,
  color,
  Button
} from "@chakra-ui/react";
import { useState } from "react";
import notes from "../lib/notes";
import Section from "../components/section";

const NoteButton = ({ text, label }) => {
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
          componentDidUpdate();
        }}
        colorScheme={useColorModeValue("teal", "blue")}
      >
        {label}
      </Button>
      <Flex w="100%" justify="center" pt={5}>
        {message}
      </Flex>
    </Flex>
  );
};

const Note = () => {
  return (
    <Flex w="100%" direction="column" fontSize={14}>
      <Flex w="100%" direction="column" pt={14}>
        <Flex w="100%" justify="center" pb={5}>
          Internal Notes
        </Flex>
        <Flex w="100%" justify="space-evenly">
          <NoteButton
            text={`<b>Player Inquiry</b>:\n<b>Resolution</b>:\n<b>Ticket ID</b>:`}
            label="Email"
          />
          <NoteButton
            text={`<b>Player Inquiry</b>:\n<b>Resolution</b>:\n<b>Chat ID</b>:`}
            label="Chat"
          />
          <NoteButton
            text={`<b>Player Inquiry</b>:\n<b>Resolution</b>:\n<b>Phone Number</b>:`}
            label="Call"
          />
        </Flex>
      </Flex>
      <Flex w="100%" direction="column" pt={14}>
        <Flex w="100%" justify="center" pb={5}>
          Internal Notes with escalation
        </Flex>
        <Flex w="100%" justify="space-evenly">
          <NoteButton
            text={`<b>Player Inquiry</b>:\n<b>Resolution</b>:\n<a href=" Insert http link" target="_blank"><b> insert CHO-Number</a></b></b>\n<b>Ticket ID</b>:`}
            label="Email"
          />
          <NoteButton
            text={`<b>Player Inquiry</b>:\n<b>Resolution</b>:\n<a href=" Insert http link" target="_blank"><b> insert CHO-Number</a></b></b>\n<b>Chat ID</b>:`}
            label="Chat"
          />
          <NoteButton
            text={`<b>Player Inquiry</b>:\n<b>Resolution</b>:\n<a href=" Insert http link" target="_blank"><b> insert CHO-Number</a></b></b>\n<b>Phone Number</b>:`}
            label="Call"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

const Home = (props) => {
  return (
    <Flex>
      <Note />
    </Flex>
  );
};

export default Home;
