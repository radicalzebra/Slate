import DropDown from "./components/DropDown";
import TaskArrangementLayout from "./features/TaskBoard/components/TaskArrangementLayout";
import TaskGroup from "./features/TaskBoard/components/TaskGroup";


function App() {


  return (
    <> 
    <div className="flex items-start">
       <TaskArrangementLayout/>

       <div className="w-80 m-4 ">
         <DropDown heading="Filter" >
            <DropDown.Option text={"Priority"}/>
            <DropDown.Option text={"New"}/>
            <DropDown.Option text={"Deadline"}/>
            <DropDown.Option text={"Working"}/>
         </DropDown>
       </div>
    </div>

   <div className="flex">
    <TaskGroup/>
    <TaskGroup/>
    <TaskGroup/>
   </div>
    </>
  )
}

export default App
