import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Title from '../components/Title/Title'
import Paragraph_1 from '../components/Paragraphs/Paragraph_1'
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
        {...(showBackgroundVideo && (
          <div className="bg-video-container">
            {
              <video
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                autoPlay
                muted
                loop
              >
                <source
                  src="landingBackground/IMG_1419.mp4"
                  type="video/mp4"
                ></source>
              </video>
            }
          </div>
        ))}
      />
      <div
        className={` transition-opacity duration-1000 delay-1000 ${
          showBackgroundVideo ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>

      <div className="flex justify-center">
        <Title />
      </div>
      <div className="flex justify-center">
        <Header />
      </div>
      <div className="flex justify-center">
        <Paragraph_1 />
      </div>
      <Footer />
    </div>
  )
}

export default MainPage
