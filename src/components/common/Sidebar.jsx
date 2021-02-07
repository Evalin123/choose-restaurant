import React from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
} from "@chakra-ui/react"
import styled from "styled-components";

const StyledSidebar = styled.div`
  border: 1px solid rgb(235, 237, 240);
  height: 100vh;
  width: 300px;
  background-color: #717A65;
  display: flex;
  flex-direction: column;

  Button {
    width: 129px;
    height: 23px;
    left: 42px;
    margin-top: 90px;
    font-family: Roboto;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
  }
`

const Sidebar = () => {
  const history = useHistory();

  return (
    <StyledSidebar>
      <Button variant="ghost" onClick={() => { history.push("/signup") }}>
        會員登入/註冊
      </Button>
      <Button variant="ghost">
        造訪過的餐廳
      </Button>
      <Button variant="ghost">
        未解鎖的餐廳
      </Button>
      <Button variant="ghost">
        黑名單餐廳
      </Button>
      <Button variant="ghost">
        關於今天吃什麼
      </Button>
      <Button variant="ghost">
        登出
      </Button>
    </StyledSidebar>
  )

}

export default Sidebar