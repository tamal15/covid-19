import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect, useState } from "react";

import init from "../Component/Home/firebase/firebase.init";

init()

const useFirebase=()=>{
    const [isLoading, setIsLoading] = useState(true);
    const [user,setUser]=useState({})


    const auth = getAuth();
    const Googleprovider = new GoogleAuthProvider();



    const GoogleLogin=()=>{
     
        return signInWithPopup(auth, Googleprovider)
           // .then(result=>{
           //     console.log(result.user)
           //     setUser(result.user);
           // })
       }

       useEffect(()=>{
        onAuthStateChanged (auth,user=>{
            if(user){
                setUser(user)
            }
            setIsLoading(false);
        })
    },[])

    const logout=()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        // swal("Logout Successful!", "You are logged out!", "success");
        // history.push('/login')
    
    }

       return {
           GoogleLogin,
           user,
           isLoading,
           setUser,
           logout
       }
}
export default useFirebase;

