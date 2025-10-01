"use client";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[100px]">
      <h2 className="text-2xl font-bold mb-6">Login Page</h2>
      <form        
        className="bg-white p-6 rounded-lg  w-80 flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Username"
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password" className="p-2 border rounded" />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded" >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
