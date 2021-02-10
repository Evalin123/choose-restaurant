import React from "react";
import styled from "styled-components";
import {
  Avatar,
} from "@chakra-ui/react";

const StyledAboutPage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  top: 120px;

  .logo-session {
    width: 240px;
    height: 240px;
    margin-top: 117px;
    margin-left: 170px;
  }

  .logo {
    width: 240px;
    height: 240px;
  }

  .about-session {
    width: 781px;
    height: 100%;
    margin-top: 117px;
    margin-left: 78px;
    display: flex;
    flex-direction: column;
  }

  .title {
    width: 781px;
    height: 120px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 80px;
    line-height: 94px;
    letter-spacing: 0.2em;
    color: #131313;
  }

  .content {
    width: 733px;
    height: 188px;
    font-family: Roboto;
    font-size: 25px;
    line-height: 37px;
    color: #131313;
  }

  .creater-session {
    width: 730px;
    height: 60px;
    margin-top: 80px;
    display: flex;
    justify-content: space-between;;
  }

  .creater-info {
    width: 320px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .creater-introduce {
    width: 291px;
    height: 90px;
    margin-left: 25px;
    display: flex;
    flex-direction: column;
  }

  .creater-avatar {
    width: 55px;
    height: 55px;
  }

  .creater-name {
    width: 90px;
    height: 38px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 20px;
    line-height: 37px;
  }

  .creater-character {
    width: 291px;
    height: 38px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 37px;
  }
`

const AboutPage = () => {
  return (
    <StyledAboutPage>
      <div className="logo-session">
        <Avatar className="logo" src="https://bit.ly/broken-link" />
      </div>
      <div className="about-session">
        <h1 className="title">關於今天吃什麼？</h1>
        <p className="content" align="left">
          你和三五好友逛街逛累了，一夥人卻想不出要吃甚麼餐廳。<br />
          應該都曾有這樣的困擾吧？於是「今天吃甚麼？」應運而生。<br />
          這是一個蒐羅位於信義區百貨公司中、平價、適合與朋友聚餐聊天的餐廳隨選網站，將會隨機推薦一家餐廳，請沒有太多考慮、不受網路評價左右，和朋友一起走進去，來場隨性的美食小冒險吧！
        </p>
        <div className="creater-session">
          <div className="creater-info">
            <Avatar className="creater-avatar" src="https://bit.ly/broken-link" />
            <div className="creater-introduce">
              <p align="left" className="creater-name">Eva Lin</p>
              <p align="left" className="creater-character">網站創辦人、網站工程師</p>
            </div>
          </div>
          <div className="creater-info">
            <Avatar className="creater-avatar" src="https://bit.ly/broken-link" />
            <div className="creater-introduce">
              <p align="left" className="creater-name">Anya Lin</p>
              <p align="left" className="creater-character">UI/UX設計師</p>
            </div>
          </div>
        </div>
      </div>
    </StyledAboutPage>
  )
}

export default AboutPage
