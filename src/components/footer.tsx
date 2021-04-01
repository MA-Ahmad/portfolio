import * as React from "react";
import {
  Stack,
  IconButton,
  Link,
  Box,
  Text,
  useColorModeValue,
  HStack
} from "@chakra-ui/react";
import siteConfig from "../configs/site-config";

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true
};

const Footer = () => {
  return (
    <Stack
      as="footer"
      isInline
      spacing={[1, 2]}
      p={4}
      justifyContent="space-between"
      alignItems="center"
      w={["90%", "85%", "80%"]}
      maxW={800}
      mx="auto"
    >
      <HStack>
        <Text fontSize="sm" color={useColorModeValue("gray.500", "gray.200")}>
          © {new Date().getFullYear()} Muhammad Ahmad{" "}
        </Text>
        {/* <Box fontSize="md" textAlign="left">
        Website built with
        <Box
          as="span"
          mx="2"
          _before={{
            cursor: "default",
            content: '"❤️"'
          }}
          _hover={{
            _before: {
              content: '"☕️"'
            }
          }}
        />
        in Pakistan{"  "}🇵🇰
      </Box> */}
      </HStack>
      <Box>
        {siteConfig.author.accounts.map((sc, index) => (
          <IconButton
          key={index}
            as={Link}
            isExternal
            href={sc.url}
            aria-label={sc.label}
            size="lg"
            colorScheme={sc.type}
            icon={sc.icon}
            {...iconProps}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default Footer;
