import * as React from "react";
import { VStack, Stack } from "@chakra-ui/react";
import { articles } from "../data/articles";
import BlogCard from "./blog-card";
import { PageSlideFade, StaggerChildren } from "./page-transitions";
import Header from "./header";
import { MotionBox } from "./motion";

const TURQUOISE = "#06b6d4";

const Blog = () => {
  return (
    <PageSlideFade>
      <Header underlineColor={TURQUOISE} mt={0} mb={0}>
        Featured Articles
      </Header>
      <StaggerChildren>
        <Stack spacing={4} mt={12}>
          {articles.map((article, index) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <BlogCard article={article} />
            </MotionBox>
          ))}
        </Stack>
      </StaggerChildren>
    </PageSlideFade>
  );
};

export default Blog;
