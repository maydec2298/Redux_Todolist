// 초기 상태값
const initialState = {
  id: 1, // id는 모두 고유값이어야 합니다.
  title: "리액트 강의보기",
  body: "챕터 1부터 챕터 12까지 학습",
  isDone: false
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;