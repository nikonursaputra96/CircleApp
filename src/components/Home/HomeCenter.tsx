import {
  Box,
  Flex,
  Text,
  Avatar,
  Button,
  Textarea,
  Divider,
  Input,
} from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";
import HomeCard from "../../features/HomeCard";
import { useEffect} from "react"
import useThreads from "../../hooks/useThreads";
import { IThread } from "../../interfaces/Card";


 

const HomeCenter = () :React.JSX.Element => {

    const {threads, getThreadsAndUser,  handleChange, handlePost, handleImageChange} = useThreads()

 

    useEffect(() => {
     getThreadsAndUser()
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
        <Avatar w="40px" h="40px" src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p3/26/2024/03/28/Luffy-One-Piece-Chapter-1112-1102863623.jpg" />
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
          onChange={handleChange}
          name="content"
        ></Textarea>

          <label htmlFor="imageUpload">

        <LuImagePlus
          size={24}
          color="rgba(4, 165, 30, 1)"
          style={{ marginTop: "5px" }}
          cursor='pointer'
        />
          </label>
          <Input id="imageUpload" type="file" accept="image/*" display='none' name="" onChange={handleImageChange} />

        <Button
          borderRadius="full"
          bg="rgba(4, 165, 30, 1)"
          color="white"
          fontSize="14px"
          w="63px"
          h="33px"
          ml="20px"
          onClick={handlePost}
        >
          Post
        </Button>
      </Flex>

      <Divider borderColor="rgba(144, 144, 144, 1)" mt="20px" />

    {threads?.map((data: IThread, id:number) => {
        return (
            <div key={id}>
                <HomeCard
                id={data.id}
                user={data.user}
                posted_at={data.posted_at}
                content={data.content}
                image={data.image}
                likes={data.likes}
                reply={data.reply}
                isLiked={data.isLiked}
                 />
            </div>
        )
    })}





      




    
    </Box>
  );
};

export default HomeCenter;
