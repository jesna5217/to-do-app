import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Folder from './Components/Folder'
import Header from './Components/Header'
import Done from './Components/Done'
import { Route,Routes } from 'react-router-dom'
import Not from './Components/Not'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="main"  >
    
     <Header/>
     <Routes>
      <Route path={'/done'} element={<Done/>}/>
      <Route path='/not' element={<Not/>}/>
     <Route path='/' element={<Folder/>}/>
     </Routes>

     </div>
    </>
  )
}

export default App
// style={{backgroundColor:'#113f67'}}