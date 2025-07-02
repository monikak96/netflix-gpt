import { useState } from "react";

const NETFLIX_LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
const Header = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const handleToggleClick = () => {
    setIsSignInForm(!isSignInForm)
  };
  return (
    <div className="relative">
      <img className="w-48" src={NETFLIX_LOGO} alt="logo"></img>
      <form className="text-white bg-black bg-opacity-50 w-4/12 my-36 mx-auto right-0 left-0 p-6 rounded-lg">
        <h1 className="p-2 my-2 text-2xl font-bold text-slate-100"> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <input
          className="p-2 my-2 w-full rounded-md bg-slate-100"
          type="Text"
          placeholder="Email Address"
        ></input>
        <input
          className="p-2 my-2 w-full rounded-md  bg-slate-100"
          type="Text"
          placeholder="password"
        ></input>
        <button className="w-full p-2 py-2 mt-8 rounded-lg bg-red-700 text-slate-100">
          Sign In
        </button>
        <p className="flex py-4 mx-15 m-2">
          {" "}
          New to Netflix? Signup{" "}
          <p
            className="px-1 hover:cursor-pointer hover:font-bold hover:text-red-700"
            onClick={handleToggleClick}
          >
            here{" "}
          </p>{" "}
        </p>
      </form>
    </div>
  );
};

export default Header;
