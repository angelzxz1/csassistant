import Head from "next/head";
import NavBar from "../navBar";
import SideBar from "../sideBar";
import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
const Main = (props) => {
    // const { children, router, tittle } = props;
    const { children } = props;
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
                <title>Notes</title>
            </Head>
            {/* <NavBar path={router.asPath} /> */}
            <SideBar pt={14} display={{ base: "none", lg: "block" }} w="20%" />
            <Container maxW="container.md" pt={14}>
                <Grid
                    templateAreas={{
                        base: `"sidebar children children"
          "sidebar children children"
          "sidebar children children"
          `,
                        lg: `"children"`,
                    }}
                    templateColumns={{ base: "25% 75%", lg: "100%" }}
                    templateRows="3fr"
                >
                    <GridItem gridArea={{ base: "sidebar", lg: "" }}>
                        <SideBar
                            pt={14}
                            display={{ base: "block", lg: "none" }}
                        />
                    </GridItem>
                    <GridItem gridArea="children">{children}</GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default Main;
