import React from 'react'
import { useState } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import { useContext } from 'react'
import { User } from './User_login'

const TaskManager = () => {
  const submits = useContext(User);
  const [tasks,setTasks] = useState([])

const addTask = (text) =>{
    const newTask = {text:text,status:'',delButton:''}
    setTasks([...tasks,newTask])       
}
const handleStatus = (e, index) => {
    const check = e.target.checked;
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          status: check ? true : false,delButton:check? true : false,
        };
      }
      return task;  
    });
    setTasks(updatedTasks);
  };

  const handleDelete = (index)=>{
    const updatedTasks = tasks.filter((task,i)=>{
      return i!== index;
    });
    setTasks(updatedTasks)
  }

  return (
    <div>
       <h1  className='text-3xl font-semibold font-sans capitalize mt-6'>Welcome Back , <span className='text-4xl font-bold font-sans '>{submits.name}</span></h1>
    <div className='text-2xl flex flex-col items-center relative top-16 right-16'>
      <h1 className='text-6xl font-semibold m-4'>Task Manager</h1>
      <TaskForm taskInfo = {addTask}/>
      <TaskList tasks= {tasks} handleCheck={handleStatus} handleDelButton ={handleDelete} />
      <p>No of Tasks : {tasks.length}</p>
    </div>
      
      
    </div>
   
  )
}
export default TaskManager