import {
	Flex,
	// Box,
	// Stack,
	// Container,
	Button,
	Grid,
	GridItem
} from "@chakra-ui/react";
import { callflow, warnings, notes } from "../lib/notes";

const Page = () => {
	const style = {
		border: "1px",
		p: 3,
		m: 1,
		borderRadius: "10px"
	};
	return (
		<Grid
			templateColumns="1fr 2fr"
			templateRows="1fr 1fr 1fr"
			templateAreas={`"callflow warnings "
		"callflow other"
		"callflow ."`}
		>
			<GridItem gridArea="callflow" {...style}>
				<Flex w="100%" justify="center">
					Call flow
				</Flex>
				{callflow.map((item, i) => {
					return (
						<Button
							key={i}
							m={1}
							onClick={() => {
								navigator.clipboard.writeText(item.note);
							}}
						>
							{item.name}
						</Button>
					);
				})}
			</GridItem>
			<GridItem gridArea="warnings" {...style}>
				<Flex w="100%" justify="center">
					Warnings
				</Flex>
				{warnings.map((item, i) => {
					return (
						<Button
							key={i}
							m={1}
							onClick={() => {
								navigator.clipboard.writeText(item.note);
							}}
						>
							{item.name}
						</Button>
					);
				})}
			</GridItem>
			<GridItem gridArea="other" {...style}>
				<Flex w="100%" justify="center">
					Other
				</Flex>
				{notes.map((item, i) => {
					return (
						<Button
							key={i}
							m={1}
							onClick={() => {
								navigator.clipboard.writeText(item.note);
							}}
						>
							{item.name}
						</Button>
					);
				})}
			</GridItem>
		</Grid>
	);
};
export default Page;
