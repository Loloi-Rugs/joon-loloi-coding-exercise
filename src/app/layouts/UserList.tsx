'use client';

import { useCallback, useEffect, useState } from "react";
import { User } from "../lib/types/user";
import UserCard from "../components/UserCard";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  // Convert to server action in src/app/actions/userAction.ts
  const getUsers = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const users: User[] = await res.json();
      setUsers(users);
    } catch (error) {
      console.error('Failed to fetch users:', error);
      
      throw error;
    }
  }, []);
  
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='p-4'>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;