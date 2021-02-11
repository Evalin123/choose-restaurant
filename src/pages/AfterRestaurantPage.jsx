import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  Button,
  Image,
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
} from "@chakra-ui/react";

const StyledAfterRestaurantPage = styled.div`
  top: 119px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .restaurant-name {
    margin-top: 65px;
    margin-right: 35%;
    font-family: Roboto;
    font-weight: bold;
    font-size: 25px;
    line-height: 29px;
    letter-spacing: 0.2em;
    color: #000000;
  }

  .restaurant-img-box {
    width: 634px;
    height: 475.5px;
    margin-top: 12px;
    border-radius: 5px;
  }
  .restaurant-img {
    width: 634px;
    height: 475.5px;
    object-fit: cover;
  }

  .btn-group {
    margin-top: 31.5px;
    width: 630px;
    display: flex;
    justify-content: space-between;
  }
  .finished-btn {
    width: 170px;
    height: 62px;
    background: #FFFFFF;
    border: 3px solid #CC7B4E;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #CC7B4E;
  }

  .btn-group Button.black-list-btn {
    width: 170px;
    height: 62px;
    background: #CC7B4E;
    color: #FFFFFF;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
  }

`

const AfterRestaurantPage = () => {
  const history = useHistory()
  const { onOpen, onClose, isOpen } = useDisclosure()
  return (
    <StyledAfterRestaurantPage>
      <p className="restaurant-name">
        餐廳名稱
      </p>
      <Box className="restaurant-img-box">
        <Image className="restaurant-img" src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Restaurant Img" />
      </Box>
      <div className="btn-group">
        <Button
          variant="unstyled"
          className="finished-btn"
          onClick={() => { history.push('/') }}
          _focus={{ border: "none" }}
        >
          吃完了
        </Button>
        <Button
          variant="unstyled"
          onClick={onOpen}
          className="black-list-btn"
          _focus={{ border: "none" }}
        >
          加入黑名單
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent w={634} h={476}>
            <Image bg='#000' opacity={0.3} h={151} src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Food Img" />
            <ModalCloseButton
              borderRadius={50}
              bg='#000'
              color='#fff'
              variant="unstyled"
              _focus={{ border: "none" }}
            />
            <ModalBody w={495} h={34} mt={105} ml={10}>
              <Text fontSize={20} fontFamily="Roboto">確定要把 <b>餐廳名稱</b> 加入黑名單嗎？</Text>
            </ModalBody>
            <ModalFooter w={380} ml={10} mb={30} display="flex" alignItems="center" justifyContent="space-between">
              <Button
                h={62}
                w={150}
                bg='#CC7B4E'
                color='#fff'
                onClick={onClose}
                variant="unstyled"
                _focus={{ border: "none" }}
              >
                加入黑名單
              </Button>
              <Button
                h={62}
                w={150}
                bg='#CC7B4E'
                color='#fff'
                onClick={onClose}
                variant="unstyled"
                _focus={{ border: "none" }}
              >
                算了，先不要
            </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </StyledAfterRestaurantPage>
  )
}

export default AfterRestaurantPage