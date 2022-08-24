import React from 'react';
import styled from "styled-components";
import Layout from '../components/Layout';
import { useNavigate } from "react-router-dom";
// import { useParams } from 'react-router-dom';
// import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { getTodoById } from '../redux/modules/todos'



const More = () => {
  // const todos = useSelector((state) => state.todos.todos);


  // useEffect(() => {
  //   console.log(todos)
  //   console.log('업데이트 될때 실행된다.')
  // }, [todos])

  // const dispatch = useDispatch();
  let navigate = useNavigate();
  let location = useLocation();
  // const param = useParams();
  const id = location.state.id;
  const title = location.state.title;
  const body = location.state.body;

  // console.log(param.id)

  // const todoById = (id) => {
  //   dispatch(getTodoById(id))
  // };
  // const id = param.id
  // const param_id = todos.id;

  return (
    <Layout>
      <MoreBox>
        <MoreId>id:{id}</MoreId>
        <MoreTitle>
          {title}
        </MoreTitle>

        <hr></hr>
        <MoreBody>
          {body}
        </MoreBody>


        {/* <div>{todoById(param.id)}</div> */}
        <MoreButton
          onClick={() => {
            navigate(-1);
          }}
        >이전으로</MoreButton>
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
  font-family: 'Nanum Gothic', sans-serif;
`
const MoreButton = styled.button`
    width:100px;
  margin:30px auto 10px;
  display:flex;
  flex-direction: column;
  padding: 3px 20px;
  border-radius: 10px;
    border: 2px solid #eee;
  cursor: pointer;
  background-color:#fff;
`
const MoreId = styled.div`
  float:left;

`
const MoreTitle = styled.div`
   margin: 30px 0 30px;
  font-weight: bold;
  font-size: 25px;
`
const MoreBody = styled.div`
  margin-bottom: 10px;
      font-size:13px;
`
export default More;