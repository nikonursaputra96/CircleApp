import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";

const ModalRegister = () => {
  return (
    <Flex
      flexDir={"column"}
      justify={"center"}
      mt={50}
      as={"dialog"}
      bg={"rgba(63, 63, 63, 1)"}
      w={"60vh"}
    >
      <Box>
        <Text color="rgba(4, 165, 30, 1)" fontSize="62" fontWeight="bold">
          circle
        </Text>
        <Text color="white" fontSize="40" fontWeight="bold">
          Create Account Circle
        </Text>
      </Box>

      <Box>
        <FormControl
          isRequired
          color={"white"}
          border="rgba(144, 144, 144, .5)"
        >
          <Input
            type="text"
            placeholder="FullName"
            my={15}
            h={50}
            sx={{
              "::placeholder": {
                color: "rgba(144, 144, 144, 1)",
              },
            }}
          />
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
            my={15}
            sx={{
              "::placeholder": {
                color: "rgba(144, 144, 144, 1)",
              },
            }}
          />
        </FormControl>
      </Box>

      <Button
        borderRadius="full"
        bg="rgba(4, 165, 30, 1)"
        color="white"
        fontSize="20px"
        w={"full"}
        h={"45"}
        mt={2}
      >
        CREATE
      </Button>

      <Flex align={"center"}>
        <Text color={"white"} textAlign={"right"} my={"15px"}>
          Already have account?
        </Text>
        <Text color={"rgba(4, 165, 30, 1)"} ml={2} fontWeight={"bold"}>
          Login
        </Text>
      </Flex>
    </Flex>
  );
};

export default ModalRegister;
