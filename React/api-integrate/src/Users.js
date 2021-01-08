import React, { useState } from 'react';
import { useAsync } from 'react-async';
import axios from 'axios';
import User from './User';

async function getUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users/'
  );
  return response.data;
}

function Users() {
  const [userId, setUserId] = useState(null);
  const {
    data: users,
    error,
    isLoading,
    reload,
    run
  } = useAsync({
    deferFn: getUsers
  })
  
  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생하였습니다.</div>;
  if (!users) return <button onClick={run}>불러오기</button>;

  return (
    <>
      <div>
        {users.map(user => 
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} ({user.name})
          </li>
        )}
      </div>
      <button onClick={reload}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;