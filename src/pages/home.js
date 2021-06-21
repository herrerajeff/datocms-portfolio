import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const DesignLinks = [
  { name: "Brand New", url: "http://www.underconsideration.com/brandnew/" },
  { name: "Dieline", url: "http://www.thedieline.com/" },
  { name: "SiteInspire", url: "http://siteinspire.com/" },
  { name: "Httpster", url: "https://httpster.net/" },
  { name: "Front End Front", url: "https://frontendfront.com/" },
  { name: "Khroma", url: "http://khroma.co/generator/" },
  { name: "Trace", url: "https://www.stickermule.com/trace" },
]

const MiscLinks = [
  { name: "YouTube", url: "https://www.youtube.com/feed/subscriptions" },
  { name: "Spotify", url: "https://open.spotify.com/" },
  { name: "Twitch", url: "https://www.twitch.tv/directory/following" },
  { name: "Twitter", url: "https://www.twitter.com" },
  { name: "Amazon", url: "https://smile.amazon.com" },
  { name: "Seamless", url: "https://www.seamless.com" },
  { name: "Netflix", url: "https://www.netflix.com" },
  {
    name: "Prime Video",
    url:
      "https://www.amazon.com/Amazon-Video/b/?&node=2858778011&ref=dvm_MLP_ROWNA_US_1",
  },
  { name: "Hulu", url: "https://www.hulu.com" },
  { name: "HBO", url: "https://www.hbomax.com" },
]

const DevLinks = [
  {
    name: "Unicode Symbols",
    url: "https://www.toptal.com/designers/htmlarrows/",
  },
  { name: "SVG OMG", url: "https://jakearchibald.github.io/svgomg/" },
  { name: "PNG IMG", url: "http://pngimg.com/" },
  { name: "Brand Colors", url: "https://brandcolors.net/" },
  { name: "TinyPNG", url: "https://tinypng.com/" },
  { name: "Gif Optimizer", url: "https://ezgif.com/optimize" },
  { name: "Upscale", url: "https://www.stickermule.com/upscale" },
  { name: "Mesh Gradient", url: "https://www.meshgradient.com" },
  { name: "Spline", url: "https://www.spline.design" },
]

const Home = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container md:mt-12">
      <h1 className="mx-auto text-center mb-8 text-yellow-400">Home.</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start overflow-hidden">
        <div className="grid grid-rows-auto bg-gray-900/30 hover:bg-yellow-400/10 transition duration-300 rounded-xl py-4 border border-white/10 first:rounded-xl group">
          <h2 className="mb-4 p-4 border-b border-white/10 group-hover:text-yellow-400 transition duration-300">
            Design
          </h2>
          {DesignLinks.map(DesignLink => (
            <a
              href={DesignLink.url}
              className="text-sm px-4 py-3 hover:bg-yellow-400/10 hover:text-white transition duration-300 flex items-center"
              target="_blank"
              rel="noopener noreferrer nofollower"
            >
              <img
                src={`https://www.google.com/s2/favicons?domain_url=${DesignLink.url}`}
                alt="favicon"
                className="block w-5 h-5 mr-2 bg-white border-2 border-white rounded-full"
              />
              {DesignLink.name}
            </a>
          ))}
        </div>
        <div className="grid grid-rows-auto bg-gray-900/30 hover:bg-yellow-400/10 transition duration-300 rounded-xl py-4 border border-white/10 group">
          <h2 className="mb-4 p-4 border-b border-white/10 group-hover:text-yellow-400 transition duration-300">
            Misc
          </h2>
          {MiscLinks.map(MiscLink => (
            <a
              href={MiscLink.url}
              className="text-sm px-4 py-3 hover:bg-yellow-400/10 hover:text-white transition duration-300 flex items-center"
              target="_blank"
              rel="noopener noreferrer nofollower"
            >
              <img
                src={`https://www.google.com/s2/favicons?domain_url=${MiscLink.url}`}
                alt="favicon"
                className="block w-5 h-5 mr-2 bg-white border-2 border-white rounded-full"
              />
              {MiscLink.name}
            </a>
          ))}
        </div>
        <div className="grid grid-rows-auto bg-gray-900/30 hover:bg-yellow-400/10 transition duration-300 rounded-xl py-4 border border-white/10 group">
          <h2 className="mb-4 p-4 border-b border-white/10 group-hover:text-yellow-400 transition duration-300">
            Dev
          </h2>
          {DevLinks.map(DevLink => (
            <a
              href={DevLink.url}
              className="text-sm px-4 py-3 hover:bg-yellow-400/10 hover:text-white transition duration-300 flex items-center"
              target="_blank"
              rel="noopener noreferrer nofollower"
            >
              <img
                src={`https://www.google.com/s2/favicons?domain_url=${DevLink.url}`}
                alt="favicon"
                className="block w-5 h-5 mr-2 bg-white border-2 border-white rounded-full"
              />
              {DevLink.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export default Home
