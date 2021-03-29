import * as React from "react";
import {
  VStack,
  Text,
  useColorModeValue,
  SimpleGrid,
  Box
} from "@chakra-ui/react";
import PageTransition from "./page-transitions";
import { repositories } from "../data/repositories";
import RepositoryCard from "./repository-card";
import Header from "./header";
import { MotionBox } from "./motion";

const TURQUOISE = "#06b6d4";

const variants = {
  initial: {
    opacity: 0,
    translateY: -20
  },
  enter: {
    transition: { staggerChildren: 0.15, delayChildren: 0.4 }
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const RepositoriesList = () => {
  return (
    <PageTransition>
      <VStack align="start" spacing={3}>
        <Header underlineColor={TURQUOISE} mt={0} mb={0}>
          Open Source
        </Header>
        <Text
          color={useColorModeValue("gray.500", "gray.200")}
          textAlign="left"
        >
          This page lists some of the open source repositories I have published
          or contribute to.
        </Text>
      </VStack>
      <MotionBox
        animate={{
          opacity: 1,
          translateY: 0
        }}
        variants={variants}
      >
        <SimpleGrid columns={[2, 2, 3]} spacing={4} mt={12}>
          {repositories.map((repo, index) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <RepositoryCard
                key={index}
                title={repo.title}
                description={repo.description}
                cover={repo.cover}
                technologies={repo.technologies}
                url={repo.url}
                live={repo.live}
                stars={repo.stars}
                fork={repo.fork}
                created={repo.created}
              />
            </MotionBox>
          ))}
        </SimpleGrid>
      </MotionBox>
    </PageTransition>
  );
};

export default RepositoriesList;
