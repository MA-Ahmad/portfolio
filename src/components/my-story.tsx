import * as React from "react";
import {
  Text,
  useColorModeValue,
  VStack,
  Heading,
  Box,
  Image,
  HStack,
  Divider,
  IconButton
} from "@chakra-ui/react";
import { StoryTimeline } from "./story-timeline";
import { FaGraduationCap, FaAward, FaMedal } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import placeholder from "../assets/images/placeholder.png";
import { companies, institutes } from "../data/data";
import Header from "./header";
import Section from "./section";
import { PageSlideFade } from "./page-transitions";

const MyStory = () => {

  return (
    <VStack>
      <Section mb={14}>
        <PageSlideFade>
          <VStack>
            <Header mt={0} mb={1}>
              Developer Story
            </Header>
            {/* <Text
              fontSize={"xl"}
              color={useColorModeValue("gray.500", "gray.200")}
              maxW="lg"
              textAlign="center"
            >
              This page tells you my story in timeline shape.
            </Text> */}
          </VStack>
        </PageSlideFade>
      </Section>
      <VStack textAlign="start" align="flex-start" mb={0}>
        <Box>
          <StoryTimeline year={"2021"} index={0} />
          {companies.map((company, index) => (
            <StoryTimeline
              icon={BsFillBriefcaseFill}
              index={index}
            >
              {" "}
              <HStack>
                <Image
                  rounded="full"
                  w={[6, 8]}
                  h={[6, 8]}
                  objectFit="cover"
                  fallbackSrc={placeholder}
                  src={company.logo}
                  alt={company.alt}
                />
                <VStack align="start">
                  <Heading
                    fontSize={[12, 13, 15]}
                    lineHeight="shorter"
                    fontWeight="bold"
                  >
                    <Box>{company.title}</Box>
                    <Box mt={1}>{company.period}</Box>
                  </Heading>
                </VStack>
              </HStack>
              <Divider my={2} />
              <Text fontSize={[12, 13, 15]}>{company.role}</Text>
            </StoryTimeline>
          ))}
          <StoryTimeline year={"2017"} index={0} />
          {institutes.map((institute, index) => (
            <>
              <StoryTimeline
                icon={FaGraduationCap}
                index={index > 0 ? index + 1 : index}
              >
                {" "}
                <HStack>
                  <Image
                    rounded="full"
                    w={[6, 8]}
                    h={[6, 8]}
                    objectFit="cover"
                    fallbackSrc={placeholder}
                    src={institute.logo}
                    alt={institute.alt}
                  />

                  <VStack align="start">
                    <Heading
                      fontSize={[12, 13, 15]}
                      lineHeight="shorter"
                      fontWeight="bold"
                    >
                      <Box>{institute.short_title}</Box>
                      <Box mt={1}>{institute.period}</Box>
                    </Heading>
                  </VStack>
                </HStack>
                <Divider my={2} />
                <Text fontSize={[12, 13, 15]}>{institute.role}</Text>
              </StoryTimeline>
              {institute.awards &&
                institute.awards.map((award, index1) => (
                  <StoryTimeline icon={FaAward} index={index1 + index + 1}>
                    {" "}
                    <HStack>
                      <IconButton
                        colorScheme="blue"
                        rounded="full"
                        size="sm"
                        aria-label="medal"
                        icon={<FaMedal />}
                      />

                      <VStack align="start">
                        <Heading
                          fontSize={[12, 13, 15]}
                          lineHeight="shorter"
                          fontWeight="bold"
                        >
                          <Box>{award.title}</Box>
                          <Box mt={1}>{award.date}</Box>
                        </Heading>
                      </VStack>
                    </HStack>
                    <Divider my={2} />
                    <Text fontSize={[12, 13, 15]}>{award.description}</Text>
                  </StoryTimeline>
                ))}

              <StoryTimeline
                year={institute.startingYear}
                index={0}
                skipTrail={index === institutes.length - 1 ? true : false}
              />
            </>
          ))}
          {/* <StoryTimeline year={"2011"} index={0} skipTrail={true} /> */}
        </Box>
      </VStack>
    </VStack>
  );
};

export default MyStory;
