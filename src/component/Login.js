import { useRef, useState } from "react"
import { checkValidData } from "../utils/validate"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)

  const[errorMessage, setErrorMessage] = useState(null)

  const navigate = useNavigate();
  const dispatch = useDispatch()


  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleButtonClick = ()=>{
    // Validate the form data

    const message = checkValidData(email.current.value , password.current.value, !isSignInForm ? name.current.value : null)
      setErrorMessage(message);
      if(message) return

      if(!isSignInForm){
        //* Sign Up Logic
        createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
          .then((userCredential) => {
          const user = userCredential.user;

               updateProfile(user, {
             displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/265467934?v=4"
             }).then(() => {

                     const {uid, email, displayName, photoURL} = auth.currentUser;
                     dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))


             navigate("/browse")
             }).catch((error) => {
              setErrorMessage(error.message)
             });

         })
      .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });
      }
      else {
        //* Sign In Logic

        signInWithEmailAndPassword(auth, email.current.value , password.current.value,)
           .then((userCredential) => {
    
            const user = userCredential.user;
             console.log(user)
              navigate("/browse")
            })
           .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;

              setErrorMessage(errorCode + "-" + errorMessage) 
  });

      }

  }

  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)
  }

  return (
     <div>
        <div className="absolute w-full px-8 py-6 z-10">
            <img className="w-36" 
            src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAUkLCBtHBbguPPqzaFOzEv4Pw_eS79j0y7ADR4hkB30-HkahpsUb5yvfzgKsfU2oNda-7hpkfYLnXhjc23JVT07PHsGgfsaHAB7qOhy2_5gn-nuKOVSUSBzn-i-O3ea2QQaXx3PYkHes.svg" 
            alt="logo" />
        </div>

    
        <div className="absolute">
        <img className="w-screen h-screen object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ffa9d590-69c5-406f-bff9-e2ced3baa6ad/web/IN-en-20260713-TRIFECTA-perspective_75c0557e-9bbb-4149-9913-b87d4d7a30b7_large.jpg" 
        alt=""/>
        </div>

      <form onSubmit={(e)=> e.preventDefault()} className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">

        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ?"Sign In" : "Sign Up"}
          </h1>

        {!isSignInForm && (<input 
        ref={name}
        type="text" 
        placeholder="Enter Full Name" 
        className="p-4 my-4 w-full bg-gray-700 rounded-md" />)}

        <input 
        ref={email}
        type="text" 
        placeholder="Enter E-mail address" 
        className="p-4 my-4 w-full bg-gray-700 rounded-md" />

        <input 
        ref={password}
        type="password" 
        placeholder="Password" 
        className="p-4 my-4 w-full bg-gray-700 rounded-md"/>

          <p className="font-bold text-red-500">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg"
         onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

        <p className="py-6 cursor-pointer underline" 
          onClick={toggleSignInForm}>{isSignInForm ?"New to Netflix? Sign Up Now.." : "Already User ? Sign In Now"}
        </p>
      </form>

    </div>


  )
}

export default Login
