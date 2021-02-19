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
  width: 224px;
  height: 300px;
  margin-right: 20px;

  .restaurant-img {
    width: 224px;
    height: 240px;
    object-fit: cover;
  }

  .restaurant-info {
    width: 224px;
    height: 60px;
    background-color: #E5E5E5;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .restaurant-title {
    font-family: Roboto;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #131313;
  }

  @media (max-width: 480px) {
    .button {
      width: 224px;
      height: 300px;
    }
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
        className="button"
        onClick={onOpen}
        variant="unstyled"
        h={296}
        w={238.71}
        ml={30}
        mt={50}
        _focus={{ border: "none" }}
      >
        <StyledBox>
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
        <ModalContent
          width={{ lg: "710px", base: "292px" }}
          height={{ lg: "480px", base: "560px" }}
        >
          <Box height={{ lg: "150px", base: "200px" }}>
            <Image
              objectFit="cover"
              filter="contrast(25%)"
              height={{ lg: "150px", base: "200px" }}
              w='100%'
              src={restaurant.Image}
              alt="Food Img"
            />
          </Box>
          <ModalCloseButton borderRadius={50} bg='#000' color='#FFF' _focus={{ border: "none" }} />
          <Box
            height={{ lg: "450px", base: "340px" }}
            pl="10%"
            pr="10%"
            pt={30}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <ModalHeader align="left" w='100%'>
              {restaurant.Name}
            </ModalHeader>
            <ModalBody w='100%' >
              <Box>
                <Text h={23} fontSize={14} fontFamily="Roboto">地址 / {restaurant.Location}</Text>
                <Text h={23} fontSize={14} fontFamily="Roboto">電話 / {restaurant.TEL}</Text>
                <Text h={23} fontSize={14} fontFamily="Roboto">價位 / {restaurant.Price}</Text>
                <Text h={23} fontSize={14} fontFamily="Roboto">營業時間 / {restaurant.BusinessHours}</Text>
              </Box>
              <Text h={23} w='100%' pt={50} fontSize={12} fontFamily="Roboto" color='#717A65' >本資訊僅供參考，請以現場營業時間、訂位狀況為主</Text>
            </ModalBody>
          </Box>
        </ModalContent>
      </Modal>
    </>
  )
}

export default RestaurantListModel