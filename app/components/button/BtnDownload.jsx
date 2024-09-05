'use client'

import { handleDownload } from "@/app/services"

function BtnDownload() {
  const handleDownloadCV = () => {
    handleDownload('/CV/MUHAMMAD_NASRUDIN_FAHMI.pdf', 'MUHAMMAD_NASRUDIN_FAHMI.pdf')
      .catch(error => console.log('Error downloading CV: ', error.message))
  }

  return (
    <button
      type="button"
      className="px-7 py-2.5 mt-8 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-800 text-lg text-white font-medium rounded-lg"
      aria-label="Download CV"
      title="Download CV"
      onClick={handleDownloadCV}
    >
      Download CV
    </button>
  )
}

export default BtnDownload