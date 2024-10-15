import { useContext, useState } from 'react';
import UserContext from '../../context/userContext';

const UserForm = () => {
  const { AddUser } = useContext(UserContext);

  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    AddUser(form);
    setForm({ name: '', email: '', password: '' });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Please Enter your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />

      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        placeholder="Please Enter your E-mail"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Please Enter your Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />
      <button type="submit">Adduser</button>
    </form>
  );
};

export default UserForm;
