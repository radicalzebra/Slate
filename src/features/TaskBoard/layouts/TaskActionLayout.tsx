import { type ComponentPropsWithRef } from "react"
import LayoutActionManagementProvider from "../context/LayoutActionManagement"


type TaskActionLayoutProps = ComponentPropsWithRef<"nav">

export default function TaskActionLayout({children,...props}:TaskActionLayoutProps) {
  return (
    <nav {...props}>
      <LayoutActionManagementProvider>  
        {children}
      </LayoutActionManagementProvider>
    </nav>
  )
}
