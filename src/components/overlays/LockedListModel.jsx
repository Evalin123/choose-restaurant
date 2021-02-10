import React from "react";
import {
  Box,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  Text
} from "@chakra-ui/react";
import styled from "styled-components";

const StyledBox = styled(Box)`
  width: 238.71px;
  height: 296px;

  .restaurant-img {
    width: 238.71px;
    height: 238.71px;
    object-fit: cover;
    filter: contrast(20%);
  }

  .restaurant-info {
    width: 238.71px;
    height: 57.29px;
    background-color: #E5E5E5;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .restaurant-title {
    width: 70.66px;
    height: 17.19px;
    font-family: Roboto;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #131313;
  }
`

const RestaurantListModel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        onClick={onOpen}
        variant="unstyled"
        h={296}
        w={238.71}
        ml={30}
        mt={50}
        _focus={{ border: "none" }}
      >
        <StyledBox>
          <Image className="restaurant-img" src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Food Img" />
          <Box className="restaurant-info">
            <p className="restaurant-title">
              ???
            </p>
          </Box>
        </StyledBox>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div h={151} w={634}>
            <Image objectFit="cover" filter="contrast(30%)" h={151} w={634} src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Food Img" />
          </div>
          <ModalHeader w={350}>
            想吃的話，等著你們來探索！
        </ModalHeader>
          <ModalCloseButton borderRadius={50} bg='#000' color='#fff' _focus={{ border: "none" }} />
          <ModalBody w={420} h={200}>
            <Text h={23} mb={15} fontSize={20} fontFamily="Roboto">地址 / 微風百貨 1F</Text>
            <Text h={23} mb={15} fontSize={20} fontFamily="Roboto">價位 / $$$</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default RestaurantListModel