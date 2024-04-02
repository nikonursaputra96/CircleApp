import { Flex, Box, Text, Avatar, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/types/rootState";

const SideBarProfile = () :React.JSX.Element => {
  const {fullname, username} = useSelector((state: RootState) => state.auth)
  return (
    <div>
      <Box bg="rgba(63, 63, 63, 1)" >
        <Box
          w="483px"
       
          bg="rgba(38, 38, 38, .3)"
          borderRadius="xl"
          mx="auto"
          mt={50}
          px={6}
          py={5}
        >
          <Text color="white" fontSize="20px" fontWeight="bold">
            My Profile
          </Text>

          <Box w="435px" h="100px" bg="url('https://wallpapers.com/images/hd/wide-3840-x-1163-background-5nfaut9equv6dgxn.jpg')" bgPosition='center' borderRadius="lg" mt={3}>
            <Avatar
              w="80px"
              h="80px"
              mt={62}
              ml={25}
              border="3px solid black"
             
            />
          </Box>

          <Flex justifyContent="flex-end" mt={3}>
            <Button
              color="white"
              fontSize="14px"
              textAlign="center"
              borderRadius="full"
              border="2px solid white"
              bg="none"
              w="106px"
              h="33px"
            >
              Edit Profile
            </Button>
          </Flex>

          <Box>
            <Text fontSize="24px" mt={1} color="white" fontWeight="bold">
              ✨{fullname}✨
            </Text>
            <Text fontSize="14px" mt={1} color="rgba(144, 144, 144, 1)">
              @{username}
            </Text>
            <Text fontSize="16px" mt={1} color="white">
              Here we go again !
            </Text>
          </Box>

          <Flex gap={1} fontSize="16px" mt={2}>
            <Text color="white" fontWeight="bold">
              291
            </Text>
            <Text color="rgba(144, 144, 144, 1)">Following</Text>
            <Text color="white" fontWeight="bold" ml={3}>
              291
            </Text>
            <Text color="rgba(144, 144, 144, 1)">Followers</Text>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default SideBarProfile
