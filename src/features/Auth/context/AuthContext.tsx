import { type ReactNode, createContext} from "react";
import UseIsAuthenticated from "../hooks/IsAuthenticated";
import { UserLoginType } from "../utils/defaultTypes";

export const AuthContext = createContext<UserLoginType | null>(null)

export const AuthContextProvider = ({children}:{children:ReactNode}) => {
   const user = UseIsAuthenticated()

   return <AuthContext.Provider value={user}>
             {children}
   q      </AuthContext.Provider>
}