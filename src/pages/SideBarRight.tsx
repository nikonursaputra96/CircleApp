import { Flex } from "@chakra-ui/react"
import SideBarProfile from "../components/SideBarRight/SR_Profile" 
import SideBarSuggested from "../components/SideBarRight/SR_Suggested" 
import SideBarFooter from "../components/SideBarRight/SR_Footer" 


const SideBarRight = () :React.JSX.Element => {


    return (
        <Flex w='540px' bg="rgba(63, 63, 63, 1)" flexDirection="column" pb={"50px"} >
            <SideBarProfile/>
            <SideBarSuggested/>
            <SideBarFooter/>
        </Flex>
    )
}

export default SideBarRight