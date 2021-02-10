import React from "react";
import styled from "styled-components";
import {
  Button,
  Image,
  Box,
} from "@chakra-ui/react";

import RestaurantModel from "../components/overlays/RestaurantModel"

const StyledRestaurantPage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 119px;

  .restaurant-name { 
    margin-top: 65px;
    left: 403px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 25px;
    line-height: 29px;
    letter-spacing: 0.2em;
    color: #000000;

  }

  .restaurant-box {
    width: 634px;
    height: 475.5px;
    left: 403px;
    margin-top: 12px;
    border-radius: 5px;
  }

  .restaurant-img {
    width: 634px;
    height: 475.5px;
    object-fit: cover;
  }

  .view-more {
    position: absolute;
    width: 64px;
    height: 19px;
    left: 65%;
    top: 670px;
    z-index: 3;
  }
  .view-more Button {
    color: #FFFFFF;
  }

  .change-btn {
    margin-top: 10.5px;
    left: 17.5%;
    width: 129px;
    height: 62px;
    background: #131313;
    border-radius: 5px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
  }

  .modalbody-p {
    margin-bottom: 10px;
  }

`

const RestaurantPage = () => {
  return (
    <StyledRestaurantPage>
      <p className="restaurant-name">
        餐廳
      </p>
      <Box className="restaurant-box" overflow="hidden">
        <Image className="restaurant-img" src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Food Img" />
        <div className="view-more">
          <RestaurantModel />
        </div>
      </Box>
      <Button className="change-btn">
        換別家
      </Button>
    </StyledRestaurantPage>
  )
}

export default RestaurantPage