import { ChakraProvider } from "@chakra-ui/react";
import Main from "../components/layouts/main";
import theme from "../lib/theme";
import Fonts from "../components/fonts";

const WebSite = props => {
	const { Component, pageProps, router } = props;
	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			<Main router={router} tittle={Component.tittle}>
				<Component {...pageProps} />
			</Main>
		</ChakraProvider>
	);
};
export default WebSite;
