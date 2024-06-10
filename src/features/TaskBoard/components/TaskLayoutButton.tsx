import React, { type ComponentPropsWithoutRef, useContext } from "react"
import { LayoutActionManagementContext as Layoutcontext } from "../context/LayoutActionManagement"


type ButtonProps = ComponentPropsWithoutRef<"button"> & {id:string}
type ButtonIconProps = ComponentPropsWithoutRef<"img"> 
type ButtonContentProps = ComponentPropsWithoutRef<"p">  & {text:string}
type ButtonChildProps = ButtonContentProps | ButtonIconProps

const ButtonIcon = ({src,className,id,...props}:ButtonIconProps) => {
  const {currentActionId} = useContext(Layoutcontext)

  return (
    <img className={` w-8 h-8 transition-all ${currentActionId === id && " brightness-0"} ${className}`} src={src} {...props}/>
  )
}

const ButtonContent = ({className,id,text,...props}:ButtonContentProps) => {

  const {currentActionId} = useContext(Layoutcontext)

  return (
    <p className={`text-2xl text-gray-400 font-semibold transition-all ${currentActionId === id && " text-gray-950 "} ${className}`} {...props}>{text}</p>
  )
}

export default function TaskLayoutButton({onClick,className,children,id,...props}:ButtonProps) {

  const {onClickAction,currentActionId} = useContext(Layoutcontext)

  const onClickHandler = () => {

   if(currentActionId !== id) {
      onClickAction(id)
   }

  }

  return (
    <button onClick={onClickHandler}  className={`bg-red-90 min-w-fit p-3 flex justify-center items-center ${currentActionId === id && "  rounded-xl shadow-gray-300 shadow-sm"} ${className}`} {...props}>
      <div className="flex items-center  gap-2">
        {React.Children.map(children,(child)=>{

          if(React.isValidElement<ButtonChildProps>(child)) {
            return React.cloneElement(child,{id})
          }

          return child
        })}
      </div>
    </button>
  )
}

TaskLayoutButton.Icon = ButtonIcon
TaskLayoutButton.Content = ButtonContent