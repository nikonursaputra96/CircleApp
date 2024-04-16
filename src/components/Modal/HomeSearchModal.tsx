import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
} from "@chakra-ui/react";
import {
  Avatar,
  Button,
  Divider,
  FormControl,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";
import useThreads from "../../hooks/useThreads";


const HomeSearchModal = ({ isOpen,onClose,}: {isOpen: boolean; onClose: () => void;}): React.JSX.Element => {

  const { handleChange, handlePost, handleImageChange } = useThreads();



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handlePost(e);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent bg={"rgba(63, 63, 63, 1)"}>
        <ModalHeader></ModalHeader>
        <ModalCloseButton color={"white"} size={"sm"} />
        <ModalBody>
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <FormControl color="white"  >
              <Flex mb={10}>
                <Avatar  w="40px" h="40px" />
                <Textarea
                  placeholder="What's Happening ?!"
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
              </Flex>
              <Divider
                borderBottom="1px solid rgba(144, 144, 144, .5)"
                mt={4}
              />

              <Flex mt={5} pb={5} justifyContent={"space-between"}>
                <label htmlFor="imageUpload">
                  <LuImagePlus
                    size={24}
                    color="rgba(4, 165, 30, 1)"
                    style={{ marginTop: "5px" }}
                    cursor="pointer"
                  />
                </label>
                <Input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  display="none"
                  name=""
                  onChange={handleImageChange}
                />

                <Button
                  borderRadius="full"
                  bg="rgba(4, 165, 30, 1)"
                  color="white"
                  fontSize="14px"
                  w="63px"
                  h="33px"
                  ml="20px"
                  type="submit"
                >
                  Post
                </Button>
              </Flex>
            </FormControl>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default HomeSearchModal;
