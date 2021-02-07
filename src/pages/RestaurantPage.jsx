import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button, Image } from "@chakra-ui/react";

import Sidebar from "../components/common/Sidebar";

const StyledRestaurantPage = styled.div`

  display: flex;
  flex-direction: row;

  .restaurant-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
  }
`

const RestaurantPage = () => {
  const history = useHistory()
  return (
    <div>
      <StyledRestaurantPage>
        <Sidebar />
        <div className="restaurant-page">
          餐廳
          <div>
            <Image boxSize="250px" src="https://static.kolable.com/avatars/weblab/2bfdfd24-732a-43c8-8aa8-722e4b521941" alt="" />
          </div>
          <div>
            <Button onClick={() => { history.push("/restaurant/:id/detail") }}>
              就決定是你了
            </Button>
            <Button>
              換別家
            </Button>
            <Button>
              黑名單
            </Button>
          </div>
        </div>
      </StyledRestaurantPage>
    </div>
  )
}

export default RestaurantPage