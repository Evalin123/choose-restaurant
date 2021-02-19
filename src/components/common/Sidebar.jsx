import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
} from "@chakra-ui/react"
import styled from "styled-components";

const StyledSidebar = styled.div`
  border: 1px solid rgb(235, 237, 240);
  height: 100vh;
  width: 334px;
  padding: 120px 0px 100px 0px;
  background-color: #717A65;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .userinfo {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .username {
    font-family: Fira Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    color: #FFFFFF;
  }

  .useremail {
    font-family: Fira Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 30px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
  }

  Button {
    width: 100%;
    height: 80px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 23px;
    color: #FFFFFF;
    border: none;
  }
  Button:hover {
    background-color: #E5E5E5;
    color: #717A65;
  }

  @media (max-width: 480px) {
    .side-bar {
      padding-top: 100px;
    }
    .userinfo {
      height: 80px;
    }

    .userinfo p {
      font-size: 20px;
    }

    Button {
      font-size: 20px;
    }
  }
`

const Sidebar = ({ isClose }) => {
  const history = useHistory();
  const UserName = localStorage.getItem("UserName");
  const UserEmail = localStorage.getItem("UserEmail");
  console.log("User: ", UserName);
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")

  useEffect(() => {
    if (UserName && UserEmail) {
      setUserName(UserName);
      setUserEmail(UserEmail);
    }
    else {
      setUserName("");
      setUserEmail("");
    }
  }, [UserName, UserEmail])

  return (
    <StyledSidebar className="side-bar">
      {
        userName !== "" ?
          <div className="userinfo">
            <p align="center" className="username">{userName}</p>
            <p align="center" className="useremail">{userEmail}</p>
          </div>
          :
          <Button
            className="first-btn"
            variant="ghost"
            borderRadius="0px"
            onClick={() => { history.push("/signup") }}
            _focus={{ bg: "#CC7B4E", borderRadius: "0px" }}
          >
            會員登入/註冊
        </Button>
      }
      <Button
        variant="ghost"
        borderRadius="0px"
        _focus={{ bg: "#CC7B4E", borderRadius: "0px" }}
        onClick={() => { history.push("/restaurantList") }}
      >
        造訪過的餐廳
      </Button>
      <Button
        variant="ghost"
        borderRadius="0px"
        _focus={{ bg: "#CC7B4E", borderRadius: "0px" }}
        onClick={() => { history.push("/lockedPage") }}
      >
        未解鎖的餐廳
      </Button>
      <Button
        onClick={() => { history.push("/blackList") }}
        variant="ghost"
        borderRadius="0px"
        _focus={{ bg: "#CC7B4E", borderRadius: "0px" }}
      >
        黑名單餐廳
      </Button>
      <Button
        variant="ghost"
        borderRadius="0px"
        _focus={{ bg: "#CC7B4E", borderRadius: "0px" }}
        onClick={() => { history.push("/about") }}
      >
        關於今天吃什麼
      </Button>
      {userName === "" ? <></> :
        <Button
          variant="ghost"
          borderRadius="0px"
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