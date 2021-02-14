import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  Button,
  Image,
  Box,
} from "@chakra-ui/react";

import RestaurantModel from "../components/overlays/RestaurantModel"
import { getRestaurant, getRestaurantDetail } from "../utils";

const StyledRestaurantPage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  top: 119px;

  .restaurant-name { 
    width: 200px;
    height: 32px;
    margin-top: 65px;
    margin-left: 403px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 29px;
    letter-spacing: 0.2em;
    color: #CC7B4E;
  }

  .restaurant-box {
    width: 634px;
    height: 475.5px;
    margin-left: 403px;
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
    margin-left: 908px;
    width: 129px;
    height: 62px;
    background: #CC7B4E;
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
  console.log(restaurant);
  return (
    <StyledRestaurantPage>
      <p align="left" className="restaurant-name">
        {restaurant.Name}
      </p>
      <Box className="restaurant-box" overflow="hidden">
        <Image className="restaurant-img" src={restaurant.Image} alt="Food Img" />
        <div className="view-more">
          <RestaurantModel
            name={restaurant.Name}
            location={restaurant.Location}
            price={restaurant.Price}
            tel={restaurant.TEL}
            businessHours={restaurant.BusinessHours}
            img={restaurant.Image}
            id={id}
          />
        </div>
      </Box>
      <Button variant="unstyled" _focus={{ border: 'none' }} className="change-btn" onClick={handleSubmit}>
        換別家
      </Button>
    </StyledRestaurantPage>
  )
}

export default RestaurantPage