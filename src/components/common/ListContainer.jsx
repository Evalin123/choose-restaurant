import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 100px 10% 100px 10%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center;
`

const ListContainer = ({ children }) => {
  return (
    <StyledContainer className="container">
      {children}
    </StyledContainer>
  )
}

export default ListContainer