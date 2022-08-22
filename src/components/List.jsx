import React from 'react';
import Todo from './Todo';
import styled from "styled-components";

const List = () => {
  return (
    <ListBox>
      <h2>Working 🔥</h2>
      <Todos_Working>
        <Todo />
      </Todos_Working>
      <h2>Done🎉</h2>
      <Todos_Done>
        <Todo />
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
export default List;