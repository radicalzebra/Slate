import  React, { type ReactNode , useState, type ComponentPropsWithoutRef } from 'react'

type DropDownProps = {
   heading:string
   children:ReactNode
   className?:string
}

type DropDownOptionProps = {
   text:string,
   onSelectValue?:(value:string) => void
   closeDropDown? : () => void
} & ComponentPropsWithoutRef<'li'>


const DropDownOption = ({text,className,onSelectValue,closeDropDown,onClick,...props}:DropDownOptionProps) => {

   const onClickHandler = () => {
     if(typeof onSelectValue !== "undefined" && typeof closeDropDown !== "undefined") {
       onSelectValue(text)
       closeDropDown()
     }

   }
   
   return (
      <li onClick={onClickHandler} className={`text-2xl text-gray-400 cursor-pointer hover:text-gray-900 ${className}`} {...props}>{text}</li>
   )
}

export default function DropDown({heading,children,className}:DropDownProps) {
  const [showList,setShowList] = useState(false) 
  const [value,setValue] = useState("")

  const onSelectValue = (value:string) => {
   setValue(value)
  }

  const closeDropDown = () => {
    setShowList(false)
  }

  const onClickHandler = () => {
    setShowList(state => !state)
  }

  return (
    <section className={`select-none min-w-fit w-60 flex flex-col  bg-red-90  ${className} `}>
      <div className={`flex items-center justify-between font-semibold  p-4 border-gray-300 border-2 ${showList ? "rounded-t-2xl border-b-0":" rounded-xl"} min-w-fit transition-all`} onClick={onClickHandler}>
         <h3 className='text-2xl text-gray-950 font-semibold '>{value !== "" ? value:heading}</h3>
         <div className={` flex flex-col ${showList && " scale-105 "}`} >
          <p className='text-gray-400 text-xs font-semibold'>{"▲"}</p>
          <p className='text-gray-400 text-xs font-semibold'>{"▼"}</p>
         </div>
      </div>

      {
         showList && (
           <ul className='flex flex-col px-4 p-2 gap-2  rounded-b-2xl border-2 border-gray-300 transition-all font-semibold '>

            {React.Children.map(children,(child)=> {
               if(React.isValidElement<DropDownOptionProps>(child) && child.props.text!==value)  {
                  return React.cloneElement(child, {onSelectValue,closeDropDown})
               }
            })}

           </ul>
         )
      }
      
    </section>
  )
}

DropDown.Option = DropDownOption
