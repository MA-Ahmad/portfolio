import * as React from "react";
import {
  VStack,
  Text,
  useColorModeValue,
  HStack,
  IconButton,
  Tooltip
} from "@chakra-ui/react";
import { PageSlideFade } from "./page-transitions";
import Header from "./header";
import { RiSignalTowerLine, RiWifiOffLine } from "react-icons/ri";
import OfflineData from "./offline-data";
import LiveData from "./live-data";

const TURQUOISE = "#06b6d4";

const iconProps = {
  variant: "ghost",
  size: "md",
  isRound: true
};

const RepositoriesList = () => {
  const [activeTab, setActiveTab] = React.useState("live");

  return (
    <PageSlideFade>
      <VStack align="start" spacing={3}>
        <HStack justifyContent={"space-between"} width={"100%"}>
          <Header underlineColor={TURQUOISE} mt={0} mb={0}>
            Open Source
          </Header>
          <HStack>
          <Tooltip hasArrow label="Live github data" placement="top">
            <IconButton
              aria-label={"live"}
              size="md"
              colorScheme={"linkedin"}
              icon={<RiSignalTowerLine />}
              isActive={activeTab === "live"}
              onClick={() => setActiveTab("live")}
              {...iconProps}
            />
            </Tooltip>
          <Tooltip hasArrow label="Offline github data" placement="top">
            <IconButton
              aria-label={"live"}
              size="md"
              colorScheme={"linkedin"}
              icon={<RiWifiOffLine />}
              isActive={activeTab === "offline"}
              onClick={() => setActiveTab("offline")}
              {...iconProps}
            />
            </Tooltip>
          </HStack>
        </HStack>
        <Text
          color={useColorModeValue("gray.500", "gray.200")}
          textAlign="left"
        >
          This page lists some of the open source repositories I have published
          or contributed to.
        </Text>
      </VStack>
      {activeTab === "live" ? <LiveData /> : <OfflineData />}
    </PageSlideFade>
  );
};

export default RepositoriesList;
