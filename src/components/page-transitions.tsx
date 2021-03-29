import React from "react";
import { SlideFade } from "@chakra-ui/react";
import { MotionBox } from "./motion";

const staggerVariants = {
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

export const PageSlideFade = ({ children }) => {
  return <SlideFade in>{children}</SlideFade>;
};

export const StaggerChildren = ({ children }) => {
  return (
    <MotionBox
      animate={{
        opacity: 1,
        translateY: 0
      }}
      variants={staggerVariants}
    >
      {children}
    </MotionBox>
  );
};

export const CardTransition = ({ children }) => {
  return <MotionBox variants={variants}>{children}</MotionBox>;
};
