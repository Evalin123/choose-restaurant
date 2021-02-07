import React from "react";
import styled from "styled-components";
import { Button, Image } from "@chakra-ui/react";

import Sidebar from "../components/common/Sidebar";

const StyledRestaurantDetailPage = styled.div`
  display: flex;
  flex-direction: row;

  .restaurant-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    }
`

const RestaurantDetailPage = () => {
  return (
    <div>
      <StyledRestaurantDetailPage>

        <Sidebar />
        <div className="restaurant-detail">
          餐廳名稱
      <Image boxSize="250px" src="https://static.kolable.com/avatars/weblab/2bfdfd24-732a-43c8-8aa8-722e4b521941" alt="" />
          <div>
            <Button>
              吃完了
          </Button>
            <Button>
              黑名單
          </Button>
          </div>
        </div>
      </StyledRestaurantDetailPage>
    </div>
  )
}

export default RestaurantDetailPage