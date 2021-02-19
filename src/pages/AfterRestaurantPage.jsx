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
    width: 100%;
    border-radius: 5px;
    display: flex;
  }

  .restaurant-img {
    width: 70%;
    height: 480px;
    object-fit: cover;
  }

  .restaurant-info-box {
    width: 30%;
    padding-left: 10px;
    border-radius: 5px;
    background: #ECECEC;
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    width: 100%;
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
    width: 100%;
  }
  p {
    width: 100%;
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

  .black-list-btn {
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

  @media (max-width: 480px) {
    .container {
      padding-top: 50px;
    }

    .restaurant-box {
      width: 350px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
    }
    .restaurant-img {
      height: 250px;
      width: 100%;
      object-fit: cover;
    }

    .restaurant-info-box {
      height: 250px;
      width: 100%;
    }

    h2 {
      font-size: 16px;
      line-height: 19px;
    }

    p {
      font-size: 12px;
      line-height: 24px;
    }

    .illustration {
      font-size: 10px;
      line-height: 15px;
      margin-top: 40px;
    }

    .black-list-btn {
      width: 144px;
    }

    .finished-btn {
      width: 144px;
    }

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
        <Box className="restaurant-box">
          <Image className="restaurant-img" src={restaurant.Image} alt="Restaurant Img" />
          <Box className="restaurant-info-box" >
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
            <ModalContent
              width={{ lg: "710px", base: "292px" }}
              height={{ lg: "480px", base: "600px" }}
            >
              <Image
                bg='#000'
                opacity={0.3}
                height={{ lg: "150px", base: "200px" }}
                objectFit='cover'
                src={restaurant.Image}
                alt="Food Img"
              />
              <ModalCloseButton
                borderRadius={50}
                bg='#000'
                color='#fff'
                variant="unstyled"
                _focus={{ border: "none" }}
              />
              <ModalBody
                height={{ lg: "324px", base: "340px" }}
                display="flex"
                flexDir={{ lg: "row", base: "column" }}
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize={20} fontFamily="Roboto">確定要把&nbsp;</Text>
                <Text color='#CC7B4E' fontSize={20}>{restaurant.Name}</Text>
                <Text fontSize={20}>&nbsp;加入黑名單嗎？</Text>
              </ModalBody>
              <ModalFooter
                display="flex"
                flexDir={{ lg: "row", base: "column" }}
                alignItems="center"
                justifyContent="space-between"
              >
                <Button
                  h={62}
                  width={{ lg: "150px", base: "144px" }}
                  border='3px solid #CC7B4E'
                  bg='fff'
                  color='#CC7B4E'
                  onClick={() => { handleBlackList(review) }}
                  variant="unstyled"
                  _focus={{ border: "none" }}
                >
                  加入黑名單
                </Button>
                <Button
                  h={62}
                  width={{ lg: "150px", base: "144px" }}
                  bg='#CC7B4E'
                  mt={{ lg: "0px", base: "20px" }}
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