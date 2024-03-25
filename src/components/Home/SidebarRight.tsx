import { Box, Flex, Text, Avatar, Button, Image } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";

const SidebarRight = () => {
  const [follow, setFollow] = useState<boolean>(false);
  const toggleFollow = () => {
    setFollow(!follow);
  };

  return (
    <Flex w="563px" bg="rgba(63, 63, 63, 1)" flexDirection="column">
      <Box
        w="483px"
        h="361px"
        bg="rgba(38, 38, 38, .3)"
        borderRadius="xl"
        mx="auto"
        mt={50}
        px={6}
        py={5}
      >
        <Text color="white" fontSize="20px" fontWeight="bold">
          My Profile
        </Text>

        <Box w="435px" h="100px" bg="grey" borderRadius="lg" mt={3}>
          <Avatar w="80px" h="80px" mt={62} ml={25} border="3px solid black" />
        </Box>

        <Flex justifyContent="flex-end" mt={3}>
          <Button
            color="white"
            fontSize="14px"
            textAlign="center"
            borderRadius="full"
            border="2px solid white"
            bg="none"
            w="106px"
            h="33px"
          >
            Edit Profile
          </Button>
        </Flex>

        <Box>
          <Text fontSize="24px" mt={1} color="white" fontWeight="bold">
            ✨Niko Nur Saputra✨
          </Text>
          <Text fontSize="14px" mt={1} color="rgba(144, 144, 144, 1)">
            @nikonursaputra
          </Text>
          <Text fontSize="16px" mt={1} color="white">
            Here we go again !
          </Text>
        </Box>

        <Flex gap={1} fontSize="16px" mt={2}>
          <Text color="white" fontWeight="bold">
            291
          </Text>
          <Text color="rgba(144, 144, 144, 1)">Following</Text>
          <Text color="white" fontWeight="bold" ml={3}>
            291
          </Text>
          <Text color="rgba(144, 144, 144, 1)">Followers</Text>
        </Flex>
      </Box>

      <Box
        w="483px"
        bg="rgba(38, 38, 38, .3)"
        borderRadius="xl"
        mx="auto"
        px={6}
        py={5}
        mt={3}
      >
        <Text fontSize="20px" color="white" fontWeight="bold">
          Suggested for you
        </Text>
        <Flex justifyContent="space-between" alignItems="center" mt={3}>
          <Flex alignItems="center">
            <Avatar />
            <Box ml={2}>
              <Text fontSize="20px" color="white" fontWeight="bold">
                This is Sparta
              </Text>
              <Text fontSize="14px" color="rgba(144, 144, 144, 1)">
                @thisissparta
              </Text>
            </Box>
          </Flex>
          <div onClick={toggleFollow}>
            {follow ? (
              <Button
                color="white"
                fontSize="14px"
                textAlign="center"
                borderRadius="full"
                border="2px solid white"
                bg="none"
                w="106px"
                h="33px"
                opacity={0.4}
              >
                Following
              </Button>
            ) : (
              <Button
                color="white"
                fontSize="14px"
                textAlign="center"
                borderRadius="full"
                border="2px solid white"
                bg="none"
                w="106px"
                h="33px"
              >
                Follow
              </Button>
            )}
          </div>
        </Flex>

        {/*  */}
        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Flex alignItems="center">
            <Avatar />
            <Box ml={2}>
              <Text fontSize="20px" color="white" fontWeight="bold">
                Sparta
              </Text>
              <Text fontSize="14px" color="rgba(144, 144, 144, 1)">
                @sparta
              </Text>
            </Box>
          </Flex>

          <Button
            color="white"
            fontSize="14px"
            textAlign="center"
            borderRadius="full"
            border="2px solid white"
            bg="none"
            w="106px"
            h="33px"
          >
            Follow
          </Button>
        </Flex>

        {/*  */}
      </Box>

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
    </Flex>
  );
};

export default SidebarRight;
