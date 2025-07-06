import React from 'react'
const TaskList = ({tasks,handleCheck,handleDelButton}) => {  
  return (
    <div >
        <ul>
            {tasks.map((task,index)=>{
              return(
                <li key={index} className='flex justify-between capitalize bg-amber-500 p-2 pl-3 m-2 rounded-2xl w-auto'>
                    <input type="checkbox" onChange={(e)=>handleCheck(e,index)}></input>
                    <span className={`ml-2   ${task.status=== true? 'line-through' : ''}`} >{task["text"]}</span>
                    {task.delButton == true && (
                    <button type='button' onClick={()=>handleDelButton(index)} className= 'bg-red-500  ml-14 text-white px-2 py-1  rounded-xl text-lg'>Delete</button>
                    )}
                </li>
              )
            })}
        </ul>
    </div>
  )
}
export default TaskList