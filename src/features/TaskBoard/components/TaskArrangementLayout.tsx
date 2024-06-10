import TaskActionLayout from '../layouts/TaskActionLayout'
import TaskLayoutButton from './TaskLayoutButton'
import board from "../assets/board.svg"
import calender from "../assets/calender.svg"
import list from "../assets/list.svg"

type TaskArrangementLayoutProps = {
  className:string
}

export default function TaskArrangementLayout({className}:TaskArrangementLayoutProps) {
  return (
     <TaskActionLayout className={`flex rounded-2xl p-1 bg-red-90  justify-between border-2 border-gray-300 select-none ${className}`}>

          <TaskLayoutButton id={"board"}>
            <TaskLayoutButton.Icon src={board} />
            <TaskLayoutButton.Content text={"Board"}/>
          </TaskLayoutButton>

          <TaskLayoutButton id={"list"}>
            <TaskLayoutButton.Icon src={list} />
            <TaskLayoutButton.Content text={"List"}/>
          </TaskLayoutButton>

          <TaskLayoutButton id={"calender"}>
            <TaskLayoutButton.Icon src={calender} />
            <TaskLayoutButton.Content text={"Calender"}/>
          </TaskLayoutButton>

      </TaskActionLayout>
  )
}
