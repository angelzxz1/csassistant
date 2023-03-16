"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "../components/layouts/main";
import theme from "../lib/theme.js";
export default function RootLayout(props) {
    const { children } = props;

    return (
        <html lang="en">
            <head />
            <body>
                <CacheProvider>
                    <ChakraProvider theme={theme}>
                        <Main>{children}</Main>
                    </ChakraProvider>
                </CacheProvider>
            </body>
        </html>
    );
}
