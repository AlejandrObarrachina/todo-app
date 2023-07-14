"use client";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLogginIn, setIsLogginIn] = useState(true);

  const { login, signUp, currentUser } = useAuth();

  async function submitHandler() {
    if (!email || !password) {
      setError("Please enter a valid username or password");
      return;
    }
    if (isLogginIn) {
      try {
        return await login(email, password);
      } catch (error) {
        setError("Incorrect email or password");
      }
    }
    await signUp(email, password);
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center text-xs sm:text-sm gap-2 sm:gap-4">
      <h1 className="font-extrabold text-2xl sm:text-4xl select-none uppercase">
        {isLogginIn ? "Login" : "Register"}
      </h1>
      {error && (
        <div className="w-full max-w-[40ch] text-center border border-solid border-rose-400 text-rose-300 py-2">
          {error}{" "}
        </div>
      )}
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        className="outline-none text-slate-900 p-1 w-full max-w-[40ch] font-medium duration-300 border-b-2 border-solid border-white focus:border-cyan-300"
        placeholder="Email Adress"
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        className="outline-none text-slate-900 p-1 w-full max-w-[40ch] font-medium duration-300 border-b-2 border-solid border-white focus:border-cyan-300"
        placeholder="Password"
      />
      <button
        onClick={submitHandler}
        className="w-full max-w-[40ch] hover:text-slate-900 border border-white uppercase py-2 duration-300 relative after:absolute after:bg-white after:z-10 after:top-0 after:right-full after:h-full after:w-full overflow-hidden hover:after:translate-x-full after:duration-300"
      >
        <h2 className="relative z-20 font-black ">SUBMIT</h2>
      </button>
      <h2
        className="duration-300 hover:scale-110 cursor-pointer"
        onClick={() => {
          setIsLogginIn(!isLogginIn);
        }}
      >
        {!isLogginIn ? "LOGIN" : "REGISTER"}{" "}
      </h2>
    </div>
  );
};
