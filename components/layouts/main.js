import Head from "next/head";
import NavBar from "../navBar";
import { Box, Container } from "@chakra-ui/react";
const Main = (props) => {
  const { children, router, title } = props;
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>{title}</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
