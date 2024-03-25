import { Box, Flex, Divider, Text, Avatar, Image } from "@chakra-ui/react"
import { TbMessage } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { ICard } from "../interfaces/Card";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

const HomeCard = (data :ICard) => {

    const [likes, setLikes] = useState<boolean>(false)
    const toggleLike = () => {
        setLikes(!likes)
    }

    return (
        <Box>

            <Flex ml="20px" color="white" mt="15px">
            <Avatar w="40px" h="40px" src="#" />
            <Flex flexDirection="column">
              <Flex fontSize="14px" gap={1} ml={3}>
                <Text color="white">{data.author}</Text>
                <Text color="rgba(144, 144, 144, 1)">{data.alias}</Text>
                <Text color="rgba(144, 144, 144, 1)">•</Text>
                <Text color="rgba(144, 144, 144, 1)">{data.timePost}</Text>
              </Flex>
              <Flex ml={3} borderRadius="xl">
                <Image src={data.image} />
              </Flex>
              <Text
                textAlign="justify"
                ml={3}
                fontSize="14px"
                mt={1}
                color="white"
                pr="50px"
              >
               {data.section}
              </Text>
              <Flex gap={2} fontSize="14px" ml={3} mt={3}>
                <Box onClick={toggleLike}>
                    {likes ? <AiFillHeart color="red" cursor="pointer" size={24} /> : <AiOutlineHeart cursor="pointer" size={24}/>}
                </Box>
                
                <Text mr={3}>35</Text>
                <TbMessage cursor="pointer" size={24} />
                <Text>381 Replies</Text>
              </Flex>
            </Flex>
          </Flex>
    
          <Divider borderColor="rgba(144, 144, 144, 1)" mt="20px" />
        </Box>

    )
}

export default HomeCard