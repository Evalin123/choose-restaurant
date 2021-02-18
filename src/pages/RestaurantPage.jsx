import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  Button,
  Image,
  Box,
} from "@chakra-ui/react";

import Container from "../components/common/Container"
import { getRestaurant, getRestaurantDetail } from "../utils";

const StyledRestaurantPage = styled.div`
  height: 100%;
  width: 100%;
  top: 120px;

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

  .change-btn {
    width: 200px;
    height: 62px;
    background-color: #FFFFFF;
    border: 3px solid #CC7B4E;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #CC7B4E;
  }

  .decided-btn {
    width: 200px;
    height: 62px;
    background-color: #CC7B4E;
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
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

    .change-btn {
      width: 144px;
    }

    .decided-btn {
      width: 144px;
    }

  }

`

const RestaurantPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [restaurant, setResaturant] = useState({
    Name: "",
    Location: "",
    TEL: "",
    BusinessHours: "",
    Price: "",
    Image: ""
  })
  const handleSubmit = () => {
    getRestaurant()
      .then(res => {
        history.push(`/restaurant/${res}`)
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
    <StyledRestaurantPage>
      <Container className="container">
        <Box className="restaurant-box" overflow="hidden">
          <Image className="restaurant-img" src={restaurant.Image} alt="Food Img" />
          <Box className="restaurant-info-box" >
            <h2 align='left'>{restaurant.Name}</h2>
            <div className="restaurant-info">
              <p align="left">地址 /{restaurant.Location}</p>
              <p align='left'>電話 /{restaurant.TEL}</p>
              <p align='left'>價位 /{restaurant.Price}</p>
              <p align='left'>營業時間/{restaurant.BusinessHours}</p>
            </div>
            <p align='left' className="illustration">圖片取自官網。<br />本資訊僅供參考，請以現場營業時間、訂位狀況為主。</p>
          </Box>
        </Box>
        <div className="btn-group">
          <Button variant="unstyled" _focus={{ border: 'none' }} className="change-btn" onClick={handleSubmit}>
            換別家
          </Button>
          <Button
            variant="unstyled"
            _focus={{ border: 'none' }}
            className="decided-btn"
            onClick={() => {
              history.push(`/restaurant/${id}/after`)
            }}
          >
            就決定是你了
          </Button>
        </div>
      </Container>
    </StyledRestaurantPage>
  )
}

export default RestaurantPage