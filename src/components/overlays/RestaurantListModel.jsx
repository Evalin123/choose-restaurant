import React, { useEffect, useState } from "react";
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
import { getRestaurantDetail } from "../../utils";

const StyledBox = styled(Box)`
  width: 238.71px;
  height: 296px;

  .restaurant-img {
    width: 238.71px;
    height: 238.71px;
    object-fit: cover;
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

const RestaurantListModel = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [restaurant, setResaturant] = useState({
    Name: "",
    Location: "",
    TEL: "",
    BusinessHours: "",
    Price: "",
    Image: ""
  });
  useEffect(() => {
    getRestaurantDetail(id)
      .then(res => {
        setResaturant({
          Name: res.Name,
          Location: res.Location,
          TEL: res.TEL,
          BusinessHours: res.BusinessHours,
          Price: res.Price,
          Image: res.Image
        })
      })
  }, [id])

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
        <StyledBox boxShadow="lg">
          <Image className="restaurant-img" src={restaurant.Image} alt="Food Img" />
          <Box className="restaurant-info">
            <p className="restaurant-title">
              {restaurant.Name}
            </p>
          </Box>
        </StyledBox>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div h={151} w={634}>
            <Image objectFit="cover" filter="contrast(25%)" h={151} w={634} src={restaurant.Image} alt="Food Img" />
          </div>
          <ModalHeader w={200}>
            {restaurant.Name}
          </ModalHeader>
          <ModalCloseButton borderRadius={50} bg='#000' color='#FFF' _focus={{ border: "none" }} />
          <ModalBody w={420} h={200}>
            <Text h={23} mb={15} fontSize={20} fontFamily="Roboto">地址 / {restaurant.Location}</Text>
            <Text h={23} mb={15} fontSize={20} fontFamily="Roboto">電話 / {restaurant.TEL}</Text>
            <Text h={23} mb={15} fontSize={20} fontFamily="Roboto">價位 / {restaurant.Price}</Text>
            <Text h={23} mb={15} fontSize={20} fontFamily="Roboto">營業時間 / {restaurant.BusinessHours}</Text>
            <Text h={23} w={370} mb={15} fontSize={16} fontFamily="Roboto" color='#FFF' bg='#717A65'>本資訊僅供參考，請以現場營業時間、訂位狀況為主</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default RestaurantListModel