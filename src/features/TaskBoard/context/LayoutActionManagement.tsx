import { type ReactNode, createContext, useState } from "react";

type LayoutActionManagementProps = {
  currentActionId:string,
  onClickAction: (id:string) => void
}

export const LayoutActionManagementContext = createContext<LayoutActionManagementProps>({
   currentActionId:"",
   onClickAction : () => {}
})

const LayoutActionManagementProvider = ({children}:{children:ReactNode}) => {

   const [inActionId,setInActionId] = useState("board")
   
   const onClickAction = (id:string) => {
      setInActionId(id)
   }

   return (
      <LayoutActionManagementContext.Provider value={{onClickAction,currentActionId:inActionId}}>
         {children}
      </LayoutActionManagementContext.Provider>
   )
}

export default LayoutActionManagementProvider