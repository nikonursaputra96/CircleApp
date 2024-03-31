import { Box, Flex, Text, Image} from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SideBarFooter = () :React.JSX.Element => {
    return (
        <Box
        w="483px"
        bg="rgba(38, 38, 38, .3)"
        borderRadius="xl"
        mx="auto"
        px={6}
        py={5}
        mt={3}
      >
        <Flex color="rgba(178, 178, 178, 1)" gap={2} alignItems="center">
          <Text fontSize="16px" color="white">
            Developed By
          </Text>
          <Text fontWeight="bold" color="white">
            Niko Nur Saputra
          </Text>
          <Text>•</Text>
          <FaGithub size={20} />
          <FaLinkedin size={20} />
          <FaFacebook size={20} />
          <FaInstagram size={20} />
        </Flex>

        <Flex color="rgba(178, 178, 178, 1)" gap={2} alignItems="center" mt={1}>
          <Text fontSize="14px">Powered by</Text>
          <Image src="./src/assets/img/logodumbways.png" w="24px" h="12px" />
          <Text fontSize="14px">Dumbways Indonesia</Text>
          <Text>•</Text>
          <Text fontSize="14px">#1 Coding Bootcamp</Text>
        </Flex>
      </Box>
    )
}

export default SideBarFooter