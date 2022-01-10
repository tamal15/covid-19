import { useContext } from "react"
import { AuthContext } from "../Component/Home/Context/AurhProvider"


const useAuth=()=>{
    return useContext(AuthContext)
}
export default useAuth;