import {
  Box,
  Text,
} from "@chakra-ui/react";

import HomeCard from "../../features/HomeCard";
import { useEffect} from "react"
import useThreads from "../../hooks/useThreads";
import { IThread } from "../../interfaces/Card";
import HomeSearch from "./HomeSearch";


 

const HomeCenter = () :React.JSX.Element => {

    const {threads, getThreadsAndUser, } = useThreads()

 

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
    
    <HomeSearch/>
  
    
    {threads && threads?.map((data: IThread, id:number) => {
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
