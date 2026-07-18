import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ()=>{
    const user = useSelector((store)=> store.user)
    const navigate = useNavigate()

    const handleSignOut = ()=>{
        signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/")
        }).catch((error) => {
        // An error happened.
        });
    }


   return( 
   <div className="absolute w-full px-8 py-6  z-10 flex justify-between">
    <img className="w-36" 
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAUkLCBtHBbguPPqzaFOzEv4Pw_eS79j0y7ADR4hkB30-HkahpsUb5yvfzgKsfU2oNda-7hpkfYLnXhjc23JVT07PHsGgfsaHAB7qOhy2_5gn-nuKOVSUSBzn-i-O3ea2QQaXx3PYkHes.svg" 
        alt="logo" />

        {user && (
            <div className="flex gap-1">
            <img className="w-10 rounded-md"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPU5gJUj46ufL6FQfX3XvM7lR7qtcMy63tuj2siLuUQ&s=10"
                 alt=""/>
            <button 
                 onClick={handleSignOut}
                 className="bg-red-600 rounded-lg p-2 text-white">
                 Sign Out
            </button>
      </div>
    )}


    </div>
   )
}

export default Header