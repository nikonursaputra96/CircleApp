import { Flex } from "@chakra-ui/react"
import SideBarProfile from "./SR_Profile" 
import SideBarSuggested from "./SR_Suggested" 
import SideBarFooter from "./SR_Footer" 

const SideBarRight = () :React.JSX.Element => {
 


    return (
        <Flex w='540px' bg="rgba(63, 63, 63, 1)" flexDirection="column" pb={50}>
            <SideBarProfile/>
            <SideBarSuggested/>
            <SideBarFooter/>
        </Flex>
    )
}

export default SideBarRight