import * as React from "react"

const CasaCard = ({ url, name }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer nofollower"
      to="/"
      className="text-xs font-medium tracking-wider px-3 py-2 rounded-full bg-white/5 hover:text-white hover:bg-white/40 transition duration-300 flex items-center"
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
