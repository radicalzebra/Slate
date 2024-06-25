import {TaskHeader} from "../features/TaskBoard/Index"
import {TaskBody} from "../features/TaskBoard/Index"
import useAuthContext from "../features/Auth/hooks/useAuthContext"


export default function Task() {

  const ctx = useAuthContext()

  console.log(ctx,"2")


  return (
    <main className=" flex flex-col gap-8 ">

    <div className="relative bg-red-90 h-32">
      <TaskHeader className="w-full absolute top-3"/>
    </div>


    <div className="flex gap-5">
      <TaskBody/>
      <TaskBody/>
      <TaskBody/>
      
    </div>
    </main>
  )
}
