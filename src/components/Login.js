import { useState } from "react";
import Header from "./Header";


const Login = () => {

    const [ isSignInForm, setIsSignInForm ] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return(
        <div>
            <div>Login</div>
            <Header />    
            <div className="absolute">
            <img alt="bg-img" src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
            </div>
            <div className="my-28 mx-auto right-0 left-0 w-[30%] relative bg-black bg-opacity-70 rounded-lg">
            <form className=" text-white flex flex-col items-center p-12">
                <h1 className="font-[600] text-3xl pb-6 text-white self-start">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                { !isSignInForm ? <input type="text" placeholder="Full Name" className="p-4 m-3 w-full bg-gray-600 rounded-sm" /> : ""}
                <input type="text" placeholder={ isSignInForm ? "Email or Phone number" : "Email Address"} className="p-4 m-3 w-full bg-gray-600 rounded-sm" />
                { !isSignInForm ? <input type="text" placeholder="Phone Number" className="p-4 m-3 w-full bg-gray-600 rounded-sm" /> : ""}
                <input type="password" placeholder="Password" className="p-4 m-3 w-full bg-gray-600 rounded-sm" />
                <button className="p-4 m-4 bg-red-800 w-full rounded-md">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="self-start m-4 text-sm cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix?  Sign Up Now" : "Already Registered? Sign In Now"}</p>
            </form>
            </div>
        </div>
    )
};

export default Login;