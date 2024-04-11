
import './App.css'
import HomePage from './pages/HomePage'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <div className=''>
      <Outlet/>
    </div>
  )
}

export default App
