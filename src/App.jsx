
import './App.css'
import { useAuth } from './components/AuthProvider'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { Outlet } from 'react-router-dom'
function App() {
  const {token} = useAuth()
  return (
    <div className=''>
     {token && <Navbar/>}
      <Outlet/>
    </div>
  )
}

export default App
