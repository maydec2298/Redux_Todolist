import React, { useState } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";

const Form = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "" || body === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음
    //alert 추가
    const nextId = todos.length;

    dispatch(
      addTodo({
        id: nextId + 1,
        title,
        body,
        isDone: false,
      })
    );
    setTitle("")
    setBody("")
  };

  return (

    <form onSubmit={onSubmitHandler}>
      <FormBox >

        <div>제목
          <StInput
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          /></div>

        <div>내용
          <StInput
            type="text"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          /></div>

        <StButton>추가하기</StButton>

      </FormBox>
    </form>


  );
};

const FormBox = styled.div`
  display: flex;
  justify-content: space-around;

  margin: 30px auto 50px auto;
  overflow: hidden;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 17px;
  
`
const StInput = styled.input`
margin-left: 20px;
  border-radius: 10px;
  padding: 10px 30px;
  border: 2px solid #ddd;
`
const StButton = styled.button`
padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #eee;
  background-color: blanchedalmond;
  cursor: pointer;
  margin: 0 5px;
  font-family: 'Nanum Gothic', sans-serif;
`
export default Form;