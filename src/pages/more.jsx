import React from 'react';
import styled from "styled-components";
import Layout from '../components/Layout';
import { useNavigate } from "react-router-dom";

const More = () => {

  let navigate = useNavigate();

  return (

    <Layout>
      <MoreBox>
        <button onClick={() => {
          navigate(-1);
        }}>이전으로</button>
      </MoreBox>
    </Layout>

  );
};

const MoreBox = styled.div`
   width: 230px;
  overflow:hidden;
  border: 4px solid blanchedalmond;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  margin:100px auto;
  font-family: 'Jua', sans-serif;
`
export default More;