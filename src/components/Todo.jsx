import React from 'react';
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleStatusTodo } from '../redux/modules/todos';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Todo = ({ todo }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const onRemove = (id) => {
  //   setTodos(todo.filter((todo) => todo.id !== id));
  // };


  return (
    <TodoBox>
      <Todotitle>{todo.title}</Todotitle>
      <Todobody>{todo.body}</Todobody>
      <More_btn
        onClick={() => {
          navigate("/more");
        }}
      >
        상세보기
      </More_btn>
      <Button onClick={() => {
        dispatch(deleteTodo(todo.id))
      }}>삭제</Button>
      {/* <Button onClick={() => onRemove(id)}>삭제</Button> */}
      <Button onClick={() => {
        dispatch(toggleStatusTodo(todo.id))
      }}>
        {todo.isDone ? "취소" : "완료"}</Button>
    </TodoBox>
  );
};


const TodoBox = styled.div`
   width: 230px;
  overflow:hidden;
  border: 4px solid blanchedalmond;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  margin: 20px;
  font-family: 'Jua', sans-serif;
`

const Todotitle = styled.div`
   margin: 10px 0 30px;
  font-weight: bold;
  font-size: 30px;
`
const Todobody = styled.div`
    margin-bottom: 10px;
`
const Button = styled.div`
    margin-top: 5px;
  padding: 8px 15px;
  float:left;
  width:50px; 
  border-radius: 10px;
  border: 0.5px solid #eee;
  background-color: blanchedalmond;
  cursor: pointer;
  margin: auto 16px;
  font-family: 'Jua', sans-serif;
  font-size:13px;
`

const More_btn = styled.button`
  width:100px;
  margin:10px auto 40px;
  display:flex;
  padding: 3px 20px;
  border-radius: 10px;
    border: 0.5px solid #eee;
  cursor: pointer;

`
export default Todo;