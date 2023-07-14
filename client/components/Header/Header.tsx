import { Suspense, lazy, useState } from 'react'
import DownloadButton from '../DownloadButton/DownloadButton'

function Header() {
  return (
    <div>
      <DownloadButton />
      <p> im the header </p>
    </div>
  )
}

export default Header
