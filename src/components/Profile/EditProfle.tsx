import { Avatar, Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/types/rootState";
import { BiSolidImageAdd } from "react-icons/bi";

const EditProfile = (): React.JSX.Element => {
  const { fullname, username } = useSelector((state: RootState) => state.auth);
  return (
    <Flex bg="rgba(63, 63, 63, 1)" border={"2px solid grey"} as={"dialog"} borderRadius={"xl"} mt={50}>
      <Box px={5} mt={5} w={"600px"} h={"600px"}>
        <Flex>
          <Text color="white" fontSize="20px" fontWeight="bold" ml={3}>
            Edit profile
          </Text>
        </Flex>

        <Box
          w="auto"
          h="100px"
          bg="url('https://wallpapers.com/images/hd/wide-3840-x-1163-background-5nfaut9equv6dgxn.jpg')"
          bgPosition="center"
          borderRadius="lg"
          mt={3}
        >
          <Flex>
            <Avatar w="80px" h="80px" mt={62} ml={25} border="3px solid black"/>
            <Flex position={"absolute"} mt={79} ml={51}>
            <BiSolidImageAdd 
                size={35}
                style={{ marginTop: "5px" }}
                cursor="pointer"
              />
            <Input
              id="imageUpload"
              type="file"
              accept="image/*"
              display="none"
              name=""
            />
            </Flex>
          </Flex>
        </Box>

        <Flex
          border={"2px solid grey"}
          color={"white"}
          mt={"60px"}
          borderRadius={"xl"}
          justify={"center"}
          flexDir={"column"}
        >
          <Text fontSize={"15px"} color={"grey"} fontWeight={"bold"} ml={3}>
            Name
          </Text>
          <Input
            type="text"
            border={"none"}
            name="name"
            size={"md"}
            placeholder={`✨${fullname}✨`}
            _placeholder={{ color: "white" }}
          />
        </Flex>
        <Flex
          border={"2px solid grey"}
          color={"white"}
          mt={5}
          borderRadius={"xl"}
          justify={"center"}
          flexDir={"column"}
        >
          <Text fontSize={"15px"} color={"grey"} fontWeight={"bold"} ml={3}>
            Username
          </Text>
          <Input
            type="text"
            border={"none"}
            name="name"
            size={"md"}
            placeholder={username}
            _placeholder={{ color: "white" }}
          />
        </Flex>
        <Flex
          border={"2px solid grey"}
          color={"white"}
          mt={5}
          borderRadius={"xl"}
          justify={"center"}
          flexDir={"column"}
        >
          <Text fontSize={"15px"} color={"grey"} fontWeight={"bold"} ml={3}>
            Bio
          </Text>
          <Input
            type="text"
            border={"none"}
            name="name"
            size={"md"}
            h={"100px"}
            _placeholder={{ color: "white" }}
          />
        </Flex>

        <Flex justifyContent={"flex-end"} mt={5}>
          <Button
            borderRadius="full"
            bg="rgba(4, 165, 30, 1)"
            color="white"
            fontSize="14px"
            w="63px"
            h="33px"
            ml="20px"
            type="submit"
          >
            Save
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default EditProfile;
