import React, { useState } from 'react';
import styled from "styled-components";
// import { useDispatch, useSelector } from "react-redux";
// import { add } from "../redux/modules/todos";

const Form = () => {
  // const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const todos = useSelector((state) => state.todos);

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   if (title === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

  //   dispatch(
  //     add({
  //       id: todos.length + 1,
  //       title,
  //     })
  //   );
  // };

  return (
    <FormBox>

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
  );
};

const FormBox = styled.div`
  display: flex;
  justify-content: space-around;

  margin: 30px auto 50px auto;
  overflow: hidden;
  font-family: 'Jua', sans-serif;
  font-size: 17px;
`
const StInput = styled.input`
margin-left: 20px;
  border-radius: 10px;
  padding: 10px 30px;
  border: 0.5px solid #999;
`
const StButton = styled.button`
padding: 10px 20px;
  border-radius: 10px;
  border: 0.5px solid #eee;
  background-color: blanchedalmond;
  cursor: pointer;
  margin: 0 5px;
  font-family: 'Jua', sans-serif;
`
export default Form;