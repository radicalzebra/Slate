type TaskGroupHeaderProps = {
  title:string
  numberOfTask:string
}

export default function TaskGroupHeader({numberOfTask,title}:TaskGroupHeaderProps) {
  return (
    <header className='mb-4'>

      <section className='flex items-center justify-between'>

       <div className="flex items-center gap-2">
          <p className='text-xl font-semibold text-gray-400 p-3 px-1'>{title}</p>
          <p className="text-lg  px-2 font-medium text-gray-600 shadow-sm shadow-gray-200 rounded-lg">{numberOfTask}</p>
       </div>  

       <div className='flex items-center gap-4 px-1'>
         <button className='text-3xl  font-semibold text-gray-400 hover:text-gray-950'>+</button>
         <button className='text-xl font-semibold text-gray-400 hover:text-gray-950'>•••</button>
       </div>

      </section>

      <div className='bg-blue-600  rounded-full h-0.5'></div>
    </header>
  )
}
