import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CasaCard from "../components/casa_card"

// const DesignLinks = [
//   { name: "Brand New", url: "http://www.underconsideration.com/brandnew/" },
//   { name: "Dieline", url: "http://www.thedieline.com/" },
//   { name: "SiteInspire", url: "http://siteinspire.com/" },
//   { name: "Httpster", url: "https://httpster.net/" },
//   { name: "Front End Front", url: "https://frontendfront.com/" },
//   { name: "Khroma", url: "http://khroma.co/generator/" },
//   { name: "Trace", url: "https://www.stickermule.com/trace" },
// ]

// const MiscLinks = [
//   { name: "YouTube", url: "https://www.youtube.com/feed/subscriptions" },
//   { name: "Spotify", url: "https://open.spotify.com/" },
//   { name: "Twitch", url: "https://www.twitch.tv/directory/following" },
//   { name: "Twitter", url: "https://www.twitter.com" },
//   { name: "Amazon", url: "https://smile.amazon.com" },
//   { name: "Seamless", url: "https://www.seamless.com" },
//   { name: "Netflix", url: "https://www.netflix.com" },
//   {
//     name: "Prime Video",
//     url:
//       "https://www.amazon.com/Amazon-Video/b/?&node=2858778011&ref=dvm_MLP_ROWNA_US_1",
//   },
//   { name: "Hulu", url: "https://www.hulu.com" },
//   { name: "HBO", url: "https://www.hbomax.com" },
// ]

// const DevLinks = [
//   { name: "SVG OMG", url: "https://jakearchibald.github.io/svgomg/" },
//   { name: "PNG IMG", url: "http://pngimg.com/" },
//   { name: "Brand Colors", url: "https://brandcolors.net/" },
//   { name: "TinyPNG", url: "https://tinypng.com/" },
//   { name: "Gif Optimizer", url: "https://ezgif.com/optimize" },
//   { name: "Mesh Gradient", url: "https://www.meshgradient.com" },
//   { name: "Spline", url: "https://www.spline.design" },
//   { name: "NounProject", url: "https://thenounproject.com" },
// ]

const Home = ({ data }) => {
  const document = data.allPrismicCasa.edges[0].node.data.link

  return (
    <Layout>
      <Seo title="Casa" />
      <div className="container md:mt-24">
        <h1 className="mx-auto text-center mb-8 text-yellow-400">Casa.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start overflow-hidden">
          <div className="grid grid-rows-auto bg-gray-900/30 hover:bg-yellow-400/10 transition duration-300 rounded-xl py-4 border border-white/10 first:rounded-xl group">
            <h2 className="mb-4 p-4 border-b border-white/10 group-hover:text-yellow-400 transition duration-300">
              Design
            </h2>
            <div className="grid grid-cols-2 grid-rows-auto gap-4 p-4">
              {document
                .filter(link => link.category === "Design")
                .map(link => {
                  return <CasaCard url={link.link1.url} name={link.name.text} />
                })}
            </div>
          </div>
          <div className="grid grid-rows-auto bg-gray-900/30 hover:bg-yellow-400/10 transition duration-300 rounded-xl py-4 border border-white/10 group">
            <h2 className="mb-4 p-4 border-b border-white/10 group-hover:text-yellow-400 transition duration-300">
              Misc
            </h2>
            <div className="grid grid-cols-2 grid-rows-auto gap-4 p-4">
              {document
                .filter(link => link.category === "Misc")
                .map(link => {
                  return <CasaCard url={link.link1.url} name={link.name.text} />
                })}
            </div>
          </div>
          <div className="grid grid-rows-auto bg-gray-900/30 hover:bg-yellow-400/10 transition duration-300 rounded-xl py-4 border border-white/10 group">
            <h2 className="mb-4 p-4 border-b border-white/10 group-hover:text-yellow-400 transition duration-300">
              Dev
            </h2>
            <div className="grid grid-cols-2 grid-rows-auto gap-4 p-4">
              {document
                .filter(link => link.category === "Dev")
                .map(link => {
                  return <CasaCard url={link.link1.url} name={link.name.text} />
                })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const casaquery = graphql`
  query Casa {
    allPrismicCasa {
      edges {
        node {
          data {
            link {
              category
              name {
                text
              }
              link1 {
                url
              }
            }
          }
        }
      }
    }
  }
`

export default Home
