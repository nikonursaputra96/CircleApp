import { Flex, } from "@chakra-ui/react"
import HomeCenter from "../components/Home/HomeCenter"




const Home = () :React.JSX.Element => {

        // const auth = useSelector((state: RootState) => state.auth)
      
  

    return (
            <Flex position='relative' justify='center' ml={[0,390]}>
            <HomeCenter />
            </Flex>
    )
}

export default Home