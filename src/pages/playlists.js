import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PlaylistCard from "../components/playlist_card"

const Playlists = ({ data }) => {
  const playlist = data.allDatoCmsPlaylist.nodes

  return (
    <Layout>
      <Seo title="Playlists" />
      <div className="container mt-12 2xl:mt-20">
        <div className="mx-auto text-center">
          <h1 className="text-yellow-400 mb-4">Playlists</h1>
          <h3>
            This is the music that keeps me going.{" "}
            <br className="visible md:hidden" />
            Let's jam.
          </h3>
          <div className="text-xs mt-6 bg-gray-900 py-2 px-4 rounded-full flex-none inline-flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            Links are Spotify only.
          </div>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
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
