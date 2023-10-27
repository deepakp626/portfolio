import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
} from "@chakra-ui/react";
import JavascriptProject from "./JavascriptProject";
import TailwindCSSProject from "./TailwindCSSProject";
import ReactJSProject from "./ReactJSProject";
const AllProjects = () => {
  return (
    <>
      <Flex id="projects"   justifyContent={"center"} width="100%" flexWrap={'wrap'}>
        <Tabs  colorScheme="white" width="100%"  >
          <TabList justifyContent={"center"} paddingY={"1rem"} >
            <Tab color={"black"} fontWeight={"bold"}>React JS</Tab>
            <Tab color={"black"} fontWeight={"bold"}>Tailwind CSS</Tab>
            <Tab color={"black"} fontWeight={"bold"}>HTML, CSS, JS</Tab>
          </TabList>

          <TabPanels >
            <TabPanel>
                <ReactJSProject />
            </TabPanel>
            <TabPanel>
                <TailwindCSSProject />
            </TabPanel>
            <TabPanel>
               <JavascriptProject />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
};

export default AllProjects;
