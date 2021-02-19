import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
} from "@chakra-ui/react";
import styled from "styled-components";
import LockImg from "../images/lock.svg";
import { getRestaurantDetail } from "../../utils";

const StyledLockedCard = styled(Box)`
  width: 224px;
  height: 300px;
  margin-right: 40px;
  margin-bottom: 40px;

  .img-seccion {
    width: 224px;
    height: 240px;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .restaurant-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1;
    background-color: #000;
  }

  .lock-img {
    width: 40%;
    height: 40%;
    position: absolute;
    vertical-align: middle;
    z-index: 1;
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
  }

  @media (max-width: 480px) {
    width: 224px;
    height: 300px;
    margin-bottom: 20px;
    margin-right: 0px;
  }
`

const LockedListModel = ({ id }) => {
  const [restaurant, setResaturant] = useState({
    Image: "",
    Name: ""
  });
  const getNameQueMark = (name) => {
    const nameLength = name.length;
    let questionMark = ""
    for (let i = 0; i < nameLength; i++) {
      questionMark = questionMark + "*"
    };
    return questionMark;
  }

  useEffect(() => {
    getRestaurantDetail(id)
      .then(res => {
        const NameQueMark = getNameQueMark(res.Name);
        setResaturant({
          Image: res.Image,
          Name: NameQueMark
        })
      })
  }, [id])
  return (
    <StyledLockedCard>
      <Box className="img-seccion">
        <Image className="restaurant-img" src={restaurant.Image} alt="Food Img" />
        <Image className="lock-img" src={LockImg} alt="Lock Img" />
      </Box>
      <Box className="restaurant-info">
        <p className="restaurant-title">
          {restaurant.Name}
        </p>
      </Box>
    </StyledLockedCard >
  )
}

export default LockedListModel