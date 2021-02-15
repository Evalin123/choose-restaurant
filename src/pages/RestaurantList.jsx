import React, { useEffect, useState } from "react";
import styled from "styled-components";

import RestaurantListModel from "../components/overlays/RestaurantListModel";
import { getEatenRestaurant } from "../utils";

const StyledRestaurantList = styled.div`
  width: 100%;
  height: 100%
  top: 120px;
  display: flex;
  flex-direction: column;
  padding-right: 260px;

  h2 {
    width: 480px;
    height: 50px;
    margin-top: 65px;
    margin-left: 150px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 25px;
    line-height: 37px;
    letter-spacing: 0.2em;
  }

  .description {
    width: 480px;
    height: 30px;
    margin-left: 150px;
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    line-height: 37px;
    letter-spacing: 0.2em;
    color: #696969;
  }

  .restaurant-list {
    width: 100%;
    height: 100%
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 100px;
    line-height: 5%;
  }
`

const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    getEatenRestaurant()
      .then(res => {
        setRestaurantList(res)
        return res;
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <StyledRestaurantList>
      <h2 align="left">會再二訪</h2>
      <p align="left" className="description">下次還有機會抽到！</p>
      <div align="left" className="restaurant-list">
        {
          restaurantList.map((restaurant, index) => {
            return (
              <RestaurantListModel key={index} id={restaurant.fields.Restaurants[0]} />
            )
          })
        }
      </div>
    </StyledRestaurantList>
  )
}

export default RestaurantList