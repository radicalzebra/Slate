import signInWithGoogle from '../lib/signInWithGoogle'
import { useNavigate } from 'react-router-dom'
import googleSvg from "../assets/google.svg"


type LoginButtonProps = {
  showIcon?:boolean
}
export default function LoginButton({showIcon=true}:LoginButtonProps) {
  const navigate = useNavigate()

  const onClickHandler = async () => {
   
   await signInWithGoogle()
   navigate("/dash")

  }

  return (
   <button onClick={onClickHandler} className={`h-28 w-full p-4 rounded-full flex gap-8 items-center border-2 border-gray-500 bg-white cursor-pointer `}>
     {showIcon && <img src={googleSvg} className='h-full' />}
   </button>
  )
}
