import { useContext } from 'react';
import UserContext from '../../context/userContext';
import UserItem from '../userItem/userItem';
import './lists.scss';

const Lists = () => {
  const { user, loading } = useContext(UserContext);

  if ((!loading && !user) || user.length === 0) {
    return <p>No user yet</p>;
  }
  return (
    <div>
      {user && user.length > 0 ? (
        user.map((item) => (
          <div key={item._id}>
            <UserItem item={item} />
          </div>
        ))
      ) : (
        <div>No users found</div>
      )}
    </div>
  );
};

export default Lists;
