import * as React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Header from "./components/header";
import { theme } from "../src/style/theme";

export const App = () => (
  <ChakraProvider theme={theme} resetCSS={true}>
    <Header />
    <Box
      textAlign="center"
      fontSize="xl"
      w={["90%", "85%", "80%"]}
      maxW={900}
      mx="auto"
    ></Box>
  </ChakraProvider>
);
