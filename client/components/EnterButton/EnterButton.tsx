import { Link } from 'react-router-dom'
import MainPage from '../../pages/mainPage'

function EnterButton() {
  return (
    <div>
      <Link to="/MainPage">
        <button>enter</button>
      </Link>
    </div>
  )
}
export default EnterButton
