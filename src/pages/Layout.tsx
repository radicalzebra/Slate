import {Outlet, useNavigate } from "react-router-dom"
import SplitScreen from "../layouts/SplitScreen"
import Navigations from "../components/Navigations"
import MyNavLink from "../components/MyNavLink"
import dashboardSvg from "../assets/dashboard.svg"
import settingsSvg from "../assets/settings.svg"
import notesSvg from "../assets/notes.svg"
import taskSvg from "../assets/task.svg"
import logoutSvg from "../assets/logout.svg"
import documentsSvg from "../assets/documents.svg"

import Icon from "../components/Icon"
import { AuthContextProvider } from "../features/Auth/context/AuthContext"
import signOut from "../features/Auth/lib/signOut"

export default function Layout() {
    
  
  return (
    
    <SplitScreen className="flex gap-8 ">

       <SplitScreen.left className="w-2/12 p-4 flex flex-col gap-9">

          <h1 className="text-3xl p-4 font-bold">Slate</h1>

          <Navigations childElement={MyNavLink} className=" ">
              <Navigations.Item to={"/dash"} >
                <Icon src={dashboardSvg}/>
                Dashboard
              </Navigations.Item>

              <Navigations.Item to={"/notes"}>
                <Icon src={notesSvg}/>
                Notes
              </Navigations.Item>

              <Navigations.Item to={"/task"} >
                <Icon src={taskSvg}/>
                Tasks
              </Navigations.Item>

              <Navigations.Item to={"/documents"}>
                <Icon src={documentsSvg}/>
                Documents
              </Navigations.Item>

              <Navigations.Item to={"/settings"}>
                <Icon src={settingsSvg}/>
                Settings
              </Navigations.Item>

              <Navigations.Item to={"/signup"} onClick={signOut}>
                <Icon src={logoutSvg}/>
                Logout
              </Navigations.Item>

          </Navigations>
       </SplitScreen.left>

       <SplitScreen.right className="w-10/12 p-4 px-6 rounded-lg  border-2">
         <AuthContextProvider>
           <Outlet/>
         </AuthContextProvider>
       </SplitScreen.right>

    </SplitScreen>
  )
}
