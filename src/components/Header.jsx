import React from 'react';
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderBox>
      <HeaderTitle>My Todo List✍️</HeaderTitle>
      <HeaderSide>React</HeaderSide>
    </HeaderBox>
  );
};

const HeaderBox = styled.div`
  height: 100px;
  display: flex;
  background-color: antiquewhite;
  font-weight:bold;
`

const HeaderTitle = styled.div`
   margin: auto;
  font-size: 30px;
`

const HeaderSide = styled.div`
   float: right;
  margin: auto 30px auto 0;
`
export default Header;