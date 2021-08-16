import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PlaylistCard from "../components/playlist_card"

const Playlists = ({ data }) => {
  const playlist = data.allDatoCmsPlaylist.nodes
  const randomPlaylist = playlist[Math.floor(Math.random() * playlist.length)]

  return (
    <Layout>
      <Seo title="Playlists" />
      <div className="container mt-12 2xl:mt-20">
        <div className="mx-auto text-center">
          <h1 className="text-yellow-400 mb-4">Playlists</h1>
          <p className="text-base md:text-xl">
            This is the music that keeps me going. <br className="md:hidden" />
            Let's jam.
          </p>
          <a
            href={randomPlaylist.url}
            target="_blank"
            rel="nofollower noreferrer"
            className="btn text-sm mt-6 bg-gray-900 py-2 px-4 rounded-full flex-none inline-flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              aria-hidden="true"
              viewBox="0 0 640 512"
            >
              <path
                d="M592 192H473.26c12.69 29.59 7.12 65.2-17 89.32L320 417.58V464c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V240c0-26.51-21.49-48-48-48zM480 376c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm-46.37-186.7L258.7 14.37c-19.16-19.16-50.23-19.16-69.39 0L14.37 189.3c-19.16 19.16-19.16 50.23 0 69.39L189.3 433.63c19.16 19.16 50.23 19.16 69.39 0L433.63 258.7c19.16-19.17 19.16-50.24 0-69.4zM96 248c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                fill="currentColor"
              />
            </svg>
            Feeling Lucky? Roll the dice.
          </a>
        </div>
        <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {playlist.map(playlist => {
            return (
              <PlaylistCard
                url={playlist.url}
                title={playlist.title}
                featured={playlist.featured}
                cover={playlist.cover.gatsbyImageData}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const playlistquery = graphql`
  query playlists {
    allDatoCmsPlaylist(sort: { fields: date, order: DESC }) {
      nodes {
        title
        url
        featured
        date
        cover {
          gatsbyImageData(
            width: 700
            placeholder: BLURRED
            forceBlurhash: false
          )
        }
      }
    }
  }
`

export default Playlists
