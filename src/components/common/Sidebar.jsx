import React, { useEffect, useState } from "react";
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

  .username {
    width: 300px;
    height: 67px;
    margin-top: 55px;
    margin-left: 31%;
    font-family: Fira Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    color: #FFFFFF;
  }

  Button {
    width: 300px;
    height: 67px;
    margin-top: 50px;
    font-family: Roboto;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    border: none;
  }
  Button.first-btn {
    margin-top: 55px;
  }
`

const Sidebar = () => {
  const history = useHistory();
  const UserName = localStorage.getItem("UserName");
  console.log("User: ", UserName);
  const [userName, setUserName] = useState("")

  useEffect(() => {
    if (UserName) {
      setUserName(UserName)
    }
    else {
      setUserName("")
    }
  }, [UserName])

  return (
    <StyledSidebar>
      {
        userName !== "" ?
          <p className="username">{userName}</p> :
          <Button
            className="first-btn"
            variant="unstyled"
            onClick={() => { history.push("/signup") }}
            _focus={{ bg: "#CC7B4E", borderRadius: "0px" }}
          >
            會員登入/註冊
        </Button>
      }
      <Button
        variant="unstyled"
        _focus={{ bg: "#CC7B4E", borderRadius: "0px" }}
        onClick={() => { history.push("/restaurantList") }}
      >
        造訪過的餐廳
      </Button>
      <Button
        variant="unstyled"
        _focus={{ bg: "#CC7B4E", borderRadius: "0px" }}
        onClick={() => { history.push("/lockedPage") }}
      >
        未解鎖的餐廳
      </Button>
      <Button
        onClick={() => { history.push("/blackList") }}
        variant="unstyled"
        _focus={{ bg: "#CC7B4E", borderRadius: "0px" }}
      >
        黑名單餐廳
      </Button>
      <Button
        variant="unstyled"
        _focus={{ bg: "#CC7B4E", borderRadius: "0px" }}
        onClick={() => { history.push("/about") }}
      >
        關於今天吃什麼
      </Button>
      {userName === "" ? <></> :
        <Button
          variant="unstyled"
          _focus={{ bg: "#CC7B4E", borderRadius: "0px" }}
          onClick={() => {
            localStorage.removeItem("UserName");
            localStorage.removeItem("UserId");
            history.push("/signin");
          }}
        >
          登出
      </Button>}
    </StyledSidebar>
  )

}

export default Sidebar