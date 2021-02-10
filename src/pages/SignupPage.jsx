import React from "react";
import { useHistory } from "react-router-dom";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Box,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure
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
    color: #131313;
  }
  .sign-btn.sign-in {
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
  }

  .email-input {
    width: 401px;
    height: 69px;
    margin-top: 34px;
    font-family: Roboto;
    font-size: 25px;
    line-height: 37px;
  }

  .psd-input-group {
    width: 401px;
    height: 69px;
    margin-top: 34px;
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
    margin-top: 37px;
    background-color: #131313;
    border-radius: 5px;
    font-family: Roboto;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
  }

  .submit-alert {
    width: 334px;
    height: 233px;    
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: center;
  }
  .alert-header {
    margin-left: 15px;
    margin-top: 34px;
    display: flex;
    justify-content: center;
  }
  .alert-btn {
    background-color: #131313;
    border-radius: 5px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
  }

`;

const Signup = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  return (
    <StyledSignup>
      <Box className="input-section">
        <div className="sign-btn-group">
          <Button
            className="sign-btn sign-in"
            colorScheme="teal"
            variant="ghost"
            onClick={() => { history.push("/signin") }}
          >
            會員登入
          </Button>
          <p className="choose-p">/</p>
          <Button
            className="sign-btn"
            colorScheme="teal"
            variant="ghost"
            onClick={() => { history.push("/signup") }}
          >
            會員註冊
          </Button>
        </div>
        <Input className="account-input" focusBorderColor="#6B6B6B" placeholder="帳號" />
        <Input className="email-input" focusBorderColor="#6B6B6B" placeholder="電子信箱" />
        <InputGroup className="psd-input-group">
          <Input
            focusBorderColor="#6B6B6B"
            type={show ? "text" : "password"}
            placeholder="密碼"
          />
          <InputRightElement className="psd-eyes-btn" width="3rem">
            <IconButton
              h="1.75rem"
              variant="ghost"
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
          />
          <InputRightElement className="psd-eyes-btn" width="3rem" >
            <IconButton
              h="1.75rem"
              variant="ghost"
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
          onClick={onOpen}
        >
          註冊
        </Button>
        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
          <AlertDialogContent className="submit-alert">
            <AlertDialogBody fontSize="lg" fontWeight="bold" mb="1rem">
              成功加入<br />吃甚麼會員囉
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                colorScheme="#131313;"
                ref={cancelRef}
                onClick={() => {
                  onClose();
                  history.push("/signin")
                }}
              >
                趕緊來登入
            </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Box>
    </StyledSignup>
  );
};

export default Signup;
