import * as React from "react";
import {
  Text,
  useColorModeValue,
  VStack,
  Heading,
  Box,
  Image,
  HStack,
  Divider
} from "@chakra-ui/react";
import { StoryTimeline } from "./story-timeline";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import placeholder from "../assets/images/placeholder.png";
import { companies, institutes } from "../data/data";
import Header from "./header";
import Section from "./section";

const MyStory = () => {
  return (
    <VStack>
      <Section mb={14}>
        <VStack>
          <Header mt={0} mb={1}>
            Developer Story
          </Header>
          <Text
            fontSize={"xl"}
            color={useColorModeValue("gray.500", "gray.200")}
            maxW="lg"
            textAlign="center"
          >
            My journey starts from a little town.
          </Text>
        </VStack>
      </Section>
      <VStack textAlign="start" align="start" mb={0}>
        <Box>
          {companies.map((company, index) => (
            <StoryTimeline icon={BsFillBriefcaseFill} index={index}>
              {" "}
              <HStack>
                <Image
                  rounded="full"
                  w={8}
                  h={8}
                  objectFit="cover"
                  fallbackSrc={placeholder}
                  src={company.logo}
                  alt={company.alt}
                />
                <VStack align="start">
                  <Heading fontSize={15} lineHeight="shorter" fontWeight="bold">
                    <Box>{company.title}</Box>
                    <Box mt={1}>{company.period}</Box>
                  </Heading>
                </VStack>
              </HStack>
              <Divider my={2} />
              {company.role}
            </StoryTimeline>
          ))}
          <StoryTimeline year={"2017"} index={0} />
          {institutes.map((institute, index) => (
            <StoryTimeline icon={FaGraduationCap} index={index}>
              {" "}
              <HStack>
                <Image
                  rounded="full"
                  w={8}
                  h={8}
                  objectFit="cover"
                  fallbackSrc={placeholder}
                  src={institute.logo}
                  alt={institute.alt}
                />
                <VStack align="start">
                  <Heading fontSize={15} lineHeight="shorter" fontWeight="bold">
                    <Box>{institute.short_title}</Box>
                    <Box mt={1}>{institute.period}</Box>
                  </Heading>
                </VStack>
              </HStack>
              <Divider my={2} />
              {institute.role}
            </StoryTimeline>
          ))}
          <StoryTimeline year={"2011"} index={0} skipTrail={true} />
        </Box>
      </VStack>
    </VStack>
  );
};

export default MyStory;
