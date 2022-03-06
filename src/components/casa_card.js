import * as React from "react"

const CasaCard = ({ url, name }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer nofollower"
      to="/"
      key={url}
      className="flex items-center overflow-hidden rounded-full border border-white/10 p-1 text-[13px] text-white/60 transition duration-200 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
    >
      <img
        src={`https://icon.horse/icon/?uri=${url}`}
        className="mr-3 block h-7 w-7 rounded-full bg-white object-contain p-[0.375rem]"
        alt="favicon"
      />
      {name}
    </a>
  )
}

export default CasaCard
