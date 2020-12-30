import { useState, useReducer, useCallback } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        ...state,
        [action.name]: action.value
      };
    case 'INPUT_RESET':
      return Object.keys(state).reduce((acc, current) => {
        acc[current] = '';
        return acc;
      }, {});
    default:
      return state;
  }
}

function useInputs(initialForm) {
  const [form, dispatch] = useReducer(reducer, initialForm);
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: 'INPUT_CHANGE',
      name,
      value
    });
  }, []);
  const reset = useCallback(() => dispatch({ type: 'INPUT_RESET' }), []);

  return [form, onChange, reset];
}

export default useInputs;