import React from 'react'
import SymbolGallery from './symbolGallery'

const SymbolBar: React.FC = () => {
  const imageUrls = [
    'public/symbols/htmlLogo.png',
    'public/symbols/cssLogo.png',
    'public/symbols/javascriptLogo.png',
    'public/symbols/nodeLogo.png',
    'public/symbols/reactLogo.png',
    'public/symbols/jestLogo.png',
    'public/symbols/reactQueryLogo.png',
    'public/symbols/typescript.png',
    'public/symbols/reduxLogo.png',
  ]

  return (
    <div>
      <SymbolGallery images={imageUrls} />
    </div>
  )
}

export default SymbolBar
