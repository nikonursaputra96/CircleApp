
import useThreads from "../../hooks/useThreads"
import {  Flex, Image, Spinner } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { RootState } from "../../stores/types/rootState"



const ProfileMedia = ():React.JSX.Element => {
    const {getThreads, isLoading} = useThreads()

    const { id } = useSelector((state: RootState) => state.auth);
    const filteredThreads = getThreads?.filter((thread: any) => thread.user?.id === id)

  
    
    return (
        <Flex mt={1}  mb={50}>
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

            <Flex key={id} flexWrap={"wrap"} mt={2} px={3}>
                <Image  src={thread.image}  h={"130px"}/>

            </Flex>

            
            ))}

        </Flex>
    )
}

export default ProfileMedia