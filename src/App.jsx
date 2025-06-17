import { Routes,Route } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import Main from './Components/Main'
import MainNav from './Components/MainNav'





function App() {

  return (
    <>
      <Routes>
        <Route path='/' element= {<Login />} />
        <Route path='/main' element= {<MainNav />} />  
      </Routes>
      
    </>
  )
} 

export default App
