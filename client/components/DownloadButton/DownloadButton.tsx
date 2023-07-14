function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = 'public/cv/Tems_CV_JUNE_2023.pdf'
    link.download = 'Tems_CV_JUNE_2023.pdf'
    link.click()
    link.remove
  }

  return (
    <div>
      <button
        className=" text-white items-center justify-center"
        onClick={handleDownload}
      >
        Download my CV
      </button>
    </div>
  )
}

export default DownloadButton
