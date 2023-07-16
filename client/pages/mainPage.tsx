import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Title from '../components/Title/Title'
function MainPage() {
  const [scrollPosition, setScrollPositiion] = useState(0)
  const [showBackgroundVideo, setShowBackgroundVideo] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY
      setScrollPositiion(currentPosition)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (scrollPosition >= window.innerHeight) {
      setShowBackgroundVideo(true)
    }
  }, [scrollPosition])

  return (
    <div className="min-h-screen bg-black">
      <img
        src="public/pics/_20220617nib_milkyway.jpg"
        alt="universe"
        className={`flex items-center justify-center w-screen h-screen transition-opacity duration-1000 ${
          showBackgroundVideo ? 'opacity-0' : 'opacity-100'
        }
  `}
  {showBackgroundVideo && (
    <div className="bg-video-container">
  )}
      />
      <div className="text-center">
        <Title />

        <Header />
        <Footer />
      </div>
    </div>
  )
}

export default MainPage
