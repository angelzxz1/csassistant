"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { Suspense } from "react";
import Main from "../components/layouts/main";
import theme from "../lib/theme.js";
import Loading from "./loading";
export default function RootLayout(props) {
    const { children } = props;

    return (
        <html lang="en">
            <head />
            <body>
                <CacheProvider>
                    <ChakraProvider theme={theme}>
                        <Suspense fallback={Loading}>
                            <Main>{children}</Main>
                        </Suspense>
                    </ChakraProvider>
                </CacheProvider>
            </body>
        </html>
    );
}
