import { createContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    usersFetch(); //eslint-disable-next-line
  }, []);

  const usersFetch = async () => {
    try {
      const response = await fetch(`/users`);
      const data = await response.json();
      console.log(data);
      setUser(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  const EditUsers = async () => {};
  const DeleteUser = async () => {};
  const CreateUser = async () => {};

  return (
    <UserContext.Provider value={{ user, EditUsers, DeleteUser, CreateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
