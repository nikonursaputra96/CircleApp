import { Avatar, Box, Button, Divider, Flex, Input, Textarea, } from '@chakra-ui/react'
import React from 'react'
import { LuImagePlus } from 'react-icons/lu'
import useThreads from '../../hooks/useThreads'

const SearchDetail = () :React.JSX.Element => {
    const { handleChange, handlePost, handleImageChange} = useThreads()
  return (
    
    <Box>
       

      <Flex color="white" mt="15px" px={6} >
        <Avatar mr={8} w="40px" h="40px" src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p3/26/2024/03/28/Luffy-One-Piece-Chapter-1112-1102863623.jpg" />
        <Textarea
          placeholder="Type your reply!"
          border="none"
          fontSize="20px"
          w="70vh"
          resize="none"
          sx={{
            "::placeholder": {
              color: "rgba(144, 144, 144, 1)",
            },
          }}
          minH="45px"
          onChange={handleChange}
          name="content"
        ></Textarea>

          <label htmlFor="imageUpload">

        <LuImagePlus
          size={24}
          color="white"
          style={{ marginTop: "5px" }}
          cursor='pointer'
        />
          </label>
          <Input id="imageUpload" type="file" accept="image/*" display='none' name="" onChange={handleImageChange} />

        <Button
        
          borderRadius="full"
          bg="rgba(4, 165, 30, 1)"
          color="white"
          fontSize="14px"
          w="63px"
          h="33px"
          ml="20px"
          onClick={handlePost}
        >
          Reply
        </Button>
      </Flex>

      <Divider borderBottom="1px solid rgba(144, 144, 144, .5)" mt={4} />


    </Box>
  )
}

export default SearchDetail