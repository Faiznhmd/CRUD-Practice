import Navbar from './components/nav/Navbar';
// import Lists from './components/userList/lists';
import UserForm from './components/userform/userForm';
import UserItem from './components/userItem/userItem';

import './App.scss';

import { UserProvider } from './context/userContext';

function App() {
  return (
    <UserProvider>
      <div className="app">
        <Navbar />
        <UserForm />
        <UserItem />
      </div>
    </UserProvider>
  );
}

export default App;
