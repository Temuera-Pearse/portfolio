import EnterButton from '../components/EnterButton/EnterButton'

function LandingPage() {
  return (
    <div className='<div className="flex justify-center items-center h-screen overflow-hidden">'>
      <video className="h-full w-screen object-cover" autoPlay muted loop>
        <source src="landingBackground/IMG-1401.mp4" type="video/mp4"></source>
      </video>
      <EnterButton />
    </div>
  )
}

export default LandingPage
