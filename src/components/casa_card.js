import * as React from "react"

const CasaCard = ({ url, name }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer nofollower"
      to="/"
      className="flex items-center rounded-full border border-white/10 px-3 py-2 text-sm font-medium transition duration-200 hover:bg-white/90 hover:text-black"
    >
      <img
        src={`https://www.google.com/s2/favicons?domain_url=${url}`}
        alt="favicon"
        className="mr-2 block h-3 w-3"
      />
      {name}
    </a>
  )
}

export default CasaCard
