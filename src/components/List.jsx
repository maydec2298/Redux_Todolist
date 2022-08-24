import React from 'react';
import Todo from './Todo';
import styled from "styled-components";
import { useSelector } from "react-redux";

const List = () => {
  const { todos } = useSelector((state) => state.todos);


  //   const getTodosByIsDone = (todos, isDone) => {
  //   return 
  // }

  //   const workingTodos = todos.filter((todo) => !todo.isDone);
  //   const doneTodos = todos.filter((todo) => todo.isDone);


  return (
    <ListBox>

      <h2>Working 🔥</h2>
      <TodosWorking>

        {todos.map((todo) => {
          if (todo.isDone === true) {
            return null
          }
          return (
            <Todo key={todo.id} todo={todo} />
          )
        })}
      </TodosWorking>

      <h2>Done🎉</h2>
      <TodosDone>

        {todos.map((todo) => {
          if (todo.isDone === false) {
            return null
          }
          return (
            <Todo key={todo.id} todo={todo} />
          )
        })}
      </TodosDone>
    </ListBox>
  );
};

const ListBox = styled.div`
  
`
const TodosWorking = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const TodosDone = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-decoration: line-through;
`
// const Todo = styled.div`
//   border:1px solid #000;
// `

export default List;