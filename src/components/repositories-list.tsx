import * as React from "react";
import { useState, useEffect } from "react";
import useFetch from "use-http";
import {
  VStack,
  Text,
  useColorModeValue,
  SimpleGrid,
  Box,
  useBoolean,
  useMediaQuery
} from "@chakra-ui/react";
import { PageSlideFade, StaggerChildren } from "./page-transitions";
import RepositoryCard from "./repository-card";
import StackGrid from "react-stack-grid";
import Header from "./header";
import { MotionBox } from "./motion";
import CardSkeleton from "./card-skeleton";

const TURQUOISE = "#06b6d4";

const RepositoriesList = () => {
  const { get, loading, error, data } = useFetch("https://api.github.com");
  const [repos, setRepos] = useState([]);
  const [isLargerThan720] = useMediaQuery("(min-width: 720px)");
  const [isLargerThan982] = useMediaQuery("(min-width: 982px)");

  let columnWidth = 390;
  if (isLargerThan982) {
    columnWidth = 390;
  } else {
    if (isLargerThan720) {
      columnWidth = 300;
    } else {
      columnWidth = "100%";
    }
  }

  useEffect(() => {
    get("/users/MA-Ahmad/repos").then(res => {
      setRepos(
        res?.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 8)
      );
    });
  }, []);

  return (
    <PageSlideFade>
      <VStack align="start" spacing={3}>
        <Header underlineColor={TURQUOISE} mt={0} mb={0}>
          Open Source
        </Header>
        <Text
          color={useColorModeValue("gray.500", "gray.200")}
          textAlign="left"
        >
          This page lists some of the open source repositories I have published
          or contributed to.
        </Text>
      </VStack>
      {loading ? (
        <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={4}>
          <CardSkeleton />
        </SimpleGrid>
      ) : (
        <Box mt={4}>
          <StackGrid columnWidth={columnWidth}>
            {repos?.map((repo, index) => (
              <RepositoryCard
                title={repo.name}
                description={repo.description}
                language={repo.language}
                url={repo.svn_url}
                created_at={repo.created_at}
                stargazers_count={repo.stargazers_count}
                forks_count={repo.forks_count}
              />
            ))}
          </StackGrid>
        </Box>
      )}
    </PageSlideFade>
  );
};

export default RepositoriesList;
