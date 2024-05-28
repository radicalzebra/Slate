import  { type ComponentPropsWithRef } from 'react'
import CustomFlag from './CustomFlag'
import user1 from "../../../assets/user1.jpg"
import user2 from "../../../assets/user2.jpg"
import TaskCardFooter from './TaskCardFooter'

//heading
//date
//priority
//images(of task leaders (upto 3))

export type TaskProps = {
   title:string,
   date:string,
   priority:"Low" | "Normal" | "High"
} & ComponentPropsWithRef<"div">

export default function ({title,date,priority,className,...props}:TaskProps) {
  return (
    <div className={` border-2 border-gray-200 min-h-56 h-fit p-3 min-w-fit flex flex-col justify-between gap-12 rounded-xl cursor-default select-none ${className}`} {...props}>

      <section className='flex flex-col gap-6'>
         <h3 className='text-2xl  font-semibold'>{title}</h3>

         <section className={`flex flex-col gap-3`}>
            <div className='flex gap-2'>
               <p className='text-xl  text-gray-500 font-semibold bg-gray-100 p-2 rounded-lg'>{date}</p>
               <CustomFlag priority={priority}/>
            </div>

            <figure className='flex'>
               <img src={user1} className=' h-8 w-8  rounded-full'/>
               <img src={user2} className=' h-8 w-8 -translate-x-1/2  rounded-full'/>
            </figure>
         </section>


      </section>

      <TaskCardFooter commentNum="4" peopleNum="3"/>

    </div>
  )
}
