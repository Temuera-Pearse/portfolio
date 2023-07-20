import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import EnterButton from '../EnterButton/EnterButton'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Outlet />
    </div>
  )
}
export default App
