import { useState, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}
/*
  reducer의 사용.
    상태 업데이트 로직이 컴포넌트 밖에 있다.
    dispatch : action 발생시킨다.
*/
function Counter() {
  // const [number, setNumber] = useState(0);
  const [number, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => {
    dispatch({
      type: 'INCREMENT'
    });
  };
  const onDecrease = () => {
    dispatch({
      type: 'DECREMENT'
    });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;