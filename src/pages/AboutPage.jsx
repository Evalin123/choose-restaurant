import React from "react";
import styled from "styled-components";
import {
  Avatar,
} from "@chakra-ui/react";

const StyledAboutPage = styled.div`
  width: 100%;
  height: 100%;
  top: 120px;

  .container {
    padding-top: 100px;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 80px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row; 
    justify-content: space-around;
    align-items: center;
  }

  .logo-session {
    width: 224px;
    height: 224px;
  }

  .logo {
    width: 224px;
    height: 224px;
  }

  .about-session {
    width: 830px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .title {
    width: 100%;
    height: 120px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 80px;
    line-height: 94px;
    letter-spacing: 0.2em;
    color: #131313;
  }

  .content {
    width: 100%;
    height: 150px;
    margin-top: 10px;
    font-family: Roboto;
    font-size: 20px;
    line-height: 37px;
    color: #131313;
  }

  .creater-session {
    width: 85%;
    height: 70px;
    margin-top: 80px;
    display: flex;
    justify-content: space-between;;
  }

  .creater-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .creater-avatar {
    width: 55px;
    height: 55px;
  }

  .creater-introduce {
    width: 270px;
    height: 90px;
    display: flex;
    flex-direction: column;
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
      <div className="container">
        <div className="logo-session">
          <Avatar className="logo" src="https://bit.ly/broken-link" />
        </div>
        <div className="about-session">
          <h1 className="title">關於今天吃什麼？</h1>
          <p className="content" align="left">
            你和三五好友逛街逛累了，一夥人卻想不出要吃甚麼餐廳。應該都曾有這樣的困擾吧？於是「今天吃甚麼？」應運而生。<br />
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
      </div>
    </StyledAboutPage>
  )
}

export default AboutPage
