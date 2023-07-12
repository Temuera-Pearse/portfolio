import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import EnterButton from '../EnterButton/EnterButton'

function App() {
  return (
    <div>
      <Outlet />
      <EnterButton />
    </div>
  )
}
export default App
