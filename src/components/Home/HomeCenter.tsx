import {
  Box,
  Flex,
  Text,
  Avatar,
  Button,
  Textarea,
  Divider,
} from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";
import HomeCard from "../../features/HomeCard";
import { useEffect, useState } from "react"
import card from "../../lib/Card.json"
import { ICard } from "../../interfaces/Card";
 

const HomeCenter = () => {
    const [home, setHome] = useState<ICard[]>([])
    useEffect (() => {
        setHome(card)
    },[])

  return (
    <Box
      w={748}
      bg="rgba(63, 63, 63, 1)"
      borderRight="2px solid rgba(144, 144, 144, .5)"
      borderLeft="1px solid rgba(144, 144, 144, .5)"
    >
      <Text color="rgba(255, 255, 255, 1)" fontSize={28} ml="20px" mt={45}>
        Home
      </Text>

      <Flex ml="20px" color="white" mt="15px" mr="50px">
        <Avatar w="40px" h="40px" src="#" />
        <Textarea
          ml={2}
          placeholder="What's Happening ?!"
          border="none"
          fontSize="20px"
          w="80vh"
          resize="none"
          sx={{
            "::placeholder": {
              color: "rgba(144, 144, 144, 1)",
            },
          }}
          minH="45px"
        ></Textarea>

        <LuImagePlus
          size={24}
          color="rgba(4, 165, 30, 1)"
          style={{ marginTop: "5px" }}
        />

        <Button
          borderRadius="full"
          bg="rgba(4, 165, 30, 1)"
          color="white"
          fontSize="14px"
          w="63px"
          h="33px"
          ml="20px"
        >
          Post
        </Button>
      </Flex>

      <Divider borderColor="rgba(144, 144, 144, 1)" mt="20px" />

    {home && home.map ((data: ICard, id:number) => {
        return (
            <div key={id}>
                <HomeCard
                id={data.id}
                profilePicture={data.profilePicture}
                author={data.author}
                alias={data.alias}
                timePost={data.timePost}
                section={data.section}
                image={data.image}
                 />
            </div>
        )
    })}





      




    
    </Box>
  );
};

export default HomeCenter;
