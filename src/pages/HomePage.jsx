import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@chakra-ui/react"

import RestaurantCard from "../components/cards/RestaurantCard";
import Container from "../components/common/Container";
import { getRestaurant } from "../utils";

const StyledHomePage = styled.div`
  height: 100%;
  width: 100%;
  top: 120px;

  .container {
    padding-top: 60px;
  }

  .title {
    width: 100%;
    height: 90px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 80px;
    line-height: 94px;
    letter-spacing: 0.2em;
    color: #CC7B4E;
  }

  .content {
    width: 100%;
    height: 90px;
    margin-top: 20px;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
  }
  .content p {
    font-family: Roboto;
    font-size: 20px;
    line-height: 37px;
    color: #6B6B6B;
  }

  .restaurant-session {
    width: 100%;
    height: 300px;
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row; 
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .btn {
    width: 224px;
    height: 62px;
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
      <Container className="container">
        <h1 className="title" align="center">今天吃什麼？</h1>
        <div className="content">
          <p>逛街逛累了不知道要吃甚麼嗎？</p>
          <p>快來隨機選選你和朋友們的聚餐要去吃甚麼吧！</p>
        </div>
        <div className="restaurant-session">
          <RestaurantCard name="健康飲食" img="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <RestaurantCard name="義大利麵" img="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <RestaurantCard name="美式餐廳" img="https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <RestaurantCard mr={-20} name="亞洲料理" img="https://images.pexels.com/photos/1437590/pexels-photo-1437590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
        <Button
          variant="unstyled"
          _focus={{ border: 'none' }}
          className="btn"
          onClick={handleSubmit}
        >
          今天吃什麼
        </Button>
      </Container>
    </StyledHomePage>
  )
}

export default HomePage