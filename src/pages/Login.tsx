import { LoginAction, LoginBgVideo } from "../features/Auth/index"




function Login() {
  

  return (

   <main className="flex h-screen gap-8 relative">

    <LoginBgVideo/>

    <section className="w-full h-full flex items-center justify-center  bg-red-90 absolute ">
      <LoginAction/>
    </section>

   </main>
  )
}

export default Login