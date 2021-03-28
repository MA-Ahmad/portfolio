import * as React from "react";
import {
  Box,
  Image,
  Link,
  useColorModeValue,
  VStack,
  Text,
  Skeleton,
  AspectRatio,
  HStack,
  Tag,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  Center,
  Flex
} from "@chakra-ui/react";
import { MotionBox } from "./motion";
import { AiOutlineStar, AiOutlineShareAlt } from "react-icons/ai";

// import { format } from "timeago.js";
interface RepositoryCardProps {
  key: number;
  title: string;
  description: string;
  cover: string;
  technologies: string[];
  url: string;
  live: string;
  stars: string;
  fork: string;
  created: string;
}
const RepositoryCard = (props: RepositoryCardProps) => {
  const {
    key,
    title,
    description,
    cover,
    technologies,
    url,
    live,
    stars,
    fork,
    created
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
    // window.open(link);
    // if (type == "link" || type == "article") {
    //   window.open(link);
    // } else {
    //   onOpen();
    // }
  };

  const getTypeColor = type => {
    if (type === "rails" || type === "ruby") {
      return "red";
    } else if (type === "react") {
      return "cyan";
    } else if (type === "javascript") {
      return "yellow";
    } else if (type === "typescript" || type === "tailwindCss") {
      return "blue";
    }
  };

  const variants = {
    initial: {
      opacity: 0,
      translateY: -20
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  return (
    <MotionBox variants={variants}>
      <Box onClick={handleClick} cursor="pointer" size="lg">
        <VStack
          w="100%"
          rounded="xl"
          borderWidth="1px"
          bg={useColorModeValue("white", "gray.800")}
          borderColor={useColorModeValue("gray.100", "gray.700")}
          _hover={{
            shadow: "lg",
            textDecoration: "none"
          }}
          overflow="hidden"
          align="start"
          spacing={0}
        >
          <Box position="relative" w="100%">
            <AspectRatio
              ratio={1.85 / 1}
              // maxW="400px"
              w="100%"
              borderBottomWidth="1px"
              borderColor={useColorModeValue("gray.100", "gray.700")}
            >
              <Image src={cover} fallback={<Skeleton />} objectFit="cover" />
            </AspectRatio>
            {/* <Center
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            right="0"
            bg="rgb(0,0,0)"
            bg="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 100%)"
            transition="all 0.6s"
            transition-timing-function="spring(1 100 10 10)"
            opacity={isHovered ? "1" : "0"}
          >
            <Icon as={Play} w={12} h={12} color="white" />
          </Center> */}
          </Box>

          <VStack py={2} px={4} spacing={1} align="start" w="100%">
          <Flex justifyContent={"space-between"} width="100%">
            
            <Text fontSize="sm" noOfLines={1} fontWeight="500">
              {title}
            </Text>
            <Flex>
                <AiOutlineStar color="teal.300" />
                <Box as="span" ml="1" fontSize="sm">
                  {stars}
                </Box>
              </Flex>
              </Flex>
            <Flex justifyContent={"space-between"} width="100%">
              <Box>
                <HStack spacing="1">
                  {technologies.map(tech => (
                    <Tag size="sm" colorScheme={getTypeColor(tech)}>
                      {tech}
                    </Tag>
                  ))}
                </HStack>
              </Box>
            </Flex>
            {/* <Flex justifyContent={"space-between"} width="100%">
              <Flex>
                <AiOutlineStar color="teal.300" />
                <Box as="span" ml="1" fontSize="sm">
                  {stars}
                </Box>
              </Flex>
              <Box >
              <Text
                fontSize="xs"
                fontWeight="400"
                color={useColorModeValue("gray.400", "gray.500")}
              >
                {created}
              </Text>
            </Box>
            </Flex> */}
          </VStack>
        </VStack>
        <Modal isOpen={isOpen} onClose={onClose} isCentered allowPinchZoom>
          <ModalOverlay />
          <ModalContent bg="none" maxW={"28rem"} w="auto">
            <ModalBody p={0} rounded="lg" overflow="hidden" bg="none">
              <Center>
                <Image src={cover} rounded="lg" />
                {/* {type == "image" ? (
                <Image src={cover} rounded="lg" />
              ) : (
                <ReactPlayer url={link} controls playing />
              )} */}
              </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </MotionBox>
  );
};

export default RepositoryCard;
