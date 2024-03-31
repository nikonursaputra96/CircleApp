import { Box, Flex, Text, Avatar, Button } from "@chakra-ui/react";
import { IUserData } from "../../interfaces/Card";
import useThreads from "../../hooks/useThreads";
import { useEffect, useState } from "react";


const SideBarSuggested = () :React.JSX.Element => {
  const [follow, setFollow] = useState<boolean>(false);
  const toggleFollow = () => {
    setFollow(!follow);
  };

  const {user, getUser} = useThreads()

 

  useEffect(() => {
   getUser()
  },[])



  return (
    <Flex  bg="rgba(63, 63, 63, 1)" flexDirection="column">

      <Box
        w="483px"
        bg="rgba(38, 38, 38, .3)"
        borderRadius="xl"
        mx="auto"
        px={6}
        py={5}
        mt={3}
      >
        <Text fontSize="20px" color="white" fontWeight="bold">
          Suggested for you
        </Text>

        {user?.map((data:IUserData, id:number) => {
          return (
        <Flex key={id} justifyContent="space-between" alignItems="center" mt={3}>
          <Flex alignItems="center">
            <Avatar src={data.profile_picture}/>
            <Box ml={2}>
              <Text fontSize="20px" color="white" fontWeight="bold">
                {data.fullname}
              </Text>
              <Text fontSize="14px" color="rgba(144, 144, 144, 1)">
               {data.username}
              </Text>
            </Box>
          </Flex>
          <div onClick={toggleFollow}>
            {follow ? (
              <Button
                color="white"
                fontSize="14px"
                textAlign="center"
                borderRadius="full"
                border="2px solid white"
                bg="none"
                w="106px"
                h="33px"
                opacity={0.4}
              >
                Following
              </Button>
            ) : (
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
                Follow
              </Button>
            )}
          </div>
        </Flex>

          )
        })}

       
      </Box>

      
    </Flex>
  );
};

export default SideBarSuggested;
