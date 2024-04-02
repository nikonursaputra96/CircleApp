import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import useRegister from "../../hooks/useRegister";
import { useNavigate } from "react-router-dom";

const ModalRegister = () => {
  const {handleChange, handlePost} = useRegister()

  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/auth/login')
  }

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
            onChange={handleChange}
            name="fullname"
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
            onChange={handleChange}
            name="email"
            placeholder="Email"
            my={15}
            h={50}
            sx={{
              "::placeholder": {
                color: "rgba(144, 144, 144, 1)",
              },
            }}
          />
          <Input
            type="text"
            onChange={handleChange}
            name="username"
            placeholder="Username"
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
            onChange={handleChange}
            name="password"
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
        onClick={handlePost}
      >
        CREATE
      </Button>

      <Flex align={"center"}>
        <Text color={"white"} textAlign={"right"} my={"15px"}>
          Already have account?
        </Text>
        <Text color={"rgba(4, 165, 30, 1)"} ml={2} fontWeight={"bold"} cursor={"pointer"} onClick={handleLogin}>
          Login
        </Text>
      </Flex>
    </Flex>
  );
};

export default ModalRegister;
