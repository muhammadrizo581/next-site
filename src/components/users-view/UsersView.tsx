"use client";
import React from "react";

const UsersView = ({ data }) => {
  return (
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-6 mt-6">
            {data.map((user) => (
                <div
                key={user.id}
                className="border rounded-lg shadow-md p-4"
                >
                <h3 className="font-semibold text-lg">
                    {user.name.firstname} {user.name.lastname}
                </h3>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500">📞 {user.phone}</p>
                </div>
            ))}
        </div>          
    </div>
  );
};

export default UsersView;
