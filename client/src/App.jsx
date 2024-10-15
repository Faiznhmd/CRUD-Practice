import './App.scss';
import Navbar from './components/nav/Navbar';
import Lists from './components/userList/lists';
import { UserProvider } from './context/userContext';

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Lists />
    </UserProvider>
  );
}

export default App;
