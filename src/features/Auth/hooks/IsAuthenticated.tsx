import {useAuthState} from "react-firebase-hooks/auth"
import {auth , type AuthType} from "../lib/firebase"
import { type UserLoginType } from "../../../utils/Types"

export default function UseIsAuthenticated() {

   const [user] = useAuthState(auth as unknown as AuthType)

   if(!user) throw Error("Not logged In , Please login!")

   const userObj : UserLoginType = {
      email:user.email,
      photo:user.photoURL,
      name:user.displayName,
      uid:user.uid
   }

   return userObj
  
}
