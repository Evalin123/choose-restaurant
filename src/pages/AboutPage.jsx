import React from "react";
import styled from "styled-components";
import {
  Avatar,
  Text
} from "@chakra-ui/react";
import LogoImg from "../components/images/logo.svg";
import AnyaImg from "../components/images/anya-avatar.jpg";
import EvaImg from "../components/images/eva-img.jpg";

const StyledAboutPage = styled.div`
  width: 100%;
  height: 100%;
  top: 120px;

  .container {
    padding-top: 100px;
    padding-bottom: 80px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    align-items: start;
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
    display: flex;
    align-items: center;
  }

  .creater-avatar {
    width: 55px;
    height: 55px;
    margin-right: 24px;
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

  @media (max-width: 480px) {
    .container {
      padding-top: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-right: 40px;
      padding-left: 40px;
    }

    .logo-session {
      height: 50%;
      width: 50%;
    }

    .logo {
      height: 100%;
      width: 100%;
    }

    .about-session {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .title {
      font-size: 30px;
      line-height: 72px;
      height: 60px;
    }

    .content {
      font-size: 16px;
      line-height: 24px;
      height: 216px;
    }

    .creater-session {
      width: 100%;
      height: 120px;
      margin-top: 44px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .creater-info {
      width: 100%;
      display: flex;
    }
    .creater-info.ui-info {
      margin-top: 20px;
    }

    .creater-avatar {
      margin-right: 10px;
      width: 50px;
      height: 50px;
    }

    .creater-introduce {
      width: 220px;
      height: 50px;
      padding-bottom: 10px;
      display: flex;
      flex-direction: column;
    }

    .creater-name {
      height: 20px;
      width: 100%;
      font-size: 16px;
      line-height: 25px;
    }

    .creater-character {
      height: 20px;
      width: 100%;
      font-size: 16px;
      line-height: 25px;
    }
  }
`

const AboutPage = () => {
  return (
    <StyledAboutPage>
      <div className="container">
        <div className="logo-session">
          <Avatar className="logo" src={LogoImg} />
        </div>
        <div className="about-session">
          <h1 className="title">關於今天吃什麼？</h1>
          <p className="content" align="left">
            你和三五好友逛街逛累了，一夥人卻想不出要吃甚麼餐廳。應該都曾有這樣的困擾吧？於是「今天吃甚麼？」應運而生。<br />
            這是一個蒐羅位於信義區百貨公司中、平價、適合與朋友聚餐聊天的餐廳隨選網站，將會隨機推薦一家餐廳，請沒有太多考慮、不受網路評價左右，和朋友一起走進去，來場隨性的美食小冒險吧！
          </p>
          <div className="creater-session">
            <div className="creater-info">
              <Avatar className="creater-avatar" src={EvaImg} />
              <div className="creater-introduce">
                <Text align="left" className="creater-name">Eva Lin</Text>
                <Text align="left" className="creater-character">網站創辦人、網站工程師</Text>
              </div>
            </div>
            <div className="creater-info ui-info">
              <Avatar className="creater-avatar" src={AnyaImg} />
              <div className="creater-introduce">
                <Text align="left" className="creater-name">Anya Lin</Text>
                <Text align="left" className="creater-character">UI/UX設計師</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledAboutPage>
  )
}

export default AboutPage
