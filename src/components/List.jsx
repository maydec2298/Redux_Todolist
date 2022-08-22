import React from 'react';
import Todo from './Todo';
import styled from "styled-components";
import { useSelector } from "react-redux";

const List = () => {
  const { todos } = useSelector((state) => state.todos);

  return (
    <ListBox>

      <h2>Working 🔥</h2>
      <Todos_Working>

        {todos.map((todo) => {
          if (todo.isDone === false) {
            return (
              <Todo key={todo.id} todo={todo} />
            )
          }
        }
        )}
      </Todos_Working>

      <h2>Done🎉</h2>
      <Todos_Done>

        {todos.map((todo) => {
          if (todo.isDone === true) {
            return (
              <Todo key={todo.id} todo={todo} />
            )
          }
        }
        )}
      </Todos_Done>
    </ListBox>
  );
};

const ListBox = styled.div`
  
`
const Todos_Working = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Todos_Done = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-decoration: line-through;
`
// const Todo = styled.div`
//   border:1px solid #000;
// `

export default List;