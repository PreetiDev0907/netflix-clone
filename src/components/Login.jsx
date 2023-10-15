import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleSignInToggle = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="absolute w-1/4 bg-black bg-opacity-80 rounded-sm my-32 mx-auto p-12 text-white left-0 right-0">
        <h1 className="text-4xl mb-2">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input
            className="my-4 p-3 w-full rounded-md bg-gray-700"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="my-4 p-3 w-full rounded-md bg-gray-700"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="my-4 p-3 w-full rounded-md bg-gray-700"
          type="password"
          placeholder="Password"
        />
        <button className="my-4 p-3 bg-red-700 w-full rounded-md" type="submit">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <label htmlFor="">
          <input className="p-1" type="checkbox" />
          Remember Me
        </label>
        <p className="p-3 cursor-pointer" onClick={handleSignInToggle}>
          {isSignIn
            ? "New to Netflix? Sign Up now"
            : "Already registered Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
