import { useNavigate } from "react-router-dom"
import useThreads from "../../hooks/useThreads"
import { Avatar, Box, Divider, Flex, Image, Spinner, Text } from "@chakra-ui/react"
import { TbMessage } from "react-icons/tb"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { formatDistanceToNow } from "date-fns"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../stores/types/rootState"



const ProfileCards = ():React.JSX.Element => {
    const {getThreads, isLoading} = useThreads()

    const { id } = useSelector((state: RootState) => state.auth);
    const filteredThreads = getThreads?.filter((thread: any) => thread.user?.id === id)

  
    const navigate = useNavigate()
    const handleRepliesClick = (threadId: number) => {
        navigate(`/threads/${threadId}`);
    };
  
    const [likes, setLikes] = useState<boolean>(false)
    const toggleLike = () => {
        setLikes(!likes)
    }
    
    return (
        <Box mt={1}>
            {isLoading ? (
                <Spinner  position={"absolute"}
                top="50%"
                left="50%"
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="rgba(4, 165, 30, 1)"
                size="xl"/>
            ) : filteredThreads?.map((thread:any, id:number) => (

            <Box key={id}  color="white" mt="15px">
            <Flex ml={15}>
            <Avatar w="40px" h="40px" src={thread.user?.profile_picture} />
            <Flex flexDirection="column">
              <Flex fontSize="14px" gap={1} ml={3}>
                <Text color="white">{thread.user?.fullname}</Text>
                <Text color="rgba(144, 144, 144, 1)">@{thread.user?.username}</Text>
                <Text color="rgba(144, 144, 144, 1)">•</Text>
                <Text color="rgba(144, 144, 144, 1)">{formatDistanceToNow(new Date(thread?.posted_at))}</Text>
              </Flex>
              {thread.image ? (
              <Flex ml={3} mt={2} borderRadius="xl" w='50vh'>
                <Image src={thread.image}  />
              </Flex>
              ) : (<Flex ml={3} mt={2} borderRadius="xl" display="none">
              <Image src={thread.image} />
            </Flex>)}
         
              <Text
                textAlign="justify"
                ml={3}
                fontSize="14px"
                mt={2}
                color="white"
                pr="50px"
              >
               {thread.content}
              </Text>
              <Flex gap={2} fontSize="14px" ml={3} mt={3}>
                <Box onClick={toggleLike}>
                    {likes ? <AiFillHeart color="red" cursor="pointer" size={24} /> : <AiOutlineHeart cursor="pointer" size={24}/>}
                </Box>
                
                <Text mr={3}>35</Text>
                <TbMessage cursor="pointer" size={24}  onClick={() => handleRepliesClick(thread.id)}/>
                <Text>381 Replies</Text>
              </Flex>
              </Flex>
            </Flex>
            <Divider borderColor="rgba(144, 144, 144, 1)" mt="20px" />
          </Box>
    
            ))}

        </Box>
    )
}

export default ProfileCards