import React from "react";
import styled from "styled-components";

import Sidebar from "../components/common/Sidebar";

const StyledRestaurantList = styled.div`
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
    <div>
      <StyledRestaurantList>
        <Sidebar />
        <div className="restaurant-list">
          <p>餐廳名稱</p>
          <p>餐廳名稱</p>
          <p>餐廳名稱</p>
          <p>餐廳名稱</p>
        </div>
      </StyledRestaurantList>
    </div>
  )
}

export default RestaurantList