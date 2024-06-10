import React, { type ComponentPropsWithoutRef, type ReactNode, type ElementType } from "react"

type NavigationProps<T extends ElementType> = {
  childElement:T,
  className:string
  children:ReactNode
} 

type NavigationItemProps<T extends ElementType> = {
  element?:ElementType,
}  & ComponentPropsWithoutRef<T>


export default function Navigations<C extends ElementType>({childElement,className,children}:NavigationProps<C>) {

  return (
    <ul className={`flex flex-col gap-4 h-1/2 justify-start bg-red-90  ${className}`}>
        {React.Children.map(children,(child)=> {
          if(React.isValidElement<NavigationItemProps<C>>(child)) {
            return  React.cloneElement<NavigationItemProps<C>>(child, { element: childElement } as Partial<NavigationItemProps<C>>);
          }

          return child
        })}
    </ul>
  )
}

function Item<C extends ElementType>({element,children,className,...props}:NavigationItemProps<C>) {

   const Element = element || "li"

   return (
      <Element className={`text-2xl hover:text-black p-4 rounded-xl font-semibold text-gray-400 flex gap-4 ${className}`} {...props}>{children}</Element>
   )
}


Navigations.Item = Item
