import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";

const ModalLogin = () => {
  return (
    <Flex
      flexDir={"column"}
      justify={"center"}
      mt={50}
      as={"dialog"}
      bg={"rgba(63, 63, 63, 1)"}
    >
      <Box>
        <Text color="rgba(4, 165, 30, 1)" fontSize="62" fontWeight="bold">
          circle
        </Text>
        <Text color="white" fontSize="40" fontWeight="bold">
          Login to Circle
        </Text>
      </Box>

      <Box>
        <FormControl
          isRequired
          color={"white"}
          border="rgba(144, 144, 144, .5)"
        >
          <Input
            type="email"
            placeholder="Email/Username"
            my={15}
            h={50}
            sx={{
              "::placeholder": {
                color: "rgba(144, 144, 144, 1)",
              },
            }}
          />
          <Input
            type="password"
            placeholder="Password"
            h={50}
            sx={{
              "::placeholder": {
                color: "rgba(144, 144, 144, 1)",
              },
            }}
          />
        </FormControl>
      </Box>

      <Text color={"white"} textAlign={"right"} my={"8px"}>
        Forgot password?
      </Text>

      <Button
        borderRadius="full"
        bg="rgba(4, 165, 30, 1)"
        color="white"
        fontSize="20px"
        w={"full"}
        h={"45"}
      >
        Login
      </Button>

      <Flex align={"center"}>
        <Text color={"white"} textAlign={"right"} my={"8px"}>
          Don't have an account yet?
        </Text>
        <Text color={"rgba(4, 165, 30, 1)"} ml={2} fontWeight={"bold"}>
          Create account
        </Text>
      </Flex>
    </Flex>
  );
};

export default ModalLogin;
