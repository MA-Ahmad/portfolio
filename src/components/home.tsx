import * as React from "react";
import {
  Badge,
  Box,
  Divider,
  Flex,
  Link,
  useColorMode,
  useColorModeValue,
  Text,
  Avatar,
  Image as ChakraImage,
  Heading
} from "@chakra-ui/react";
import { MotionBox, MotionFlex } from "./motion";
import Header from "./header";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Projects from "./projects";
import { projectsList}  from "../data/projects-list";
import "../style/style.css";


const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";
const PURPLE = "#ff007a";
const TURQUOISE = "#00e0ff";
const GREEN = "#38ff00";

const Home = () => {
  return (
    <Flex direction="column" align="center" >
      <Flex direction={["column", "column", "row"]}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
          m="auto"
          mb={[16, 16, "auto"]}
        >
          <Avatar
            size={"2xl"}
            src={"https://avatars2.githubusercontent.com/u/37842853?v=4"}
          />
        </MotionBox>
        <MotionFlex
          ml={["auto", "auto", 16]}
          m={["initial", "initial"]}
          w={["90%", "85%", "80%"]}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
        >
          <Header underlineColor={ORANGE} emoji="👋" mt={0} className="face">
            Hey!
          </Header>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            My name is{" "}
            <Box as="strong" fontWeight="600">
              Ahmad
            </Box>{" "}
            and I&apos;m a{" "}
            <Box as="span" whiteSpace="nowrap">
              Full Stack Developer,
            </Box>{" "}
            <Box as="span" whiteSpace="nowrap">
              an open source lover and a writer&nbsp;
            </Box>
            from{" "}
            <Box as="span" whiteSpace="nowrap">
              Pakistan 🇵🇰
            </Box>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={10} textAlign="left">
            This is my digital garden, where I write about the things I'm
            working on and share what I've learned. 😊
            {/* <Link
              href="https://twitter.com/dominiksumer"
              ml={2}
              mr={1}
              isExternal
              whiteSpace="nowrap"
              _hover={{ textDecor: "none", color: "#1fa1f1" }}
            >
              <Box
                display="inline-block"
                as={FaTwitter}
                mb="4px"
                color="#1fa1f1"
              />{" "}
              <Box as="span" borderBottom="2px solid currentColor">
                Twitter
              </Box>
            </Link>{" "}
            so make sure to follow me if you&apos;re interested. 😊 */}
          </Box>
        </MotionFlex>
      </Flex>
      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION
          }
        }}
      >
        <Projects projects={projectsList} />
        {/* <NewsletterForm mt={16} /> */}
      </MotionBox>
    </Flex>
  );
};

export default Home;
