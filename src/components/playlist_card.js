import * as React from "react"
import { RichText } from "prismic-reactjs"
import Img from "gatsby-image"

const PlaylistCard = ({ url, title, featured, cover }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer nofollower"
      to="/"
      className="block p-4 bg-gray-900/30 hover:bg-yellow-400/20 hover:text-yellow-400 transition duration-300 rounded-xl border border-white/10"
    >
      <Img />
      <img src={cover} alt="Playlist Cover" className="w-full mb-8" />
      <h2>{title}</h2>
      <p className="text-xs mt-4">Featured:</p>
      {RichText.asText(featured)}
    </a>
  )
}

export default PlaylistCard
