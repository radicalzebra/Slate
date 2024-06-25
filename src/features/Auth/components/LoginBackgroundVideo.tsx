import { useEffect, useRef } from "react";
import LoginVideo from "../assets/LoginVideo.mp4"

export default function LoginBackgroundVideo() {

  const vidRef= useRef<HTMLVideoElement>(null!);

  useEffect(() => { 
   vidRef.current.play()
  },[]);

  return (
     <video className="object-cover h-full w-full" ref={vidRef} autoPlay={true} muted loop>
      <source src={LoginVideo} type="video/mp4"  />
    </video>
  )
}
