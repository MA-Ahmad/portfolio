import * as React from "react";
import { VStack, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./project-card";
import Header from "./header";
import { AnimateSharedLayout } from "framer-motion";
import { MotionBox } from "./motion";

interface ProjectsProps {
  projects: project[];
}

const ORANGE = "#ff9400";

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <VStack align="start" spacing={8} mt={14}>
      <Header underlineColor={ORANGE} mt={0} mb={0}>
        Projects
      </Header>
      <AnimateSharedLayout>
        <SimpleGrid columns={1} spacing={4} mt={5} w="100%">
          {projects.map((project, index) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.desc}
                logo={project.logo}
                link={project.link}
                technologies={project.technologies}
              />
            </MotionBox>
          ))}
        </SimpleGrid>
      </AnimateSharedLayout>
    </VStack>
  );
};

export default Projects;
