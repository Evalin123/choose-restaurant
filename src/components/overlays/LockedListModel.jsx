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
import LockImg from "../images/lock.svg";
import { getRestaurantDetail } from "../../utils";

const StyledBox = styled(Box)`
  width: 238.71px;
  height: 296px;

  .img-group {
    width: 238.71px;
    height: 238.71px;
    position: relative;
  }

  .restaurant-img {
    width: 238.71px;
    height: 238.71px;
    object-fit: cover;
    filter: contrast(20%);
    z-index: -1;
    position: absolute;
  }

  .black-bg {
    width: 238.71px;
    height: 238.71px;
    background-color: #000;
    opacity:0.5;
    z-index: 0;
    position: absolute;
  }

  .lock-img {
    width: 55px;
    height: 90px;
    margin-top: 82px;
    margin-left: 92px;
    z-index: 1;
    position: absolute;
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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [restaurant, setResaturant] = useState({
    Location: "",
    Price: "",
    Image: ""
  });
  useEffect(() => {
    getRestaurantDetail(id)
      .then(res => {
        setResaturant({
          Location: res.Location,
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
          <div className="img-group">
            <Image className="restaurant-img" src={restaurant.Image} alt="Food Img" />
            <div className="black-bg" />
            <Image className="lock-img" src={LockImg} alt="Lock Img" />
          </div>
          <Box className="restaurant-info">
            <p className="restaurant-title">
              ?
            </p>
          </Box>
        </StyledBox>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h={400} w={634}>
          <Image
            objectFit="cover"
            filter="contrast(15%)"
            h={151}
            w={634}
            src={restaurant.Image}
            alt="Food Img"
          />
          <ModalHeader w={350}>
            想吃的話，等著你們來探索！
          </ModalHeader>
          <ModalCloseButton borderRadius={50} bg='#000' color='#fff' _focus={{ border: "none" }} />
          <ModalBody w={420} h={200}>
            <Text h={23} mb={15} fontSize={20} fontFamily="Roboto">地址 / {restaurant.Location}</Text>
            <Text h={23} mb={15} fontSize={20} fontFamily="Roboto">價位 / {restaurant.Price}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default RestaurantListModel