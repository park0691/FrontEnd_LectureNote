import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: false,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false,
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: true,
  },

];

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(
        todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(
        todo => todo.id !== action.id
      );
    default:
      throw new Error(`Unhandled Action Type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
/*
  Custom Hook 사용
  State와 Dispatch 컨텍스트를 분리한 이유?
    TodoCreate 컴포넌트에서 dispatch만 필요하다.
    한 컨텍스트에 state, dispatch를 같이 넣는다면, TodoCreate 컴포넌트는 렌더링할 필요가 없을 때에도 렌더링하게 된다.
    why? 컨텍스트에 state도 들어 있으므로
    분리한다면 TodoCreate 컴포넌트는 state가 바껴도 렌더링되지 않는다.
    컴포넌트 최적화 위해 컨텍스트를 따로 만들도록 한다!
*/
    
    
export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider')
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider')
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider')
  }
  return context;
}