import { Outlet } from 'react-router-dom'
import Header from './Header/header'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'

function App() {
  return (
    <div>
      <section className="main">
        <div className="left-top">
          <Header />
        </div>
      </section>
      <Outlet />
    </div>
  )
}
export default App
