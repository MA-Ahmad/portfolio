import * as React from "react";
import { Stack } from "@chakra-ui/react";
import { articles } from "data/posts/articles";
import PostCard from "./post-card";
import { PageSlideFade, StaggerChildren } from "components/page-transitions";
import Header from "components/header";
import { MotionBox } from "components/motion";

const TURQUOISE = "#06b6d4";

const Posts = () => {
  return (
    <PageSlideFade>
      <Header underlineColor={TURQUOISE} mt={0} mb={0}>
        Featured Articles
      </Header>
      <StaggerChildren>
        <Stack spacing={4} mt={12}>
          {articles.map((article, index) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <PostCard article={article} />
            </MotionBox>
          ))}
        </Stack>
      </StaggerChildren>
    </PageSlideFade>
  );
};

export default Posts;
