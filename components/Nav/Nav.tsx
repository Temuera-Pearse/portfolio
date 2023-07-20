import { useNavigate, useParams } from 'react-router-dom'

interface Props {
  toggleMenu: () => void
}

function Nav(props: Props) {
  const navigate = useNavigate()
}

function goTo(link: string) {
  props.toggleMenu()
  navigate(link)
}

return (
  <nav className="mt-10 pt-16 pl-4 flex">
    <ul className="text-3xl">
      <button onClick={() => goTo(`/${Number(locationId)}`)}>Home</button>) : (
      <button onClick={() => goTo('/')}>Home</button>
    </ul>
  </nav>
)
