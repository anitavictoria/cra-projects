import React from "react";
import "./UsersList.css";
function UsersList(props) {
  const users = props.users.map((user) => (
    <li key={user.login.uuid}>
      <img src={user.picture.large} alt={user.name.last} />
      <h4>{`${user.name.title} ${user.name.last}`}</h4>
      <p>{user.email}</p>
    </li>
  ));
  return <div className="users">{users}</div>;
}

export default UsersList;
