import { useState } from 'react'
import LoginButton from './LoginButton'


export default function LoginPageLeft() {
  
 const [clicked, setClick]  = useState(false)

  const onClickHandler = async () => {
   setClick(true)
   setTimeout(()=> {
    setClick(false)
   },1000)

  }

  return (
    <section onClick={onClickHandler} className={`flex flex-col gap-20 relative bg-red-90`}>
      {/* 3d background button */}
      <div className={`flex justify-center absolute top-2 w-full h-full bg-pink-5 z-10  transition-all ${clicked && " scale-0"}`}>
        <LoginButton showIcon={false}/>
      </div>

      <div className={`flex justify-center bg-blue-20 z-20 transition-all ${clicked && " scale-90"}`}>
        <LoginButton/>
      </div>
    </section>
  )
}
