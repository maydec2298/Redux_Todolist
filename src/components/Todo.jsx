import React from 'react';
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleStatusTodo } from '../redux/modules/todos';
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// const todolist = useSelector((module) => module.todos.todos)

// //todo 상태에 따라 리스트 분리하기
// const workingTodos = todoList.filter((todo) => !todo.isDone);
// const doneTodos = todoList.filter((todo) => todo.isDone);


const Todo = ({ todo }) => {
  // const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 삭제버튼
  const onRemove = (id) => {
    dispatch(deleteTodo(id))
  };

  //완료/취소
  const onToggle = (id) => {
    dispatch(toggleStatusTodo(id))
  };

  const onClickMore = () => {
    navigate(`/more/${todo.id}`, {
      state: {
        id: todo.id,
        title: todo.title,
        body: todo.body,
      }
    })

  };

  return (
    <TodoBox>

      <Todotitle>{todo.title}</Todotitle>
      <hr></hr>
      <Todobody>{todo.body}</Todobody>

      <MoreBtn
        onClick={() => { onClickMore() }}>
        📑 상세보기
      </MoreBtn>

      <Button
        onClick={() => onRemove(todo.id)}>
        삭제
      </Button>

      <Button
        onClick={() => onToggle(todo.id)}>
        {todo.isDone ? "취소" : "완료"}
      </Button>
    </TodoBox>
  );
};


const TodoBox = styled.div`
   width: 210px;
  overflow:hidden;
  border: 4px solid blanchedalmond;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  margin: 20px;
`

const Todotitle = styled.div`
   margin: 10px 0 30px;
  font-weight: bold;
  font-size: 25px;
`

const Todobody = styled.div`
    margin-bottom: 10px;
    font-size:13px;
`

const Button = styled.div`
  padding: 5px 15px;
  float:left;
  width:50px; 
  border-radius: 10px;
  border: 2px solid #ddd;
  background-color: #fff;
  cursor: pointer;
  margin: auto 10px;
  font-size:13px;
`

const MoreBtn = styled.button`
  margin:10px auto 40px;
  display:flex;
  padding: 3px 20px;
  border-radius: 10px;
  border: 2px solid #eee;
  cursor: pointer;
  background-color:#fff;
`
export default Todo;