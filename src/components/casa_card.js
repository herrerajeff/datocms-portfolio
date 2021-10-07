import * as React from "react"

const CasaCard = ({ url, name }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer nofollower"
      to="/"
      className="text-sm px-4 py-3 border border-white/10 hover:border-white/20 rounded-xl hover:bg-yellow-400/20 hover:text-white transition duration-300 flex items-center"
    >
      <img
        src={`https://www.google.com/s2/favicons?domain_url=${url}`}
        alt="favicon"
        className="block w-5 h-5 mr-2 bg-white border-2 border-white rounded-full"
      />
      {name}
    </a>
  )
}

export default CasaCard
