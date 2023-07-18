function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = 'public/cv/Tems_CV_JUNE_2023.pdf'
    link.download = 'Tems_CV_JUNE_2023.pdf'
    link.click()
    link.remove
  }

  return (
    <div className="flex justify-center">
      <button
        className="relative inline-flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-3xl font-semibold rounded-lg transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        onClick={handleDownload}
      >
        <span>Download my CV</span>
        <div className="absolute inset-0 bg-white opacity-0 hover:opacity-5 rounded-lg transition-opacity duration-300"></div>
      </button>
    </div>
  )
}

export default DownloadButton
