import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { RiHome7Fill } from "react-icons/ri";
import { MdOutlinePersonSearch } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../stores/rootReducer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HomeSearchModal from "../Modal/HomeSearchModal";

const SidebarLeft = () :React.JSX.Element  =>  {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const handleLogout = () => {
    dispatch(LOGOUT())
    navigate('/auth/login')
  }

  return (
    <Box bg="rgba(63, 63, 63, 1)" w="417px" display="flex" flexDirection="column" justifyContent="space-between" >
    <Box>
      <Flex fontWeight="bold" ml={50}>
        <Text color="rgba(4, 165, 30, 1)" fontSize="72" mt={5}>
          circle
        </Text>
      </Flex>

      <Flex
        color="white"
        flexDirection="column"
        fontSize="18px"
        gap={7}
        ml={50}
      >
        <Flex align="center" gap={4}>
          <RiHome7Fill size={32} />
          <Text fontWeight="bold">Home</Text>
        </Flex>
        <Flex align="center" gap={4}>
          <MdOutlinePersonSearch size={32} />
          <Text>Search</Text>
        </Flex>
        <Flex align="center" gap={4}>
          <AiOutlineHeart size={32} />
          <Text>Follows</Text>
        </Flex>
        <Flex align="center" gap={4}>
          <IoPersonCircleOutline size={32} />
          <Text>Profile</Text>
        </Flex>

      </Flex>

      <Button
      onClick={handleOpenModal}
        bg="rgba(4, 165, 30, 1)"
        borderRadius="full"
        width="337px"
        height="52px"
        mt="20px"
        ml={35}
      >
        <Text fontWeight="bold" color="white" fontSize="20px">
          Create Post
        </Text>
      </Button>
      
        </Box>

      <Flex 
        align="center"
        gap={4}
        color="white"
        fontSize="18px"
        ml={50}
        pb={50}
        onClick={handleLogout}
        cursor={"pointer"}
      >
        <BiLogOut size={32} />
        <Text>Logout</Text>
      </Flex>
      <HomeSearchModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default SidebarLeft;
