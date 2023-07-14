import EnterButton from '../components/EnterButton/EnterButton'

function LandingPage() {
  return (
    <div className="bg-black">
      <div className="flex justify-center items-center h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          autoPlay
          muted
          loop
        >
          <source
            src="landingBackground/IMG-1401.mp4"
            type="video/mp4"
          ></source>
        </video>
        <EnterButton />
      </div>
    </div>
  )
}

export default LandingPage
