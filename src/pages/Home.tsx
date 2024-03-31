import { Flex, Box } from "@chakra-ui/react"
import HomeCenter from "../components/Home/HomeCenter"
import SidebarLeft from "../components/Home/SidebarLeft"
import SideBarRight from "../components/SideBarRight/SideBarRight"



const Home = () :React.JSX.Element => {

  

    return (
        <Flex>
            <Flex position='fixed' left={0} top={0} bottom={0}>
            <SidebarLeft/>
            </Flex>

            <Flex position='relative' justify='center' ml={[0,390]}>
            <HomeCenter />
            </Flex>

            <Box position='sticky' alignSelf='flex-start' top={0} right={0}>
            <SideBarRight/>
            </Box>
         
        </Flex>
    )
}

export default Home