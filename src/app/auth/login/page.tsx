"use client";

// Modules
import React, { MouseEventHandler, useState } from 'react';

const Login = () => {

  // States
  const [userUsernameOrEmail, setUserUsernameOrEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // Login
  const login = async () => {
    try {
    } catch (err) {
      // console.log(err);
    }
  }

  // Handlers
  const HandleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="w-1/2 h-full flex flex-col justify-center items-center bg-white">

      <form className="space-y-2 md:space-y-4" action="#">
        <div>
          <label htmlFor="email" className="text-black">Your email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="email" className="">Your email</label>
          <input type="email" name="email" id="email" />
        </div>
      </form>

    </div>
  )
}

export default Login