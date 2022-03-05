import * as React from "react"

const CasaCard = ({ url, name }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer nofollower"
      to="/"
      key={url}
      className="flex items-center overflow-hidden rounded-full border border-white/10 pr-3 text-sm font-medium transition duration-200 hover:bg-yellow-400 hover:text-black"
    >
      <img
        src={`https://icon.horse/icon/?uri=${url}`}
        className="mr-3 block h-7 w-7 rounded-full bg-white object-contain p-[0.5rem]"
        alt="favicon"
      />
      {name}
    </a>
  )
}

export default CasaCard
