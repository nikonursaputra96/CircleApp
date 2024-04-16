import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/types/rootState";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


type ProfileHeader = {
  
  handleMenuClick: (menu: string) => void;
  menuActive: string;
};

const ProfileHeader = ({handleMenuClick, menuActive}:ProfileHeader): React.JSX.Element => {
  const { fullname, username } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate()

  return (
    <Box
      w={748}
      bg="rgba(63, 63, 63, 1)"
    
    >
      <Box px={5} mt={5}>
        <Flex>
          <FaArrowLeftLong size={24} color="white" cursor={"pointer"} onClick={() => navigate("/")}/>
          <Text color="white" fontSize="20px" fontWeight="bold" ml={3}>
            ✨{fullname}✨
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
          <Avatar w="80px" h="80px" mt={62} ml={25} border="3px solid black" />
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
      <Flex
        color={"white"}
        justifyContent={"space-evenly"}
        mt={7}
        borderBottom={"2px solid grey"}
      >
        <Box
          textAlign={"center"}
          cursor={"pointer"}
          onClick={() => handleMenuClick("AllPost")}
          borderBottom={menuActive === "AllPost" ? "4px solid green" : "none"}
          w={300}
        >
          <Text>All post</Text>
        </Box>
        <Box
          textAlign={"center"}
          cursor={"pointer"}
          onClick={() => handleMenuClick("Media")}
          borderBottom={menuActive === "Media" ? "4px solid green" : "none"}
          w={300}
        >
          <Text>Media</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProfileHeader;
