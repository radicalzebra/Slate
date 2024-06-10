import { useNavigate } from 'react-router-dom'
import signInWithGoogle from '../features/Auth/lib/signInWithGoogle'
import {Log} from "../features/Auth/index" 

function Login() {
  const navigate = useNavigate()

  const onClickHandler = async () => {

   const result = await signInWithGoogle()
   const user = result.user

   if(!user) throw Error("Unable to login, Please try again")

   navigate("/dash")

  }

  return (
   <>
    <Log/>
    <button  onClick={onClickHandler} className='text-3xl bg-gray-100 text-black border-2 rounded-lg p-4'>
      SignIn
    </button>
   </>
  )
}

export default Login