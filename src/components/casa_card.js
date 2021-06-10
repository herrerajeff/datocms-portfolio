import * as React from "react"

const CasaCard = ({ children }) => {
  return (
    <a
      href="http://www.google.com"
      target="_blank"
      rel="noreferrer nofollower"
      to="/"
      className="aspect-w-3 aspect-h-4 bg-gray-300 rounded-lg"
    >
      {children}
    </a>
  )
}

export default CasaCard
