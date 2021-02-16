import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Box,
  Button,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import styled from "styled-components";

import Container from "../components/common/Container";
import { signup } from "../utils";

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
  .sign-btn.sign-in {
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
  }

  .email-input {
    width: 460px;
    height: 70px;
    margin-top: 32px;
    font-family: Roboto;
    font-size: 25px;
    line-height: 37px;
    background: #E5E5E5;
  }

  .psd-input-group {
    width: 460px;
    height: 70px;
    margin-top: 34px;
  }
  .psd-input-group input {
    width: 100%;
    height: 100%;
    font-family: Roboto;
    font-size: 25px;
    line-height: 37px;
    background: #E5E5E5;
  }
  .psd-eyes-btn {
    top: 13px;
  }

  .submit-btn {
    width: 104px;
    height: 62px;
    margin-top: 60px;
    background-color: #CC7B4E;
    border-radius: 5px;
    font-family: Roboto;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
  }
`;

const Signup = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const history = useHistory();

  const [user, setUser] = useState({
    UserName: "",
    Email: "",
    Password: ""
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (keyName, e) => {
    setUser((prev) => ({
      ...prev,
      [keyName]: e.target.value
    }));
  };

  const handleSubmit = (user) => {
    if (confirmPassword === user.Password) {
      signup(user)
        .then(res => {
          history.push('/');
          return res;
        })
        .catch(err => {
          alert("登入失敗");
          console.log(err);
        })
    }
    else {
      alert("請確認密碼");
    }
  }

  return (
    <StyledSignup>
      <Container className="container">
        <Box className="input-section">
          <div className="sign-btn-group">
            <Button
              className="sign-btn sign-in"
              colorScheme="teal"
              variant="unstyled"
              _focus={{ border: 'none' }}
              onClick={() => { history.push("/signin") }}
            >
              會員登入
          </Button>
            <p className="choose-p">/</p>
            <Button
              className="sign-btn"
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
          <Input
            className="email-input"
            focusBorderColor="#6B6B6B"
            placeholder="電子信箱"
            onChange={(e) => { handleChange("Email", e) }}
          />
          <InputGroup className="psd-input-group">
            <Input
              focusBorderColor="#6B6B6B"
              type={show ? "text" : "password"}
              placeholder="密碼"
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
          <InputGroup className="psd-input-group">
            <Input
              type={show ? "text" : "password"}
              placeholder="確認密碼"
              focusBorderColor="#6B6B6B"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <InputRightElement className="psd-eyes-btn" width="3rem" >
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
            variant="ghost"
            onClick={() => { handleSubmit(user) }}
          >
            註冊
          </Button>
        </Box>
      </Container>
    </StyledSignup>
  );
};

export default Signup;
