import * as React from "react"

const CasaCard = ({ url, name }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer nofollower"
      to="/"
      className="text-sm font-medium tracking-wider px-3 py-2 rounded bg-white/5 hover:text-black hover:bg-white/90 transition duration-150 flex items-center"
    >
      <img
        src={`https://www.google.com/s2/favicons?domain_url=${url}`}
        alt="favicon"
        className="block w-3 h-3 mr-2"
      />
      {name}
    </a>
  )
}

export default CasaCard
