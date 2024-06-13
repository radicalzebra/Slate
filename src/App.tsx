import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Task from "./pages/Task"
import Layout from "./pages/Layout"
import Login from "./pages/Login"






const router = createBrowserRouter([
  {
    path:"/signup",
    element:<Login/>
  },

  {
    path:"/",
    element:<Layout />,
    errorElement:<p className="text-4xl">"Error"</p>,
    children:[
      {index:true,element:<Task/>},
      {path:"dash",element:<Task/>},
      {path:"notes",element:<Task/>},
      {path:"task",element:<Task/>},
      {path:"documents",element:<Task/>},
      {path:"settings",element:<Task/>},
      {path:"logout",element:<Task/>}
    ]
  }
])



function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
