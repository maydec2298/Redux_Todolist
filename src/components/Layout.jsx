import React from 'react';
import Header from './Header';
import styled from "styled-components";

const Layout = (props) => {
  return (
    <LayoutBox>
      <Header />
      {props.children}
    </LayoutBox>
  );
};

const LayoutBox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 1000px;
  margin: auto;
  font-family: 'Ubuntu', sans-serif;
  font-family: 'Nanum Gothic', sans-serif;
  

`

export default Layout;