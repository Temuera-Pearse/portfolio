import { Link } from 'react-router-dom'

function EnterButton() {
  return (
    <div>
      <Link to="/MainPage">
        <button className="z-10 absolute bottom-0 top-0 left-0 right-0 place-content-center">
          Welcome click anywhere to enter
        </button>
      </Link>
    </div>
  )
}
export default EnterButton
