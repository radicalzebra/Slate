import TaskGroupHeader from './TaskGroupHeader';
import TaskSection from './TaskSection';

export default function TaskGroup() {
  return (
    <main className={` flex flex-col gap-2  mb-20`}>
      <TaskGroupHeader title='In progress' numberOfTask='4'/>
      <TaskSection/>
    </main>
  )
}
