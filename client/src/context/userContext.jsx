import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    usersFetch();
  }, []);

  //userFetch
  const usersFetch = async () => {
    try {
      const res = await axios.get(`/users`);
      // console.log(res.data);
      setUsers(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  //adduser
  const AddUser = async (user) => {
    try {
      const res = await axios.post(`/users`, user);
      setUsers([...users, res.data]);
    } catch (error) {
      console.error('Error adding user', error);
    }
  };

  //editUsers
  const EditUsers = async (id, editUser) => {
    try {
      const res = await axios.put(`/users/${id}`, editUser);
      setUsers(users.map((user) => (user._id === id ? res.data : user)));
    } catch (err) {
      console.log('Failed to edit the User', err);
    }
  };

  //deleteUser
  const DeleteUser = async (id) => {
    try {
      await axios.delete(`/users/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (err) {
      console.log('Failed to delete the users', err);
    }
  };

  return (
    <UserContext.Provider
      value={{ users, loading, EditUsers, DeleteUser, AddUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
