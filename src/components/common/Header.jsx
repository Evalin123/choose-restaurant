import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react"

import Sidebar from "./Sidebar";
import { ReactComponent as HamburgerIcon } from "../images/hamberger.svg"
import { ReactComponent as Logo } from "../images/logo.svg"

const StyledPageHeader = styled.div`
  border: 1px solid rgb(235, 237, 240);
  width: 100%;
  height: 120px;
  padding: 0px 35px 0px 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #F7E1D2;

  .logo-session {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .home-btn {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-right: 10px;
  }

  p {
    font-size: 20px;
    font-family: 'Fira Sans', sans-serif;
  }

  .sign-in-btn {
    width: 104px;
    height: 62px;
    font-family: 'Roboto';
    font-size: 20px;
  }

  .sign-up-btn {
    width: 104px;
    height: 62px;
    font-family: 'Roboto';
    font-size: 20px;
  }

  .hamberger-btn {
    width: 51px;
    height: 60px;
  }

  @media (max-width: 480px) {
    .logo-session {
      height: 44px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .home-btn {
      border-radius: 50%;
      margin-right: 5px;
    }

    p {
      font-family: Fira Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 12px;
    }
  }
`

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const history = useHistory();

  return (
    <StyledPageHeader>
      <div className="logo-session">
        <IconButton
          className="home-btn"
          variant="unstyled"
          colorScheme="teal"
          aria-label="Call Sage"
          icon={<Logo />}
          onClick={() => {
            history.push("/");
          }}
          _focus={{ borderRadius: "none" }}
        >
        </IconButton>
        <p>你好！今天要吃什麼呢？</p>
      </div>
      <IconButton
        className="hamberger-btn"
        variant="unstyled"
        icon={<HamburgerIcon w={9} h={9} color="#131313;" />}
        ref={btnRef} colorScheme="teal"
        onClick={onOpen}
        _focus={{ borderRadius: "none" }}
      >
        Open
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <Sidebar />
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </StyledPageHeader>
  )
}

export default Header