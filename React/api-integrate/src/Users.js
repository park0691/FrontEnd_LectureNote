import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchUsers = async () => {
    try {
      setUsers(null);
      setError(null);
      setLoading(true);
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users/'
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e.response);
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생하였습니다.</div>;
  if (!users) return null;

  return (
    <>
      <div>
        {users.map(user => 
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        )}
      </div>
      <button onClick={() => fetchUsers()}>다시 불러오기</button>
    </>
  );
}

export default Users;