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
`

export default Layout;