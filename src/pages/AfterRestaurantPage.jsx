import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
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
import { getRestaurantDetail, isEaten } from "../utils";

import Container from "../components/common/Container";

const StyledAfterRestaurantPage = styled.div`
  top: 120px;
  width: 100%;
  height: 100%;

  .container {
    padding-top: 100px;
  }

  .restaurant-box {
    border-radius: 5px;
    display: flex;
  }

  .restaurant-img {
    height: 480px;
    object-fit: cover;
  }

  .restaurant-info-box {
    border-radius: 5px;
    background: #ECECEC;
    padding-top: 24px;
  }

  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.2em;
    color: #CC7B4E;
  }

  .restaurant-info {
    margin-top: 40px;
  }
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 28px;
    color: #131313;
  }
  .illustration {
    margin-top: 200px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 21px;
    color: #717A65;
  }

  .btn-group {
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .finished-btn {
    width: 200px;
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
    width: 200px;
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
  const { id } = useParams();
  const [restaurant, setResaturant] = useState({
    Name: "",
    Location: "",
    TEL: "",
    BusinessHours: "",
    Price: "",
    Image: ""
  })
  const [review, setReview] = useState({
    ReviewNumber: "0001",
    IsBlackList: "false",
    Users: [localStorage.getItem("UserId")],
    Restaurants: [id],
  })
  const handleSubmit = (review) => {
    isEaten(review)
      .then(res => {
        history.push('/');
        return res;
      })
      .catch(err => {
        console.log(err);
      })
  }
  const handleBlackList = (review) => {
    let afterReview = {
      ...review,
      IsBlackList: "true",
    }
    setReview(afterReview)
    isEaten(afterReview)
      .then(res => {
        history.push('/');
        return res;
      })
      .catch(err => {
        console.log(err);
      })
  }

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
    <StyledAfterRestaurantPage>
      <Container className="container">
        <Box className="restaurant-box row">
          <Image className="restaurant-img col-9" src={restaurant.Image} alt="Restaurant Img" />
          <Box className="restaurant-info-box col-3" >
            <h2>{restaurant.Name}</h2>
            <div className="restaurant-info">
              <p>地址 /{restaurant.Location}</p>
              <p>電話 /{restaurant.TEL}</p>
              <p>價位 /{restaurant.Price}</p>
              <p>營業時間/{restaurant.BusinessHours}</p>
            </div>
            <p className="illustration">圖片取自官網。<br />本資訊僅供參考，請以現場營業時間、訂位狀況為主。</p>
          </Box>
        </Box>
        <div className="btn-group">
          <Button
            variant="unstyled"
            onClick={onOpen}
            className="black-list-btn"
            _focus={{ border: "none" }}
          >
            加入黑名單
          </Button>
          <Button
            variant="unstyled"
            className="finished-btn"
            onClick={() => { handleSubmit(review) }}
            _focus={{ border: "none" }}
          >
            會再二訪
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent w={634} h={476}>
              <Image bg='#000' opacity={0.3} h={151} src={restaurant.Image} alt="Food Img" />
              <ModalCloseButton
                borderRadius={50}
                bg='#000'
                color='#fff'
                variant="unstyled"
                _focus={{ border: "none" }}
              />
              <ModalBody w={495} h={34} mt={105} ml={10}>
                <Text fontSize={20} fontFamily="Roboto">確定要把 <b>{restaurant.Name}</b> 加入黑名單嗎？</Text>
              </ModalBody>
              <ModalFooter w={380} ml={10} mb={30} display="flex" alignItems="center" justifyContent="space-between">
                <Button
                  h={62}
                  w={150}
                  bg='#CC7B4E'
                  color='#fff'
                  onClick={() => { handleBlackList(review) }}
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
      </Container>
    </StyledAfterRestaurantPage>
  )
}

export default AfterRestaurantPage