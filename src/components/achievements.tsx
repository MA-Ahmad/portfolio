import * as React from "react";
import {
  FiPackage,
  FiHome,
  FiEdit2,
  FiUser,
  FiUsers,
  FiTwitter,
  FiBarChart2
} from "react-icons/fi";
import {
  List,
  ListItem,
  ListIcon,
  Progress,
  Text,
  useColorModeValue,
  VStack,
  Heading,
  Box,
  LinkProps
} from "@chakra-ui/react";
import { TimelineItem } from "./Timeline";
import { PageSlideFade } from "./page-transitions";
import Header from "./header";

interface AnchorLinkProps extends LinkProps {
  url: string;
  linkProps?: LinkProps;
  text: string;
}

const AnchorLink: React.FC<AnchorLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <a href={url} {...linkProps} {...props}>
      {text}
    </a>
  );
};
const Achievements = () => {
  return (
    <PageSlideFade>
      <Box align="start" mb={6}>
        <Header mt={0} mb={0}>
          Achievements
        </Header>
      </Box>
      <VStack textAlign="start" align="start" mb={5}>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2021
          </Heading>
          <Box>
            <TimelineItem icon={FiUsers}>Became a dad ❤️</TimelineItem>
            {/* <TimelineItem icon={FiEdit2}>
        Wrote <a href="/posts">6 blog posts</a>
      </TimelineItem> */}
            <TimelineItem icon={FiPackage}>
              Published my first post on this website{" "}
              <AnchorLink
                url="/blog"
                text={"Blog"}
              />
            </TimelineItem>
            <TimelineItem icon={FiPackage}>
              Published or contributed to{" "}
              <AnchorLink
                url="/open-source"
                text={"6 open-source repositories"}
              />
            </TimelineItem>
            <TimelineItem icon={FiBarChart2}>
              Collected 1100 post views and 10 total reactions for 5 posts on{" "}
              <AnchorLink
                url="https://dev.to/m_ahmad"
                text={"Dev.to"}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiHome} skipTrail>
              Rebuilt my portfolio website with React, ChakraUI and
              Framer-motion,{" "}
              <AnchorLink
                url="https://github.com/MA-Ahmad/portfolio-v2"
                text={"source on Github"}
                target="_blank"
              />
              .
            </TimelineItem>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2020
          </Heading>
          <Box>
            <TimelineItem icon={FiEdit2}>Wrote 5 blog posts</TimelineItem>
            <TimelineItem icon={FiPackage}>
              Published or contributed to{" "}
              <AnchorLink
                url="https://github.com/MA-Ahmad?tab=repositories"
                text={"32 open-source repositories"}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiBarChart2}>
              Collected 674 post views and 16 total reactions for 5 posts on{" "}
              <AnchorLink
                url="https://dev.to/m_ahmad"
                text={"Dev.to"}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiHome} skipTrail>
              Built my portfolio website with React and ChakraUI,{" "}
              <AnchorLink
                url="https://github.com/MA-Ahmad/portfolio"
                text={"source on Github"}
                target="_blank"
              />
              .
            </TimelineItem>
          </Box>
        </Box>
      </VStack>
    </PageSlideFade>
  );
};

export default Achievements;
