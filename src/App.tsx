import * as React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { theme } from "style/theme";
import Layout from "./layouts/layout";

export const App = () => (
  <ChakraProvider theme={theme} resetCSS={true}>
    <Layout />
  </ChakraProvider>
);
