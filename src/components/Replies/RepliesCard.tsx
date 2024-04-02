import { Box, Flex, Divider, Text, Avatar } from "@chakra-ui/react";
import { TbMessage } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { IReply } from "../../interfaces/Card";
import { formatDistanceToNow } from "date-fns";


const RepliesCard = (reply:IReply): React.JSX.Element => {

    const timeAgo = formatDistanceToNow(new Date(reply.posted_at), { addSuffix: false})
    const formattedTimeAgo = timeAgo.replace("about", "").replace("hours", "h") 


  return (
    <Box>
        
      
          <Box>
            <Flex ml="20px" color="white" mt="15px">
              <Avatar w="40px" h="40px" src={reply.user?.profile_picture} />
              <Flex flexDirection="column">
                <Flex fontSize="14px" gap={1} ml={3}>
                  <Text color="white">{reply.user?.fullname}</Text>
                  <Text color="rgba(144, 144, 144, 1)">{reply.user?.username}</Text>
                  <Text color="rgba(144, 144, 144, 1)">•</Text>
                  <Text color="rgba(144, 144, 144, 1)">{formattedTimeAgo}</Text>
                </Flex>

                <Text
                  textAlign="justify"
                  ml={3}
                  fontSize="14px"
                  mt={1}
                  color="white"
                  pr="50px"
                >
                  {reply.content}
                </Text>
                <Flex gap={2} fontSize="14px" ml={3} mt={3}>
                  <Box>
                    <AiOutlineHeart cursor="pointer" size={24} />
                  </Box>

                  <Text mr={3}>35</Text>
                  <TbMessage cursor="pointer" size={24} />
                  <Text>381 Replies</Text>
                </Flex>
              </Flex>
            </Flex>

            <Divider borderColor="rgba(144, 144, 144, 1)" mt="20px" />
          </Box>
    
    </Box>
  );
};

export default RepliesCard;
