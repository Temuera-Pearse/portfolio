import React from 'react'
import SymbolGallery from './symbolGallery'

const SymbolBar: React.FC = () => {
  const imageUrls = [
    'public/symbols/kisspng-website-development-javascript-html5-css3-cascadin-appload-comprehensive-software-and-mobile-app-de-5b7b834e216377.0246733915348211981368.png',
    'public/symbols/nodeLogo.png',
    'public/symbols/reactLogo.png',
    'public/symbols/jestLogo.png',
    'public/symbols/reactQueryLogo.png',
    'public/symbols/typescript.png',
    'public/symbols/reduxLogo.png',
    'public/symbols/insomniaLogo.png',
  ]

  return (
    <div>
      <SymbolGallery images={imageUrls} />
    </div>
  )
}

export default SymbolBar
