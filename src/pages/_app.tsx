import { AppProps } from "next/App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import React from "react";
import {SidebarDrawerProvider} from '../contexts/SidebarDrawerContent'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
      <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
