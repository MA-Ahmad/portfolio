import * as React from "react";
import {
  VStack,
  HStack,
  Heading,
  Text,
  Tag,
  Link,
  Tooltip,
  useColorModeValue,
  Icon,
  Flex,
  Image
} from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import { MotionBox } from "./motion";
import { getTypeColor } from "../style/theme";
import dev from "../assets/images/dev.png";
import dev2 from "../assets/images/dev_white.png";
import { CardTransition } from "./page-transitions";

export interface BlogCardProps {
  article: article;
}

const BlogCard: React.SFC<BlogCardProps> = ({ article }) => {
  const textColor = useColorModeValue("gray.500", "gray.200");

  return (
    <CardTransition>
      <VStack
        spacing={1}
        p={4}
        isExternal
        _hover={{ shadow: "md", textDecoration: "none" }}
        borderWidth="1px"
        position="relative"
        rounded="md"
        bg={useColorModeValue("white", "gray.800")}
        align="left"
      >
        <Tooltip hasArrow label="Dev.to" placement="top">
          <Image
            src={useColorModeValue(dev, dev2)}
            width="2rem"
            height="2rem"
            position="absolute"
            color="#cbd5e0"
            right="0.5rem"
            top="-14px"
          />
        </Tooltip>
        <Heading fontSize="lg" align="left" mt={0}>
          <Text as={Link} href={article.link}>
            {article.title}
          </Text>
        </Heading>
        <HStack spacing={2} isInline>
          <Text fontSize="sm" fontWeight="400" color={textColor}>
            {article.published}
          </Text>

          <Text fontSize="sm" fontWeight="400" color={textColor}>
            •
          </Text>
          <Tooltip hasArrow label="Views" placement="top">
            <Flex alignItems="center">
              <Text
                fontSize="sm"
                noOfLines={1}
                fontWeight="400"
                align="left"
                color={textColor}
              >
                {article.views}
              </Text>
              <Icon as={FaEye} ml={1} color={textColor} />
            </Flex>
          </Tooltip>
          <Text fontSize="sm" fontWeight="600" color={textColor}>
            •
          </Text>
          <Tooltip hasArrow label="Read time" placement="top">
            <Text
              fontSize="sm"
              noOfLines={1}
              fontWeight="400"
              align="left"
              color={textColor}
            >
              {article.readTime}
            </Text>
          </Tooltip>
          <HStack spacing={1} alignItems="center" d={["none", "none", "flex"]}>
            {article.tags.map(tag => (
              <Tag
                size="sm"
                padding="0 3px"
                key={tag}
                colorScheme={getTypeColor(tag)}
              >
                {tag}
              </Tag>
            ))}
          </HStack>
        </HStack>
        <HStack spacing={1} alignItems="center" d={["flex", "flex", "none"]}>
          {article.tags.map(tag => (
            <Tag
              size="sm"
              padding="0 3px"
              key={tag}
              colorScheme={getTypeColor(tag)}
            >
              {tag}
            </Tag>
          ))}
        </HStack>
        <Text align="left" fontSize="md" noOfLines={4} color={textColor}>
          {article.desc}
        </Text>
      </VStack>
    </CardTransition>
  );
};

export default BlogCard;
