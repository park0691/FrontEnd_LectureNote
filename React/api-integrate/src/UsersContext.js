import React, { createContext, useReducer, useContext } from 'react';
import axios from 'axios';
/*
  특정 데이터가 다양한 컴포넌트에서 필요한 경우
    현재 로그인 중 사용자 정보 체크 -> 다양한 컴포넌트에서 사용자 로그인 상태 체크할 필요
    여기저기서 필요한 상태를 비동기적으로 가져와서 사용해야 할 경우 - 데이터를 컨텍스트에 넣는다.
    만약 컨텍스트 내부에서 비동기 작업 위한 상태 관리하려면 어떻게 하는 것이 효율적일까?
*/
const initialState = {
  users: {
    loading: false,
    data: null,
    error: null,
  },
  user: {
    loading: false,
    data: null,
    error: null,
  }
};

const loadingState = {
  loading: true,
  data: null,
  error: null,
};

const success = (data) => ({
  loading: false,
  data,
  error: null
});

const error = (e) => ({
  loading: false,
  data: null,
  error: e
});

function usersReducer(state, action) {
  switch(action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: loadingState,
      };
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        users: success(action.data)
      };
    case 'GET_USERS_ERROR':
      return {
        ...state,
        users: error(action.error)
      };
    case 'GET_USER':
      return {
        ...state,
        user: loadingState,
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        user: success(action.data)
      };
    case 'GET_USER_ERROR':
      return {
        ...state,
        user: error(action.error)
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

export function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
}

export function useUsersState() {
  const state = useContext(UsersStateContext);
  if (!state) {
    throw new Error('Cannot find UserProvider');
  }
  return state;
}

export function useUsersDispatch() {
  const dispatch = useContext(UsersDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find UserProvider');
  }
  return dispatch;
}

export async function getUsers(dispatch) {
  dispatch({ type: 'GET_USERS' });
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/`
    );
    dispatch({
      type: 'GET_USERS_SUCCESS',
      data: response.data
    });
  } catch (e) {
    dispatch({
      type: 'GET_USERS_ERROR',
      error: e
    });
  }
}

export async function getUser(dispatch, id) {
  dispatch({ type: 'GET_USER' });
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({
      type: 'GET_USER_SUCCESS',
      data: response.data
    });
  } catch (e) {
    dispatch({
      type: 'GET_USER_ERROR',
      error: e
    });
  }
}