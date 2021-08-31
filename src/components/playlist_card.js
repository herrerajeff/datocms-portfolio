import * as React from "react"
import Img from "gatsby-image"

const PlaylistCard = ({ url, title, featured, cover }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer nofollower"
      to="/"
      className="block p-4 hover:bg-black/50 hover:text-yellow-400 transition duration-300 rounded-xl border border-white/20 hover:border-yellow-400/70 relative overflow-hidden object-cover"
    >
      <Img
        fluid={cover}
        alt="Playlist Cover"
        className="inset-0 -z-10 blur-xl opacity-40 rotate-180"
        style={{ position: "absolute" }}
      />
      <Img
        fluid={cover}
        alt="Playlist Cover"
        className="w-full mb-8 shadow-xl"
      />
      <h2>{title}</h2>
      <p className="text-xs mt-4 text-white/50">Featured:</p>
      <p className="text-white/70">{featured}</p>
    </a>
  )
}

export default PlaylistCard
