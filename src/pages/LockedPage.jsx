import React, { useEffect, useState } from "react";
import styled from "styled-components";

import LockedListModel from "../components/overlays/LockedListModel";
import ListContainer from "../components/common/ListContainer";
import { getLockedList } from "../utils";

const StyledRestaurantList = styled.div`
  width: 100%;
  height: 100%
  top: 120px;

  h2 {
    width: 480px;
    height: 50px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 25px;
    line-height: 37px;
    letter-spacing: 0.2em;
  }

  .description {
    width: 480px;
    height: 30px;
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    line-height: 37px;
    letter-spacing: 0.2em;
    color: #696969;
  }

  .restaurant-list {
    width: 100%;
    height: 100%;
    margin-top: 5%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    line-height: 5%;
  }
`

const LockedPage = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    getLockedList()
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
      <ListContainer>
        <h2 align="center">未解鎖餐廳</h2>
        <p align="center" className="description">之後和朋友一起來造訪吧！</p>
        <div className="restaurant-list">
          {
            restaurantList.map((restaurantId, index) => {
              return (
                <LockedListModel key={index} id={restaurantId} />
              )
            })
          }
        </div>
      </ListContainer>
    </StyledRestaurantList>
  )
}

export default LockedPage