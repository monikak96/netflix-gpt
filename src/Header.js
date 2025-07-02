import { useRef, useState } from "react";
import isValidData from "./utils/validation";

const NETFLIX_LOGO =
  "https://images.seeklogo.com/logo-png/35/2/top-gun-maverick-logo-png_seeklogo-357072.png";

const Header = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const handleToggleClick = () => {
    setIsSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const handleValidation = () => {
    const message = isValidData(
      email.current.value,
      password.current.value,
      fullname?.current?.value
    );
    setErrorMessage(message);
  };
  
  return (
    <div className="relative">
      <img className="w-48" src={NETFLIX_LOGO} alt="logo"></img>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="text-white bg-black bg-opacity-50 w-4/12 my-36 mx-auto right-0 left-0 p-6 rounded-lg"
      >
        <h1 className="p-2 my-2 text-2xl font-bold text-slate-100">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullname}
            className="p-2 my-2 w-full rounded-md bg-slate-100 text-black"
            type="Text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          className="p-2 my-2 w-full rounded-md bg-slate-100 text-black"
          type="Text"
          ref={email}
          placeholder="Email Address"
        ></input>
        <input
          ref={password}
          className="p-2 my-2 w-full rounded-md  bg-slate-100 text-black"
          type="password"
          placeholder="password"
        ></input>
        <p className="py-2 text-red-700 font-light">{errorMessage}</p>
        <button
          className="w-full  py-2 mt-2 rounded-lg bg-red-700 text-slate-100"
          onClick={handleValidation}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h5 className="flex py-4 mx-15 m-2">
          {isSignInForm ? "New to Netflix? Signup" : "Already a Member? SignIn"}
          <p
            className="px-1 hover:cursor-pointer hover:font-bold hover:text-red-700"
            onClick={handleToggleClick}
          >
            here{" "}
          </p>{" "}
        </h5>
      </form>
    </div>
  );
};

export default Header;
