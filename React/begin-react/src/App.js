import { useRef, useState, useMemo, useCallback } from 'react';
import Counter from './Counter';
import CreateUser from './CreateUser';
import Hello from './Hello';
import InputSample from './InputSample';
import UserList from './UserList';
import Wrapper from './Wrapper';

function countActiveUsers(users) {
  console.log('활성 사용자를 세는 중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]);
  const [users, setUsers] = useState([
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
  ]);
  /* useRef -> 컴포넌트 리렌더링되도 값 유지. 값이 바껴도 컴포넌트 리렌더링되지 않는다. */
  const nextId = useRef(4);
  /* useCallback -> 함수 재사용 */
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    // setUsers([...users, user]);
    setUsers(users => users.concat(user));
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id));
  }, []);

  const onToggle = useCallback(id => {
    setUsers(users => users.map(
      user => user.id === id
        ? { ...user, active: !user.active }
        : user
    ));
  }, []);
  /* useMemo -> 연산된 값 재사용 */
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
        onRemove={onRemove}
        onToggle={onToggle}
      />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
