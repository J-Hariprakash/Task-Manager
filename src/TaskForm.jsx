import React, { useState } from 'react'
const TaskForm = ({taskInfo}) => {
    const [taskName,setTaskName] = useState("")
 
    const handleChange = (e)=>{
        e.preventDefault();
        if(taskName.trim()){
            taskInfo(taskName)
        }
        setTaskName("")
        
    }

  return (
    <div>
        <form onSubmit={handleChange}>
            <div className='m-4 relative left-4'>
                <input type='text'  value = {taskName} placeholder='Enter a Task'
                className='rounded-xl border-gray-500 border-2 text-2xl p-2' name= "taskName" onChange={(e)=>setTaskName(e.target.value)}></input>
                <button type='submit' className='bg-green-600 p-2 rounded-xl w-20 ml-2'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default TaskForm