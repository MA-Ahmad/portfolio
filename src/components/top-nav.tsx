import * as React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack
} from "@chakra-ui/react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

const links = [
  { name: "About", path: "/about" },
  { name: "Open Source", path: "/open-source" },
  { name: "Blog", path: "/blog" }
];

interface NavLinkProps {
  index?: string;
  name: string;
  path: string;
}
const NavLink = (props: NavLinkProps) => {
  return (
    <Link
      as={RouterNavLink}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.900")
      }}
      _activeLink={{
        color: useColorModeValue("blue.500", "blue.200")
      }}
      to={props.path}
    >
      {props.name}
    </Link>
  );
};

export default function TopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("white", "gray.700")} px={4} boxShadow={"lg"}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={["90%", "85%", "80%"]}
          maxW={800}
          mx="auto"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={"Open Menu"}
            display={["inherit", "inherit", "none"]}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Avatar
                as={Link}
                size={"sm"}
                href={"/"}
                src={"https://avatars2.githubusercontent.com/u/37842853?v=4"}
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {links.map((link, index) => (
                <NavLink key={index} name={link.name} path={link.path} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <IconButton
              as={Link}
              href={"https://github.com/MA-Ahmad"}
              size={"md"}
              icon={<FaGithub />}
              aria-label={"Github account"}
              bg={useColorModeValue("white", "gray.700")}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.900")
              }}
            />
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            w={["90%", "85%", "80%"]}
            maxW={800}
            display={["inherit", "inherit", "none"]}
          >
            <Stack as={"nav"} spacing={4}>
              {links.map((link, index) => (
                <NavLink index={index} name={link.name} path={link.path} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
