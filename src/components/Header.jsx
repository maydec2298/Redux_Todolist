import React from 'react';
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderBox>
      <Header_Title>My Todo List✍️</Header_Title>
      <Header_Side>React</Header_Side>
    </HeaderBox>
  );
};

const HeaderBox = styled.div`
  height: 100px;
  display: flex;
  background-color: antiquewhite;
`

const Header_Title = styled.div`
   margin: auto;
  font-size: 30px;
`

const Header_Side = styled.div`
   float: right;
  margin: auto 30px auto 0;
`
export default Header;