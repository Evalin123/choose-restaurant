import React from "react";
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

const StyledSignup = styled.div`
  height: 100%;
  width: 100%;
  top: 119px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .input-section {
    height: 60%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
  }

  .sign-btn-group {
    display: flex;
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
    margin-left: 18px;
    margin-right: 18px;
  }

  .account-input {
    width: 401px;
    height: 69px;
    margin-top: 51px;
    font-family: Roboto;
    font-size: 25px;
    line-height: 37px;
    background: #E5E5E5;
    border-radius: 5px; 
  }

  .email-input {
    width: 401px;
    height: 69px;
    margin-top: 34px;
    font-family: Roboto;
    font-size: 25px;
    line-height: 37px;
    background: #E5E5E5;
    border-radius: 5px;
  }

  .psd-input-group {
    width: 401px;
    height: 69px;
    margin-top: 34px;
    background: #E5E5E5;
    border-radius: 5px;
  }
  .psd-input-group input {
    width: 100%;
    height: 100%;
    font-family: Roboto;
    font-size: 25px;
    line-height: 37px;
  }
  .psd-eyes-btn {
    top: 13px;
  }

  .submit-btn {
    width: 104px;
    height: 62px;
    margin-top: 137px;
    background-color: #CC7B4E;
    border-radius: 5px;
    font-family: Roboto;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
  }

`;

const Signin = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const history = useHistory();
  return (
    <StyledSignup>
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
            onClick={() => { history.push("/signup") }}
          >
            會員註冊
          </Button>
        </div>
        <Input className="account-input" focusBorderColor="#6B6B6B" placeholder="帳號" />
        <InputGroup className="psd-input-group">
          <Input
            type={show ? "text" : "password"}
            placeholder="密碼"
            focusBorderColor="#6B6B6B"
            _active={{ borderBottomColor: "#FF9B63" }}
          />
          <InputRightElement className="psd-eyes-btn" width="3rem">
            <IconButton
              h="1.75rem"
              variant="unstyled"
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
          onClick={() => { history.push("/") }}
        >
          註冊
        </Button>
      </Box>
    </StyledSignup>
  );
};

export default Signin;
