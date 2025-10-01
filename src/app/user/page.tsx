import React from "react";
import UsersView from "@/components/users-view/UsersView";

const Users = async () => {
  const response = await fetch("https://fakestoreapi.com/users");
  const users = await response.json();

  return (
    <div>
      <h2>Users Page</h2>
      <UsersView data={users} />
    </div>
  );
};

export default Users;
