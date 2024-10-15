import { useContext, useState } from 'react';
import UserContext from '../../context/userContext';

const UserItem = ({ item }) => {
  const { users, loading, EditUsers, DeleteUser } = useContext(UserContext);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [editId, setEditId] = useState(null);

  const handleUpdate = (id) => {
    EditUsers(id, form);
    setEditId(null);
  };

  const handleEdit = (user) => {
    setEditId(user._id);
    setForm({ name: user.name, email: user.email, password: user.password });
  };

  if (loading) {
    return <div> Loading...</div>;
  }
  return (
    <>
      <div>
        <h1>Users List</h1>
        {users.map((user) => (
          <div key={user._id}>
            {editId === user._id ? (
              <div>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                  type="password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
                <button onClick={() => handleUpdate(user._id)}>save</button>
              </div>
            ) : (
              <div>
                <span>
                  {user.name} - {user.email} -{user.password}
                </span>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => DeleteUser(user._id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default UserItem;
