import { useRef, useReducer, useMemo, useCallback, createContext } from 'react';
import produce from 'immer';
import Counter from './Counter';
import CreateUser from './CreateUser';
import Hello from './Hello';
import InputSample from './InputSample';
import UserList from './UserList';
import Wrapper from './Wrapper';
import useInputs from './useInputs';

function countActiveUsers(users) {
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
      return produce(state, draft => {
        draft.users.push(action.user);
      });
      // return {
      //   users: state.users.concat(action.user)
      // };
    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
      // return {
      //   ...state,
      //   users: state.users.map(user =>
      //     user.id === action.id
      //       ? { ...user, active: !user.active }
      //       : user
      //     )
      // };
    case 'REMOVE_USER':
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      });
      // return {
      //   ...state,
      //   users: state.users.filter(user => user.id !== action.id)
      // }
    default:
      throw new Error('Unhandled action');
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
