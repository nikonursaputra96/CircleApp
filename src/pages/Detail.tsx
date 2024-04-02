import { Flex, Box, Text } from "@chakra-ui/react";

import SidebarLeft from "../components/Home/SidebarLeft";
import SideBarRight from "./SideBarRight";
import HomeCard from "../features/HomeCard";
import { useParams } from "react-router-dom";
import useThreads from "../hooks/useThreads";
import { useEffect } from "react";
import { IReply } from "../interfaces/Card";
import { FaArrowLeftLong } from "react-icons/fa6";
import SearchDetail from "../components/Home/SearchDetail";
import RepliesCard from "../components/Replies/RepliesCard";
import useReply from "../hooks/useReply";

const Detail = (): React.JSX.Element => {
  const { id } = useParams();
  const { threads, getThreadsAndUser } = useThreads();
  const thread = threads.find(thread => thread.id === Number(id));

  const { reply, getReply } = useReply();


  
  useEffect(() => {
    getThreadsAndUser();
    getReply(Number(id))
  }, [id]);

  return (
    <Flex>
      <Flex position='fixed' left={0} top={0} bottom={0}>
        <SidebarLeft />
      </Flex>


      <Flex position='relative'  ml={[0,390]}
        w={748}
        bg="rgba(63, 63, 63, 1)"
        borderRight="2px solid rgba(144, 144, 144, .5)"
        borderLeft="1px solid rgba(144, 144, 144, .5)"
        flexDirection={"column"}
      >
      <Box color="rgba(255, 255, 255, 1)" fontSize={28}  mt={45} >
        <Flex alignItems={"center"} ml={8}>
        <FaArrowLeftLong  />
        <Text ml={3}> Status</Text> 
        </Flex>
      </Box>

        {thread && 
           (
            <HomeCard
            key={id}
            id={thread.id}
            user={thread.user}
            posted_at={thread.posted_at}
            content={thread.content}
            image={thread.image}
            likes={thread.likes}
            reply={thread.reply}
            isLiked={thread.isLiked}
            />
            )
          }

        <SearchDetail/>
        <Box>
          {reply?.map((reply: IReply, id:number) => {
            return (
              <RepliesCard
              key={id}
              id = {reply.id}
              content = {reply.content}
              image = {reply.image}
              posted_at={reply.posted_at}
              user= {reply.user}
              threads = {reply.threads}
              isLiked={reply.isLiked}
              />

            )
          })}
        </Box>
        

      </Flex>


      <Box position='sticky' alignSelf='flex-start' top={0} right={0}>
        <SideBarRight />
      </Box>
    </Flex>
  );
};

export default Detail;
