import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Box,
  Button
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import styled from "styled-components";

import Container from "../components/common/Container"
import { signin } from "../utils";

const StyledSignup = styled.div`
  height: 100%;
  width: 100%;
  top: 120px;

  .container {
    padding-top: 100px;
  }

  .input-section {
    height: 100%;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .sign-btn-group {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .sign-btn {
    width: 133px;
    height: 48px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 25px;
    line-height: 29px;
    letter-spacing: 0.2em;
    color: #CC7B4E;
  }
  .sign-btn.sign-up {
    color: #BABABA;
    }

  .choose-p {
    font-size: 28px;
  }

  .account-input {
    width: 460px;
    height: 70px;
    margin-top: 60px;
    font-family: Roboto;
    font-size: 25px;
    line-height: 37px;
    background: #E5E5E5;
    border-radius: 5px; 
    color: #6B6B6B;
  }

  .psd-input-group {
    width: 460px;
    height: 70px;
    margin-top: 40px;
    background: #E5E5E5;
    border-radius: 5px;
  }
  .psd-input-group input {
    width: 100%;
    height: 100%;
    font-family: Roboto;
    font-size: 25px;
    line-height: 37px;
    color: #6B6B6B;
  }
  .psd-eyes-btn {
    top: 12px;
  }

  .submit-btn {
    width: 110px;
    height: 62px;
    margin-top: 100px;
    background-color: #CC7B4E;
    border-radius: 5px;
    font-family: Roboto;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
  }

  @media (max-width: 480px) {
    .container {
      padding-top: 60px;
    }

    .input-section {
      width: 100%;
    }

    .sign-btn-group {
      width: 90%;
    }

    .sign-btn {
      width: 110px;
      font-size: 24px;
    }

    .account-input {
      width: 100%;
      height: 54px;
      margin-top: 40px;
      font-size: 22px;
    }

    .psd-input-group {
      width: 100%;
      height: 54px;
      margin-top: 20px;
    }
    .psd-input-group input {
      font-size: 22px;
    }
    .psd-eyes-btn {
      top: 10px;
    }

    .submit-btn {
      width: 110px;
      height: 62px;
      margin-top: 60px;
      font-size: 22px;
    }
  }

`;

const Signin = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const history = useHistory();
  const [user, setUser] = useState({
    UserName: "",
    Password: ""
  })
  const handleChange = (keyName, e) => {
    setUser((prev) => ({
      ...prev,
      [keyName]: e.target.value
    }));
  }
  const handleSubmit = () => {
    signin(user)
      .then((res) => {
        history.push("/")
        return res;
      })
      .catch((err) => {
        alert("登入失敗");
        console.log(err);
      })
  }

  return (
    <StyledSignup>
      <Container className="container">
        <Box className="input-section">
          <div className="sign-btn-group">
            <Button
              className="sign-btn"
              colorScheme="teal"
              variant="unstyled"
              _focus={{ border: 'none' }}
              onClick={() => { history.push("/signin") }}
            >
              會員登入
            </Button>
            <p className="choose-p">/</p>
            <Button
              className="sign-btn sign-up"
              colorScheme="teal"
              variant="unstyled"
              _focus={{ border: 'none' }}
              onClick={() => { history.push("/signup") }}
            >
              會員註冊
            </Button>
          </div>
          <Input
            className="account-input"
            focusBorderColor="#6B6B6B"
            placeholder="帳號"
            onChange={(e) => { handleChange("UserName", e) }}
          />
          <InputGroup className="psd-input-group">
            <Input
              type={show ? "text" : "password"}
              placeholder="密碼"
              focusBorderColor="#6B6B6B"
              onChange={(e) => { handleChange("Password", e) }}
            />
            <InputRightElement className="psd-eyes-btn" width="3rem">
              <IconButton
                h="1.75rem"
                variant="unstyled"
                _focus={{ border: 'none' }}
                onClick={handleClick}
                icon={
                  show ? (
                    <ViewIcon w={6} h={6} color="gray.300" />
                  ) : (
                      <ViewOffIcon w={6} h={6} color="gray.300" />
                    )
                }
              ></IconButton>
            </InputRightElement>
          </InputGroup>
          <Button
            className="submit-btn"
            colorScheme="teal"
            variant="unstyled"
            onClick={() => { handleSubmit(user) }}
          >
            登入
          </Button>
        </Box>
      </Container>
    </StyledSignup>
  );
};

export default Signin;
