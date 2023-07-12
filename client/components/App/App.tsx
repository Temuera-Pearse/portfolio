import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'

function App() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
export default App
