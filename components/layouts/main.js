import Head from "next/head";
import NavBar from "../navBar";
import SideBar from "../sideBar";
import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
const Main = props => {
	const { children, router, title } = props;
	return (
		<Box as="main" pb={8}>
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<link
					rel="shortcut icon"
					href="/favicon.ico"
					type="image/x-icon"
				/>
				<title>{title}</title>
			</Head>
			<NavBar path={router.asPath} />
			<SideBar pt={14} display={{ base: "none", lg: "block" }} w="20%" />
			<Container maxW="container.md" pt={14}>
				<Grid
					templateAreas={{
						base: `"sidebar children children"
          "sidebar children children"
          "sidebar children children"
          `,
						lg: `"sidebar"`,
					}}
					templateColumns={{ base: "1fr 2fr", lg: "1fr" }}
					templateRows={{ base: "1fr 1fr 1fr", lg: "1fr" }}
				>
					<GridItem gridArea="sidebar">
						<SideBar
							pt={14}
							display={{ base: "block", lg: "none" }}
							w="100%"
						/>
					</GridItem>
					<GridItem gridArea="children">{children}</GridItem>
				</Grid>
			</Container>
		</Box>
	);
};

export default Main;

