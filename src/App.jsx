import { Routes,Route } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'





function App() {

  return (
    <>
      <Routes>
        <Route path='/' element= {<Login />} />
        <Route path='/dash' element= {<Dashboard />} />  
      </Routes>
      
    </>
  )
} 

export default App
