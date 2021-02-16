import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 80px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center;
`

const Container = ({ children }) => {
  return (
    <StyledContainer className="container">
      {children}
    </StyledContainer>
  )
}

export default Container