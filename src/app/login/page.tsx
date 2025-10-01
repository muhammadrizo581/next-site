"use client";
import React from "react";

const LoginPage = () => {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Login Page</h2>
      <form        
        className="bg-white p-6 rounded-lg shadow-md w-80 flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Username"
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
