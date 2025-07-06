import React from 'react'
import './App.css'
import TaskManager from './TaskManager'
import User_login from './User_login'
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import { User } from './User_login'
import { useState } from 'react'

const App = () => {
  const [userData, setUserData] = useState(null);

  return ( 
    <User.Provider value={userData}>
        <BrowserRouter>
          <div>
            <nav>
              <Link to='/' className='text-2xl font-bold bg-amber-600 p-2 rounded-xl relative top-5 left-3'>Login</Link>
            </nav>
          </div>
            <Routes>
                <Route path='/' element={<User_login setUserData={setUserData}/>} />
                <Route path='/TaskManager' element={<TaskManager/>} /> 
            </Routes>
        </BrowserRouter>
    </User.Provider>
  )
}
export default App
