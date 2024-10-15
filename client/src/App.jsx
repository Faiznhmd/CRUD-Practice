import './App.scss';
// import Navbar from './components/nav/Navbar';
// import Lists from './components/userList/lists';
import UserForm from './components/userform/userForm';
import UserItem from './components/userItem/userItem';

import { UserProvider } from './context/userContext';

function App() {
  return (
    <UserProvider>
      {/* <Navbar /> */}
      {/* <Lists /> */}
      <UserForm />
      <UserItem />
    </UserProvider>
  );
}

export default App;
