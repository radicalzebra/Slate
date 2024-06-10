
import { type ComponentPropsWithRef } from 'react';

type IconProps = ComponentPropsWithRef<"img">

export default function Icon({className,...props}:IconProps) {
   
  return (
    <img  className={`w-8  ${className}`} {...props}/>
  )
}
