import React from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';

async function getUser({ id }) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

function User({ id }) {
  const {
    data: user,
    error,
    isLoading
  } = useAsync({
    promiseFn: getUser,
    id,
    watch: id   // deps와 비슷한 역할
  });
  
  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생하였습니다.</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <p><b>Email: </b>{user.email}</p>
    </div>
  );
}

export default User;