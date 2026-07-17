import { useState } from "react"
import Header from "./Header"

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)
  }

  return (
     <div>
        <Header />

    
        <div className="absolute">
        <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ffa9d590-69c5-406f-bff9-e2ced3baa6ad/web/IN-en-20260713-TRIFECTA-perspective_75c0557e-9bbb-4149-9913-b87d4d7a30b7_large.jpg" 
        alt=""/>
        </div>

      <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">

        <h1 className="font-bold text-3xl py-4">{isSignInForm ?"Sign In" : "Sign Up"}</h1>

        {!isSignInForm && (<input type="text" placeholder="Enter Full Name" className="p-4 my-4 w-full bg-gray-700 rounded-md" />)}

        <input type="text" placeholder="Enter E-mail address" className="p-4 my-4 w-full bg-gray-700 rounded-md" />

        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-md"/>

        <button className="p-4 my-6 bg-red-600 w-full rounded-lg">{isSignInForm ?"Sign In" : "Sign Up"}</button>

        <p className="py-6 cursor-pointer underline" onClick={toggleSignInForm}>{isSignInForm ?"New to Netflix? Sign Up Now.." : "Already User ? Sign In Now"}</p>
      </form>

    </div>


  )
}

export default Login
