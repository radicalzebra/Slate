import { NavLink } from 'react-router-dom'
import { type ComponentPropsWithoutRef } from 'react';

type MyNavLinkProps = ComponentPropsWithoutRef<typeof NavLink>

export default function MyNavLink({className,children,...props}:MyNavLinkProps) {

  return (
    <NavLink   className={ ({isActive}) => `${isActive ? `${className} bg-gray-100 text-black  *:brightness-0  `:`${className} text-gray-400`}` + className } {...props} end>
      {children}
     </NavLink>
  )
}
