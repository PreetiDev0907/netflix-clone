import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const isGptSearch = useSelector((store) => store?.gpt?.isGptSearch);
  const langKey = useSelector((store) => store.pageLang?.lang);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const toggleGptSuggestions = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-16 py-4 bg-gradient-to-b from-gray-800 z-10 flex justify-between">
      <img className="w-40" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex justify-between items-center gap-4">
          {isGptSearch ? (
            <>
              <button
                className="p-2 m-2 bg-red-600 rounded-md text-white"
                onClick={toggleGptSuggestions}
              >
                {lang[langKey].backToHome}
              </button>
              <select
                className="p-2 m-2 bg-gray-900 text-white"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </>
          ) : (
            <button
              className="p-2 m-2 bg-purple-600 rounded-md text-white"
              onClick={toggleGptSuggestions}
            >
              GPT Suggestions
            </button>
          )}

          <h4 className="text-white">{user.displayName}</h4>
          <img className="w-10 h-10" src={user.photoURL} alt="user icon" />
          <button
            className="font-bold text-red-600"
            type="submit"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
