import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React_JS from "../../public/skills_Icon/icons8-react.svg";
import tailwind_CSS from "../../public/skills_Icon/icons8-tailwind-css.svg";
import javascript from "../../public/skills_Icon/javascript.svg";
import chakra_UI from "../../public/skills_Icon/icons8-chakra-ui.svg";
// import expressJS from "../../public/skills_Icon/icons8-express-js.svg";
import HTML from "../../public/skills_Icon/icons8-html.svg";
import CSS from "../../public/skills_Icon/icons8-css.svg";
import Git from "../../public/skills_Icon/icons8-git.svg";
// import mongoDB from "../../public/skills_Icon/icons8-mongodb.svg";
// import Node_JS from "../../public/skills_Icon/icons8-nodejs.svg";
const Skills = () => {
  const skills = [
    { path: javascript, skillName: "javascript" },
    { path: React_JS, skillName: "React JS" },
    { path: tailwind_CSS, skillName: "Tailwind CSS" },
    { path: chakra_UI, skillName: "Chakra UI" },
    { path: Git, skillName: "Git" },
    { path: HTML, skillName: "HTML" },
    { path: CSS, skillName: "CSS" },
  ];
  // const backend = [
  //   { path: Node_JS, skillName: "Node JS" },
  //   { path: mongoDB, skillName: "Mongo DB" },
  //   { path: expressJS, skillName: "Express JS" },
  // ];
  return (
    <>
      <Heading
        textAlign={"center"}
        fontSize={"3rem"}
        fontWeight={"700"}
        letterSpacing={"6px"}
        textDecoration={"underline"}
      >
        Skills
      </Heading>
      <Flex
        gap={"3.28rem"}
        justifyContent={"center"}
        margin={"1rem"}
        flexWrap={"wrap"}
        textAlign={"center"}
      >
        {skills.map((item, id) => (
          <VStack key={id} width={"70px"}>
            <Image src={item.path} />
            <Text>{item.skillName}</Text>
          </VStack>
        ))}
      </Flex>
    </>
  );
};

export default Skills;
