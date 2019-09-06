import * as React from "react";

export const Users = () => {
  const [users, setUsers] = React.useState([]);

  const fetchUsers = async () => {
    const response = await fetch("/api/users");
    const json = await response.json();
    const _users = json.users;
    setUsers(_users);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="users">
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
