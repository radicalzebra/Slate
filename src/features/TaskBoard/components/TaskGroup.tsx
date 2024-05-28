import AddTaskToGroup from './AddTaskToGroup';
import TaskGroupHeader from './TaskGroupHeader';
import TaskSection from './TaskSection';

export default function TaskGroup() {
  return (
    <main className={` m-6 flex flex-col gap-2 w-1/6`}>
      <TaskGroupHeader numberOfTask='4'/>
      <TaskSection/>
      <AddTaskToGroup/>
    </main>
  )
}
