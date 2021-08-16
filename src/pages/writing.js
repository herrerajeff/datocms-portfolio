import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Posts = [
  {
    name: "The one thing you need to know about design",
    tag: "Thoughts",
    id: 1,
  },
  { name: "On Inspiration", tag: "Thoughts", id: 2 },
  { name: "May '21", tag: "Recent", id: 3 },
  { name: "How to change", tag: "Thoughts", id: 4 },
  { name: "Figma for Brand Marketing Teams", tag: "Thoughts", id: 5 },
  { name: "Things I Use", tag: "Tools", id: 6 },
  { name: "On Iteration", tag: "Thoughts", id: 7 },
]

const Writing = () => (
  <Layout>
    <Seo title="Writing" />
    <div className="container mt-12 2xl:mt-20">
      <h1 className="text-3xl text-yellow-400 mb-6">2020</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-6">
        <div className="rounded-xl bg-white/5 border border-white/20 hover:border-yellow-400/70 p-6 flex-col justify-between items-between col-span-2 transition duration-300">
          <Link
            to="/playlists"
            className="flex-grow block h-48 text-white hover:text-yellow-400 font-bold group text-3xl"
          >
            Monthly Playlists
            <p className="transform -translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition duration-300">
              →
            </p>
          </Link>
          <Link
            to="/"
            className="flex-shrink flex-grow-0 self-end text-xs rounded-full bg-white/5 hover:bg-white hover:text-black py-1 px-3 inline-block transition duration-300"
          >
            Featured ›
          </Link>
        </div>
        {Posts.map(Post => (
          <div
            className="rounded-xl bg-black border border-white/20 hover:border-yellow-400/70 p-6 flex-col justify-between items-between"
            key={Post.id}
          >
            <Link
              to="/"
              className="flex-grow block h-48 text-xl text-white hover:text-yellow-400 font-bold group"
            >
              {Post.name}
              <p className="transform -translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition duration-300">
                →
              </p>
            </Link>
            <Link
              to="/"
              className="flex-shrink flex-grow-0 self-end text-xs rounded-full bg-white/10 hover:bg-white hover:text-black py-1 px-3 inline-block transition duration-300"
            >
              {Post.tag} ›
            </Link>
          </div>
        ))}
      </div>
    </div>
  </Layout>
)

export default Writing
