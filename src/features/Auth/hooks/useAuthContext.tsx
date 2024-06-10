import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


export default function useAuthContext() {
  const ctx = useContext(AuthContext)

  if(!ctx) throw Error("AuthContext must me used by components wrapped by AuthContext.Provider")

  return ctx
}
