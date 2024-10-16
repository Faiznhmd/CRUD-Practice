import { useContext, useState } from 'react';
import UserContext from '../../context/userContext';
import './form.scss';

const UserForm = () => {
  const { AddUser } = useContext(UserContext);
  // const [errors, setErrors] = useState({});

  const [form, setForm] = useState({ name: '', email: '', password: '' });

  // const validate = () => {
  //   let errors = {};

  //   if (!form.name.trim()) {
  //     errors.name = 'Name is required';
  //   }

  //   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!form.email.trim()) {
  //     errors.email = 'Email is required';
  //   } else if (!emailPattern.test(form.email)) {
  //     errors.email = 'Email is not valid';
  //   }

  //   if (!form.password) {
  //     errors.password = 'Password is required';
  //   } else if (form.password.length < 6) {
  //     errors.password = 'Password must be at least 6 characters long';
  //   }

  //   setErrors(errors);

  //   return Object.keys(errors).length === 0;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    AddUser(form);
    setForm({ name: '', email: '', password: '' });
  };
  return (
    <form onSubmit={handleSubmit} className="userform">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Please Enter your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      {/* {errors.name && (
        <p
          style={{
            color: 'red',
            fontSize: '14px',
            marginTop: '5px',
            fontWeight: 'bold',
          }}
        >
          {errors.name}
        </p>
      )} */}

      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        placeholder="Please Enter your E-mail"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      {/* {errors.email && (
        <p
          style={{
            color: 'red',
            fontSize: '14px',
            marginTop: '5px',
            fontWeight: 'bold',
          }}
        >
          {errors.email}
        </p>
      )} */}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Please Enter your Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />
      {/* {errors.password && (
        <p
          style={{
            color: 'red',
            fontSize: '14px',
            marginTop: '5px',
            fontWeight: 'bold',
          }}
        >
          {errors.password}
        </p>
      )} */}
      <button type="submit">Adduser</button>
    </form>
  );
};

export default UserForm;
