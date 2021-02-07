import React from "react";
import {
  Box,
  Image,
} from "@chakra-ui/react"
import styled from "styled-components";

const StyledRestaurantCard = styled(Box)`
  width: 238.71px;
  height: 290px;

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
    font-family: Roboto;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
  }
`

const RestaurantCard = ({ name, img }) => {
  return (
    <StyledRestaurantCard overflow="hidden">
      <Image className="restaurant-img" src={img} alt="Food Img" />
      <Box className="restaurant-info">
        <p className="restaurant-title">
          {name}
        </p>
      </Box>
    </StyledRestaurantCard>
  )
}

export default RestaurantCard