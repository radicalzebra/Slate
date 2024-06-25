export type UserLoginType =  { 
   email:string | null,
   photo:string | null,
   name:string | null,
   uid:string | null
}





export type PostTaskDataType = TaskType & AutoTaskType
export type UpdateTaskDataType = Partial<TaskType>  //With this definition, UpdateTaskDataType will have the same properties as TaskType (title, description, priority, and due), but each property can be either the corresponding type in TaskType or null.
export type TaskType = {
   title:string,
   description:string,
   priority:"High" | "Normal" | "Low",
   due:string,
   group:string
}

type AutoTaskType = {
   createdAt:string,
   creator:string,
   email:string
}



