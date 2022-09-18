import { Box, Flex, useColorModeValue, Button, Input } from "@chakra-ui/react";
import { useState } from "react";

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
			<Flex w="100%" justify="center" pt={1}>
				{message}
			</Flex>
		</Flex>
	);
};
const Note = () => {
	const [escLink, setEscLink] = useState("");
	const [choNumber, setChoNumber] = useState("");
	return (
		<Flex w="100%" direction="column" fontSize={14}>
			<Flex w="100%" direction="column" pt={1}>
				<Flex w="100%" justify="center" pb={1}>
					Internal Notes
				</Flex>
				<Flex w="100%" direction="column" justify="space-evenly">
					<NoteButton
						text={`<b>Player Inquiry</b>: \n<b>Resolution</b>: \n<b>Ticket ID</b>: `}
						label="Email"
					/>
					<NoteButton
						text={`<b>Player Inquiry</b>: \n<b>Resolution</b>: \n<b>Chat ID</b>: `}
						label="Chat"
					/>
					<NoteButton
						text={`<b>Player Inquiry</b>: \n<b>Resolution</b>: \n<b>Phone Number</b>: `}
						label="Call"
					/>
				</Flex>
			</Flex>
			<Flex w="100%" direction="column" pt={5}>
				<Flex w="100%" justify="center" pb={5}>
					Internal Notes with escalation
				</Flex>
				<Flex w="100%" justify="space-evenly" direction="column">
					<NoteButton
						text={`<b>Player Inquiry</b>: \n<b>Resolution</b>: \n<a href="${escLink}" target="_blank"><b>${choNumber}</a></b></b>\n<b>Ticket ID</b>: `}
						label="Email"
					/>
					<NoteButton
						text={`<b>Player Inquiry</b>: \n<b>Resolution</b>: \n<a href="${escLink}" target="_blank"><b>${choNumber}</a></b></b>\n<b>Chat ID</b>: `}
						label="Chat"
					/>
					<NoteButton
						text={`<b>Player Inquiry</b>: \n<b>Resolution</b>: \n<a href="${escLink}" target="_blank"><b>${choNumber}</a></b></b>\n<b>Phone Number</b>: `}
						label="Call"
					/>
					<Flex justify="center">CHO link</Flex>
					<Input
						value={escLink}
						borderColor={useColorModeValue("teal", "blue.100")}
						color={useColorModeValue("teal", "blue.100")}
						placeholder="Paste the CHO link here"
						mt={1}
						onChange={e => {
							setEscLink(e.target.value);
						}}
					/>
					<Flex justify="center">CHO Number</Flex>
					<Input
						value={choNumber}
						borderColor={useColorModeValue("teal", "blue.100")}
						placeholder="Paste the CHO number here"
						mt={2}
						onChange={e => {
							setChoNumber(e.target.value);
						}}
					/>
				</Flex>
			</Flex>
		</Flex>
	);
};

const SideBar = props => {
	const { display, w, ...rest } = props;
	console.log(display);
	return (
		<Box
			mt={14}
			position={{
				base: "",
				lg: "absolute",
			}}
			display={display}
			w={w}
		>
			<Note />
		</Box>
	);
};
export default SideBar;
