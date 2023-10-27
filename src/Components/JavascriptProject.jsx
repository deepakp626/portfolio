import {
  Button,
  ButtonGroup,
  Card,
  Flex,
  Heading,
  Image,
  VStack,
  Link,
} from "@chakra-ui/react";

const JavascriptProject = () => {
  const data = [
    {
      title: "movie search",
      image: "../../public/javascriptProjectImage/Movie_Search_web_App.png",
      code: "https://github.com/deepakp626/javascript-project-by-deepak/tree/master/16%20Movie%20Search%20web%20App",
      path: "https://deepakp626.github.io/javascript-project-by-deepak/16%20Movie%20Search%20web%20App/index.html",
    },
    {
      title: "Calculator",
      image: "../../public/javascriptProjectImage/Calculator.png",
      code: "https://github.com/deepakp626/javascript-project-by-deepak/tree/master/16%20Movie%20Search%20web%20App",
      path: "https://deepakp626.github.io/javascript-project-by-deepak/16%20Movie%20Search%20web%20App/index.html",
    },
    {
      title: "Product Search",
      image:
        "../../public/javascriptProjectImage/fetch_product_search_and_filter.png",
      code: "https://deepakp626.github.io/javascript-project-by-deepak/07%20fetch%20product%20search%20and%20filter/index.html",
      path: "",
    },
    {
      title: "form Validation",
      image: "../../public/javascriptProjectImage/Form_validation.png",
      code: "https://github.com/deepakp626/javascript-project-by-deepak/tree/master/30%20Form%20Validation",
      path: "https://deepakp626.github.io/javascript-project-by-deepak/30%20Form%20Validation/index.html",
    },
    {
      title: "Notes Taking App",
      image: "../../public/javascriptProjectImage/Notes_Taking_App.png",
      code: "https://github.com/deepakp626/javascript-project-by-deepak/tree/master/15%20%20Notes%20Taking%20App",
      path: "https://deepakp626.github.io/javascript-project-by-deepak/15%20%20Notes%20Taking%20App/index.html",
    },
    {
      title: "Quiz App",
      image: "../../public/javascriptProjectImage/Quiz_app.png",
      code: "https://github.com/deepakp626/javascript-project-by-deepak/tree/master/14%20Quiz%20App",
      path: "https://deepakp626.github.io/javascript-project-by-deepak/14%20Quiz%20App/index.html",
    },
    {
      title: "Random Quote",
      image: "../../public/javascriptProjectImage/random_quote_generator.png",
      code: "https://github.com/deepakp626/javascript-project-by-deepak/tree/master/27%20random%20quote%20generator",
      path: "https://deepakp626.github.io/javascript-project-by-deepak/27%20random%20quote%20generator/index.html",
    },
    {
      title: "Search Github",
      image: "../../public/javascriptProjectImage/Search_Github_Profile.png",
      code: "https://github.com/deepakp626/javascript-project-by-deepak/tree/master/04%20github%20profile",
      path: "https://deepakp626.github.io/javascript-project-by-deepak/04%20github%20profile/index.html",
    },
    {
      title: "Tip Calculator",
      image: "../../public/javascriptProjectImage/Tip_calculation.png",
      code: "https://github.com/deepakp626/javascript-project-by-deepak/tree/master/22%20Tip%20calculator",
      path: "https://deepakp626.github.io/javascript-project-by-deepak/22%20Tip%20calculator/index.html",
    },
    {
      title: "To do ",
      image: "../../public/javascriptProjectImage/To_do.png",
      code: "https://github.com/deepakp626/javascript-project-by-deepak/tree/master/02%20To%20do%20list%20project",
      path: "https://deepakp626.github.io/javascript-project-by-deepak/02%20To%20do%20list%20project/index.html",
    },
  ];
  return (
    <>
      <Flex flexWrap={"wrap"} justifyContent={"space-evenly"} rowGap={"0.5rem"}>
        {data.map((project, id) => (
            <Card key={id} border={"1px"} borderColor={"black"}>
              <VStack>
                <Image
                  borderRadius={"2rem"}
                  width={"16rem"}
                  height={"16rem"}
                  // src="https://avatars.githubusercontent.com/u/95975241?v=4"
                  src={project.image}
                  alt={project.title}
                />
                <VStack paddingY={"1rem"} paddingX={"1rem"}>
                  <Heading fontSize={"1.5rem"} fontWeight="600">
                    {project.title}
                  </Heading>
                  <ButtonGroup>
                    <Button
                      as={Link}
                      href={project.path}
                      border={"2px"}
                      borderColor={"#A3A3A3"}
                      borderRadius={"2rem"}
                      fontSize={"0.8rem"}
                      fontWeight={"600"}
                      bg={"white"}
                      paddingX={"2.65rem"}
                    >
                      Live
                    </Button>
                    <Button
                      as={Link}
                      href={project.code}
                      border={"2px"}
                      borderColor={"#A3A3A3"}
                      borderRadius={"2rem"}
                      fontSize={"0.8rem"}
                      fontWeight={"600"}
                      bg={"white"}
                      paddingX={"2.65rem"}
                    >
                      Code
                    </Button>
                  </ButtonGroup>
                </VStack>
              </VStack>
            </Card>
        ))}
      </Flex>
    </>
  );
};

export default JavascriptProject;
