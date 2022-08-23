//Action type
const CREATETODO = "CREATETODO";
const DELETETODO = "DELETETODO";
const TOGGLETODO = "TOGGLETODO";
// const TODOID = "TODOID";

//Action create
export const addTodo = (payload) => {
  return { type: CREATETODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETETODO, payload };
};

export const toggleStatusTodo = (payload) => {
  return { type: TOGGLETODO, payload };
};

// export const getTodoById = () => {
//   return { type: TODOID };
// };

// 초기 상태값
const initialState = {

  todos: [
    {
      id: 1, // id는 모두 고유값이어야 합니다.
      title: "리액트 공부",
      body: "챕터 1부터 챕터 12까지 학습",
      isDone: false,
    },
    {
      id: 2, // id는 모두 고유값이어야 합니다.
      title: "운동 하기",
      body: "스쿼트 100개",
      isDone: true,
    }
  ],
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case CREATETODO:
      return {
        // ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETETODO:
      return {
        // ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };
    case TOGGLETODO:
      return {
        // ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo;
        })
      }

    // case TODOID:
    //   return {
    //     todos: state.todos.filter((todo) => todo.id === action.payload)
    //   };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;