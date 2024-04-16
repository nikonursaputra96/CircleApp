import { Flex } from "@chakra-ui/react"
import SidebarLeft from "../components/Home/SidebarLeft"
import SideBarSuggested from "../components/SideBarRight/SR_Suggested"
import SideBarFooter from "../components/SideBarRight/SR_Footer"

const ProfilePages = ({children,}:{children:React.ReactNode}) :React.JSX.Element => {
    return (
        <Flex>
        <Flex position="fixed" left={0} top={0} bottom={0}>
          <SidebarLeft />
        </Flex>
  
        {children}
  
        <Flex
          ml={35}
          flexDirection="column"
        >
            <SideBarSuggested />
            <SideBarFooter />
   
        </Flex>
      </Flex>
    )
}

export default ProfilePages