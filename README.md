# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



<Center
                key={id}
                padding={"1rem"}
                gap={"1.5rem"}
                border={"4px"}
                borderColor={"red"}
                // width={"100%"}
                justifyContent={"center"}
                flexDirection={{ base: "column", md: "row" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  maxWidth={"22rem"}
                  maxHeight="18rem"
                  borderRadius={"1.25rem"}
                  border={"2px"}
                  borderColor={"red"}
                />
                <VStack
                  border={"2px"}
                  maxWidth={"21rem"}
                  borderColor={"blue"}
                  color={"white"}
                >
                  <Heading fontSize={"1.5rem"} fontWeight="700">
                    {project.title}
                  </Heading>
                  <Text fontSize={"1rem"} fontWeight={"normal"}>
                    {project.description}
                  </Text>
                  <ButtonGroup>
                    <Button as={Link} href={project.live}>
                      Live
                    </Button>
                    <Button as={Link} href={project.code}>
                      Code
                    </Button>
                  </ButtonGroup>
                </VStack>
              </Center>









 {/* <Carousel
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          interval={2000}
          infiniteLoop={true}
          autoPlay={true}
        >
          {project.map((project, id) => (
            <>
              {/* <Center
                key={id}
                padding={"1rem"}
                gap={"1.5rem"}
                border={"4px"}
                borderColor={"red"}
                // width={"100%"}
                justifyContent={"center"}
                flexDirection={{ base: "column", md: "row" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  maxWidth={"22rem"}
                  maxHeight="18rem"
                  borderRadius={"1.25rem"}
                  border={"2px"}
                  borderColor={"red"}
                />
                <VStack
                  border={"2px"}
                  maxWidth={"21rem"}
                  borderColor={"blue"}
                  color={"white"}
                >
                  <Heading fontSize={"1.5rem"} fontWeight="700">
                    {project.title}
                  </Heading>
                  <Text fontSize={"1rem"} fontWeight={"normal"}>
                    {project.description}
                  </Text>
                  <ButtonGroup>
                    <Button as={Link} href={project.live}>
                      Live
                    </Button>
                    <Button as={Link} href={project.code}>
                      Code
                    </Button>
                  </ButtonGroup>
                </VStack>
              </Center> */}
            </>
          ))}
        </Carousel> */}