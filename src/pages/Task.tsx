import {TaskHeader} from "../features/TaskBoard/Index"
import {TaskBody} from "../features/TaskBoard/Index"
import useAuthContext from "../features/Auth/hooks/useAuthContext"


export default function Task() {

  const ctx = useAuthContext()

  return (
    <main className=" flex flex-col gap-8 ">

    <div className="relative bg-red-90 h-32">
      <TaskHeader className="w-full absolute top-3"/>
    </div>

    <div className="flex gap-3">
      <TaskBody/>
      <TaskBody/>
      <TaskBody/>
      
    </div>
    </main>
  )
}