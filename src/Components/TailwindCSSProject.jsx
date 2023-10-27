import { Button, ButtonGroup, Card, Flex, Heading, Image, Link, VStack } from "@chakra-ui/react"

const TailwindCSSProject = () => {
    const project = [
        {
            title: "Rode Clone",
            image: "../../public/TailwindProjectImage/rode.png",
            code: "https://github.com/deepakp626/Rode-Clone-With-Tailwind-CSS",
            path: "https://deepakp626.github.io/Rode-Clone-With-Tailwind-CSS/",
          },
        {
            title: "VS code",
            image: "../../public/TailwindProjectImage/VSCode.png",
            code: "https://github.com/deepakp626/Rode-Clone-With-Tailwind-CSS",
            path: "https://vscode-clone-by-deepak.netlify.app/",
          },
        {
            title: "Real Estate",
            image: "../../public/TailwindProjectImage/Real_EState.png",
            code: "https://github.com/deepakp626/Real-Estate-Website-with-TailwindCSS",
            path: "https://realestate-webiste.netlify.app/",
          },
    ]
  return (
    <>
       <Flex flexWrap={"wrap"} justifyContent={"space-evenly"} rowGap={"0.5rem"}>
        {project.map((project, id) => (
            <Card
              key={id}
              paddingY={"1rem"}
              paddingX={"1rem"}
              border={"1px"}
              borderColor={"black"}
               >
          
                <VStack>
                  <Image
                    borderRadius={"2rem"}
                    width={"16rem"}
                    height={"16rem"}
                    // src="https://avatars.githubusercontent.com/u/95975241?v=4"
                    src={project.image}
                    alt={project.title}
                  />
                  <VStack>
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
                      <Button as={Link}
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
  )
}

export default TailwindCSSProject