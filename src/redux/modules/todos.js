const CreateTodo = "CreateTodo";
const DeleteTodo = "DeleteTodo";
const ToggleStatusTodo = "ToggleStatusTodo";

//Action create
export const addTodo = (payload) => {
  return { type: CreateTodo, payload };
};

export const deleteTodo = (payload) => {
  return { type: DeleteTodo, payload };
};

export const toggleStatusTodo = (payload) => {
  return { type: ToggleStatusTodo, payload };
};

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
    case CreateTodo:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DeleteTodo:
      return {
        ...state,
        todos: [state.todos.filter((todos) => todos.id !== action.payload)]

        // const onRemove = (id) => {
        //   setTodos(todos.filter((todos) => todos.id !== id));
        // };
      };
    case ToggleStatusTodo:
      return {
        ...state,
        todos: todos.map((todo) => {
          return todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo;
        })
      }
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;