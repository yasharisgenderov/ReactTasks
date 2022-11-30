import React from "react";

const UserItem = ({ item }) => {
  return (
    <div className="employee-item">
      <div className="header">
        <p>{item.id}</p>
        <p>{item.role}</p>
      </div>
      <h1>{item.name}</h1>
      <p>{item.department}</p>
    </div>
  );
};

export default UserItem;
