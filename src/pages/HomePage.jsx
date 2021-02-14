import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@chakra-ui/react"

import RestaurantCard from "../components/cards/RestaurantCard";
import { getRestaurant } from "../utils";

const StyledHomePage = styled.div`
  height: 781px;
  width: 100%;
  top: 120px;
  display: flex;
  flex-direction: column; 
  justify-content: center;

  .title {
    width: 626px;
    height: 120px;
    margin-left: 115px;
    margin-top: 40px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 80px;
    line-height: 94px;
    letter-spacing: 0.2em;
    color: #CC7B4E;
  }

  .content {
    width: 525px;
    height: 75px;
    margin-left: 137px;
    display: flex;
    flex-direction: column; 
    align-items: start;
  }
  .content p {
    font-family: Roboto;
    font-size: 25px;
    line-height: 37px;
    color: #6B6B6B;
  }

  .restaurant-session {
    width: 1029.84px;
    display: flex;
    margin-left: 137px;
    margin-top: 47px;
    justify-content: space-between;
  }

  .btn {
    width: 161px;
    height: 62px;
    left: 639px;
    top: 30px;
    background-color: #CC7B4E;
    border-radius: 5px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
  }

`

const HomePage = () => {
  const history = useHistory()
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

  return (
    <StyledHomePage>
      <h1 className="title">今天吃什麼？</h1>
      <div className="content">
        <p>逛街逛累了不知道要吃甚麼嗎？</p>
        <p>快來隨機選選你和朋友們的聚餐要去吃甚麼吧！</p>
      </div>
      <div className="restaurant-session">
        <RestaurantCard name="健康飲食" img="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <RestaurantCard name="義大利麵" img="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <RestaurantCard name="美式餐廳" img="https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <RestaurantCard name="亞洲料理" img="https://images.pexels.com/photos/1437590/pexels-photo-1437590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      </div>
      <Button
        variant="unstyled"
        _focus={{ border: 'none' }}
        className="btn"
        onClick={handleSubmit}
      >
        今天吃什麼
      </Button>
    </StyledHomePage>
  )
}

export default HomePage