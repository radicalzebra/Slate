import TaskArrangementLayout from './TaskArrangementLayout'
import DropDown from '../../../components/DropDown'
import SearchTask from './SearchTask'
import AddTaskButton from './AddTaskButton'

export default function TaskHeader({className}:{className?:string}) {
  return (
    <header className={`bg-red-90 flex items-start justify-between ${className}`}>
      
      <TaskArrangementLayout className='w-1/4'/>
      

      <section className='flex items-start justify-end gap-2 w-2/4  bg-blue-10 '>
         <SearchTask/>
         <DropDown  heading="Filter">
            <DropDown.Option text={"Priority"}/>
            <DropDown.Option text={"New"}/>
            <DropDown.Option text={"Date"}/>
            <DropDown.Option text={"Working"}/>
         </DropDown>
         <AddTaskButton/>
      </section>
    </header>
  )
}
