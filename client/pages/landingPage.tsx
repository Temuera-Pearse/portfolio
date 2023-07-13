import EnterButton from '../components/EnterButton/EnterButton'
import Footer from '../components/Footer/Footer'

function LandingPage() {
  return (
    <div>
      <video className="w-full" autoPlay muted loop>
        <source src="landingBackground/IMG-1401.mp4" type="video/mp4"></source>
      </video>
      <EnterButton />
      <p>this is the landing page</p>
      <Footer />
    </div>
  )
}

export default LandingPage
