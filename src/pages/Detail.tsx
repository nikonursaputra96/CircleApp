import { Flex, Box, Text, Spinner } from "@chakra-ui/react";

import { useNavigate, useParams } from "react-router-dom";
import useThreads from "../hooks/useThreads";
import { useEffect } from "react";
import { IReply, IThread } from "../interfaces/Card";
import { FaArrowLeftLong } from "react-icons/fa6";
import SearchDetail from "../components/Home/SearchDetail";
import RepliesCard from "../components/Replies/RepliesCard";
import useReply from "../hooks/useReply";
import StatusCard from "../features/StatusCard";

const Detail = (): React.JSX.Element => {

  const navigate = useNavigate()


  const { id } = useParams();
  const {  getThreads, isLoading } = useThreads();
  const thread = getThreads?.find((thread:IThread) => thread.id === Number(id));

  const { reply, getReply } = useReply(Number(id));


  
  useEffect(() => {
    getReply(Number(id))
  }, [id]);

  return (
    <Flex>
     
      <Flex position='relative'  ml={[0,390]}
        w={748}
        bg="rgba(63, 63, 63, 1)"
        borderRight="2px solid rgba(144, 144, 144, .5)"
        borderLeft="1px solid rgba(144, 144, 144, .5)"
        flexDirection={"column"}
      >
      <Box color="rgba(255, 255, 255, 1)" fontSize={28}  mt={45} >
        <Flex alignItems={"center"} ml={8} cursor={"pointer"} onClick={() => navigate("/")}>
        <FaArrowLeftLong  />
        <Text ml={3}> Status</Text> 
        </Flex>
      </Box>

        {!isLoading ? thread && 
           (
            <StatusCard
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
            ) : (
              <Spinner
                position={"absolute"}
                top="50%"
                left="50%"
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="rgba(4, 165, 30, 1)"
                size="xl"
              />
            )
          }

        <SearchDetail threadId = {Number(id)}/>

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

    </Flex>
  );
};

export default Detail;
