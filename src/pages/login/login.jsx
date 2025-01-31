import { useState } from "react"
import "./login.css";

export default function LoginPage(){

    const [email,setEmail] = useState("");
    const [password,setPassword]=useState("");

    function handleOnSubmit(e){
        e.preventDefault()
        console.log(email,password)
    }


    return(
        
        <div className="w-full h-screen bg-picture flex items-center justify-center">
            <form onSubmit={handleOnSubmit}>
            <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-2xl flex justify-center items-center flex-col relative">
                <img src="/logo.png" className="w-[110px] h-[110px] absolute top-1 object-cover"/>

                <input type= "email"  placeholder="Email" className="  mt-6 w-[300px] h-30px] bg-transparent border-b-2 border-white text-white text-xl outline-none "value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                
                <input type= "password" placeholder="Password" className="mt-6 w-[300px] h-[30px] bg-transparent border-b-2 border-white text-white text-xl outline-none "value={password} onChange={(e)=>{
                   setPassword(e.target.value)
                }}/>

                <button className="w-[300px] h-[50px] bg-[#efac38] text-2xl text-white rounded-lg my-8" >Login</button>

            </div>
            </form>
        </div>
    )
}