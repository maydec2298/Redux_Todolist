import React from 'react';
import Todo from './Todo';
import styled from "styled-components";
import { useSelector } from "react-redux";

const List = () => {
  const { todos } = useSelector((state) => state.todos);

  return (
    <ListBox>

      <h2>Working 🔥</h2>
      <TodosWorking>

        {todos.map((todo) => {
          if (todo.isDone === false) {
            return (
              <Todo key={todo.id} todo={todo} />
            )
          }
        }
        )}
      </TodosWorking>

      <h2>Done🎉</h2>
      <TodosDone>

        {todos.map((todo) => {
          if (todo.isDone === true) {
            return <Todo key={todo.id} todo={todo} />

          }
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