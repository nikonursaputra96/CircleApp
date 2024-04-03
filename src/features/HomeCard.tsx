import { Box, Flex, Divider, Text, Avatar, Image } from "@chakra-ui/react"
import { TbMessage } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { IThread} from "../interfaces/Card";
import { formatDistanceToNow } from 'date-fns';
import { useNavigate } from "react-router-dom";

const HomeCard = (data :IThread) :React.JSX.Element => {

    const navigate = useNavigate()
    const handleRepliesClick = () => {
      navigate(`/threads/${data.id}`);
    };
  
    const [likes, setLikes] = useState<boolean>(false)
    const toggleLike = () => {
        setLikes(!likes)
    }
    
    const timeAgo = formatDistanceToNow(new Date(data.posted_at), { addSuffix: false })
    

    const [imageURL, setImageURL] = useState<string>('');


    useEffect(() => {
      if (data.image) {
        setImageURL(`http://localhost:5000/api/v1/src/assets/${data.image}`);
      }
    }, [data.image]);
 
    return (
        <Box>

            <Flex ml="20px" color="white" mt="15px">
            <Avatar w="40px" h="40px" src={data.user?.profile_picture} />
            <Flex flexDirection="column">
              <Flex fontSize="14px" gap={1} ml={3}>
                <Text color="white">{data.user?.fullname}</Text>
                <Text color="rgba(144, 144, 144, 1)">@{data.user?.username}</Text>
                <Text color="rgba(144, 144, 144, 1)">•</Text>
                <Text color="rgba(144, 144, 144, 1)">{timeAgo}</Text>
              </Flex>
              {data.image ? (
              <Flex ml={3} mt={2} borderRadius="xl" w='50vh'>
                <Image src={imageURL} />
              </Flex>
              ): <Flex ml={3} mt={2} borderRadius="xl" display="none">
              <Image src={imageURL} />
            </Flex>}
              <Text
                textAlign="justify"
                ml={3}
                fontSize="14px"
                mt={2}
                color="white"
                pr="50px"
              >
               {data.content}
              </Text>
              <Flex gap={2} fontSize="14px" ml={3} mt={3}>
                <Box onClick={toggleLike}>
                    {likes ? <AiFillHeart color="red" cursor="pointer" size={24} /> : <AiOutlineHeart cursor="pointer" size={24}/>}
                </Box>
                
                <Text mr={3}>35</Text>
                <TbMessage cursor="pointer" size={24} onClick={handleRepliesClick}/>
                <Text>381 Replies</Text>
              </Flex>
            </Flex>
          </Flex>
    
          <Divider borderColor="rgba(144, 144, 144, 1)" mt="20px" />
        </Box>

    )
}

export default HomeCard