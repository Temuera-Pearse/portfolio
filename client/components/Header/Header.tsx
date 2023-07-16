import { Suspense, lazy, useState } from 'react'
import DownloadButton from '../DownloadButton/DownloadButton'

function Header() {
  return (
    <div>
      <DownloadButton />
      <p className="text-white"> Welcome to my page </p>
    </div>
  )
}

export default Header
