import React, { useRef, useState } from "react";
import Header from "./Header";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { validator } from "../utils/validator";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMAGE, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isErrorMessage, setIsErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignInToggle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = async () => {
    const message = validator(email.current.value, password.current.value);
    setIsErrorMessage(message);
    if (message) return;

    if (isSignIn) {
      //sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/invalid-login-credentials") {
            setIsErrorMessage("User Not Found!");
          }
        });
    } else {
      //sign up logic
      const displayName = name.current.value;
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up

          const user = userCredential.user;
          updateProfile(user, {
            displayName: displayName,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/user-not-found") {
            setIsErrorMessage("User Not Found!");
          }
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src={BACKGROUND_IMAGE}
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-11/12 md:w-1/4 bg-black bg-opacity-80 rounded-sm my-32 mx-auto p-12 text-white left-0 right-0"
      >
        <h1 className="text-2xl md:text-4xl mb-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="my-4 p-3 w-full rounded-md bg-gray-700"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="my-4 p-3 w-full rounded-md bg-gray-700"
          type="email"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="my-4 p-3 w-full rounded-md bg-gray-700"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-600 py-2">{isErrorMessage}</p>
        <button
          className="my-4 p-3 bg-red-700 w-full rounded-md"
          onClick={handleSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <label htmlFor="">
          <input className="p-1 " type="checkbox" />
          Remember Me
        </label>
        <div className="p-2 cursor-pointer" onClick={handleSignInToggle}>
          {isSignIn ? (
            <p>
              New to Netflix?
              <span className="hover:text-blue-600 hover:underline">
                {" "}
                Sign Up now
              </span>
            </p>
          ) : (
            <p>
              Already registered
              <span className="hover:text-blue-600 hover:underline">
                {" "}
                Sign In now
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
