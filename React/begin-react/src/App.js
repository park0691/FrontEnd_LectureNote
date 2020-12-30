import { useRef, useReducer, useMemo, useCallback } from 'react';
import Counter from './Counter';
import CreateUser from './CreateUser';
import Hello from './Hello';
import InputSample from './InputSample';
import UserList from './UserList';
import Wrapper from './Wrapper';
import useInputs from './useInputs';

function countActiveUsers(users) {
  console.log('활성 사용자를 세는 중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'park',
      email: 'park@example.com',
      active: false
    },
    {
      id: 3,
      username: 'lee',
      email: 'lee@pusan.ac.kr',
      active: false
    }
  ]
};

/*
  useState vs. useReducer
  컴포넌트에서 관리하는 값이 하나고, 단순한 값이면 useState로 관리하는 것이 편리함.
  컴포넌트에서 관리하는 값이 여러 개가 되어 구조가 복잡하거나, users 배열에 추가하거나 삭제할 때 useReducer가 편리할 수 있음.
  개발자의 기호에 따라 알맞게 사용하도록 한다.
*/

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        // input 초기화 (기존 useState - input 초기화와 user 배열 업데이트 따로했는데 동시에 가능)
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id
            ? { ...user, active: !user.active }
            : user
          )
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      throw new Error('Unhandled action');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs({
    username: '',
    email: '',
  });
  const { username, email } = form;
  const nextId = useRef(4);
  const { users } = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  });

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  });

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onToggle={onToggle}
        onRemove={onRemove}
      />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
