import { Flex } from "@chakra-ui/react"
import HomeCenter from "../components/Home/HomeCenter"
import SidebarLeft from "../components/Home/SidebarLeft"
import SidebarRight from "../components/Home/SidebarRight"


const Home = () => {

  

    return (
        <Flex>
            <SidebarLeft/>
            <HomeCenter />
            <SidebarRight/>
        </Flex>
    )
}

export default Home