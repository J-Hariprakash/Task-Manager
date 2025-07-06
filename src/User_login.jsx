import {  createContext, useState } from "react";
import { useNavigate } from "react-router";
export const User = createContext(null);

function User_login({ setUserData })
{
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [nameError,setNameError] = useState(false)
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [passwordError,setPasswordError] = useState(false);
    const handleChange = (event)=>{
        const {name,value} = event.target;

        if(name==="name"){
            if(value.length <3){
                setNameError("Name is too short")
            }
            setName(value);
        }
        else if (name ==="email"){
            setEmail(value)
        }
        else if(name==="password"){
            setPassword(value);
            const pwds = ["prakash","6969","helloworld","12583"]
            
            if(value.length <4){
                setPasswordError("Password is too short");
            }
          
            else if(pwds.includes(value)){
                setPassword(value);
                setPasswordError(false);
            }
            else{
                    setPasswordError("Password mismatch found")
                }
            }
        }
            
    const handleSubmit = (event)=>{
            event.preventDefault();
           if (!passwordError) {
            setUserData({ name, email, password });
            navigate('/TaskManager')
        }
    }
        
            
    return(
            <form  onSubmit={handleSubmit} >
                   <div className="flex flex-col fixed left-30 top-20 ">
                      <label className="font-mono  font-bold text-5xl text-gray-700 mt-1 mb-1 ">Name </label>
                      <input type="text" 
                       className=" bg-blue-100 rounded-lg border-2 text-2xl w-120 h-12 p-4 mt-1 mb-1 "  
                       placeholder="Enter your name" name="name" value={name} onChange={handleChange} required/> 
                      {nameError && <p style ={{color:"red",fontSize:"18px"}}>{nameError}</p>}
                      <label className="font-mono font-bold text-5xl text-gray-700  mt-1 mb-1 ">Email</label>
                      <input type="email"  className="  bg-blue-100  rounded-lg border-2 text-2xl w-120 h-12  p-4 mt-1 mb-1 "  placeholder="Enter your email"  name = "email" onChange={handleChange}  value={email} required/>
                      <label className="font-mono font-bold text-5xl text-gray-700 mt-1 mb-1 ">Password </label>
                      <input type="password" className=" bg-blue-100  rounded-lg border-2 text-2xl w-120 h-12 p-4 mt-1 mb-1 hover:outline-amber-500 focus:outline-red-600" placeholder="Enter password" name = "password" onChange={handleChange} value={password}  required/>
                      {passwordError && <p  style ={{color:"red",fontSize:"18px"}}>{passwordError}</p>}
                      <button type="submit" className="bg-green-600  border-2 rounded-lg  text-2xl  border-green-950  w-sm h-14   mt-3 mb-1 hover:bg-green-700">Submit</button>
                   </div>
           </form >
    )
}
export default User_login


              