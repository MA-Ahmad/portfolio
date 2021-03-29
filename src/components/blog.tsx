import * as React from "react";
import { VStack, Stack } from "@chakra-ui/react";
import { articles } from "../data/articles";
import BlogCard from "./blog-card";
import PageTransition from "./page-transitions";
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
  
const Blog = () => {
  return (
    <PageTransition>
      <Header underlineColor={TURQUOISE} mt={0} mb={0}>
        Featured Articles
      </Header>
      <MotionBox
        animate={{
          opacity: 1,
          translateY: 0
        }}
        variants={variants}
      >
      <Stack spacing={4} mt={12}>
        {articles.map((article, index) => (
          <MotionBox whileHover={{ y: -5 }} key={index}>
            <BlogCard article={article} />
          </MotionBox>
        ))}
      </Stack>
      </MotionBox>
    </PageTransition>
  );
};

export default Blog;
