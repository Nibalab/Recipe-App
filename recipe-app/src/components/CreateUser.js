import React, { useState } from 'react';
import { createUser } from '../services/api';

const CreateUser = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUser(user);
      console.log('User created:', response);
      
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create User</h2>
      <label>
        Username:
        <input type="text" name="username" value={user.username} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={user.email} onChange={handleChange} required />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={user.password} onChange={handleChange} required />
      </label>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateUser;
