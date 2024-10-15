const UserItem = ({ item }) => {
  return (
    <>
      <h1>{item.name} </h1>
      <h3> {item.email} </h3>
      <p> {item.password} </p>
    </>
  );
};

export default UserItem;
