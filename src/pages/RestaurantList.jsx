import React from "react";
import styled from "styled-components";

const StyledRestaurantList = styled.div`
  width: 100%;
  height: 100%
  display: flex;
  flex-direction: row;

  .restaurant-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
  }  
`

const RestaurantList = () => {
  return (
    <StyledRestaurantList>
      <div className="restaurant-list">
        <p>餐廳名稱</p>
        <p>餐廳名稱</p>
        <p>餐廳名稱</p>
        <p>餐廳名稱</p>
      </div>
    </StyledRestaurantList>
  )
}

export default RestaurantList