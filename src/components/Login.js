import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const phone = useRef(null);
  const emailOrPhone = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    password.current.value = null;
  };

  const handleButtonClick = () => {
    let message;

    if (isSignInForm) {
      message = checkValidData(
        isSignInForm,
        emailOrPhone.current.value,
        password.current.value
      );
    } else {
      message = checkValidData(
        isSignInForm,
        null,
        password.current.value,
        phone.current.value,
        email.current.value,
      );
    }
    setErrMessage(message);

    //If valid email and password
    if (message) return;

    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/84857323?v=4",
            // Profile updated!
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      //Sign In logic
      signInWithEmailAndPassword(
        auth,
        emailOrPhone.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/invalid-login-credentials") {
            setErrMessage("Sorry, we can't find an accoun. Please try again");
          }
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute bg-cover bg-gradient-to-b from-black h-full min-h-screen block ">
        <img
          className="scale-y-110 "
          alt="bg-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <div className="my-28 mx-auto right-0 left-0 w-[30%] absolute bg-black bg-opacity-80 rounded-lg ">
        <form
          className=" text-white flex flex-col items-center p-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="font-[600] text-3xl pb-6 text-white self-start">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm ? (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 m-3 w-full bg-gray-600 rounded-sm"
            />
          ) : (
            ""
          )}
          {isSignInForm ? (
            <input
              type="text"
              ref={emailOrPhone}
              placeholder={"Email or Phone number"}
              className="p-4 m-3 w-full bg-gray-600 rounded-sm"
            />
          ) : (
            ""
          )}
          {!isSignInForm ? (
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="p-4 m-3 w-full bg-gray-600 rounded-sm"
            />
          ) : (
            ""
          )}

          {!isSignInForm ? (
            <input
              ref={phone}
              type="text"
              placeholder="Phone Number"
              className="p-4 m-3 w-full bg-gray-600 rounded-sm"
            />
          ) : (
            ""
          )}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 m-3 w-full bg-gray-600 rounded-sm"
          />
          <p className="self-start text-sm text-red-700">{errMessage}</p>
          <button
            className="p-4 m-4 bg-red-800 w-full rounded-md"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div className="self-start m-4 text-sm">
            {isSignInForm ? (
              <p>
                <span className="text-gray-400 mr-2">New to Netflix?</span>
                <span className="cursor-pointer" onClick={toggleSignInForm}>
                  Sign Up Now
                </span>
              </p>
            ) : (
              <p>
                <span className="text-gray-400 mr-2">Already Registered?</span>
                <span className="cursor-pointer" onClick={toggleSignInForm}>
                  Sign In Now
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
