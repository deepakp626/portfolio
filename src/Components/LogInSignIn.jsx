import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  FormLabel,
  Input,
  //   FormHelperText,
  Button,
  Box,
  HStack,
  Stack,
} from "@chakra-ui/react";
import {
  GithubLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

const LogInSignIn = () => {
  return (
    <>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>LogIn</Tab>
          <Tab>SignIn</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FormControl>
              <FormLabel>Email </FormLabel>
              <Input type="email" />
              {/* <FormHelperText>We ll never share your email.</FormHelperText> */}

              <FormLabel>Password </FormLabel>
              <Input type="email" />

              <Button
                size="md"
                height="48px"
                width="100%"
                border="2px"
                borderColor="blue.500"
                mt={"1rem"}
              >
                Log In
              </Button>
            </FormControl>
            <Box mt={"1rem"}>
              <GoogleLoginButton onClick={() => alert("Hello")} />
              <GithubLoginButton onClick={() => alert("Hello")} />
            </Box>
          </TabPanel>
          <TabPanel>
            <FormControl>
              <HStack>
                <Stack gap={"0px"}>
                  <FormLabel>First Name </FormLabel>
                  <Input type="email" />
                </Stack>
                <Stack gap={"0px"}>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="email" />
                </Stack>
              </HStack>
              <FormLabel>Email </FormLabel>
              <Input type="email" />
              <FormLabel>password</FormLabel>
              <Input type="password" />
              <FormLabel>Conform password</FormLabel>
              <Input type="password" />

              <Button
                size="md"
                height="48px"
                width="100%"
                border="2px"
                borderColor="blue.500"
                mt={"1rem"}
              >
                Sign In
              </Button>
            </FormControl>
            <Box mt={"1rem"}>
            <GoogleLoginButton  text={"Sign In With Google"}
            onClick={() => alert("Hello")} />
              <GithubLoginButton text={"Sign In With Github"}
              onClick={() => alert("Hello")} />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default LogInSignIn;
