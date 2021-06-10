import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WritingList = [
  { name: "The one thing you need to know about design", tag: "Thoughts" },
  { name: "On Inspiration", tag: "Thoughts" },
  { name: "May '21", tag: "Recent" },
  { name: "How to change", tag: "Thoughts" },
  { name: "Figma for Brand Marketing Teams", tag: "Thoughts" },
  { name: "Things I Use", tag: "Tools" },
  { name: "On Iteration", tag: "Thoughts" },
]

const Writing = () => (
  <Layout>
    <Seo title="Writing" />
    <div className="container mt-48">
      <h1 className="text-3xl text-yellow-400 mb-12">2020</h1>
      <div className="grid grid-cols-5 gap-8">
        <div className="rounded-xl bg-white bg-opacity-10 p-6 flex-col justify-between items-between col-span-2 transition duration-300">
          <Link
            to="/"
            className="flex-grow block h-48 text-xl text-white hover:text-yellow-400 font-bold group text-3xl"
          >
            Monthly Playlists
            <p className="transform -translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition duration-300">
              →
            </p>
          </Link>
          <Link
            to="/"
            className="flex-shrink flex-grow-0 self-end text-xs rounded-full bg-white bg-opacity-10 hover:bg-opacity-100 hover:text-black py-1 px-3 inline-block"
          >
            Featured ›
          </Link>
        </div>
        {WritingList.map(WritingList => (
          <div className="rounded-xl bg-white bg-opacity-10 p-6 flex-col justify-between items-between">
            <Link
              to="/"
              className="flex-grow block h-48 text-xl text-white hover:text-yellow-400 font-bold group"
            >
              {WritingList.name}
              <p className="transform -translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition duration-300">
                →
              </p>
            </Link>
            <Link
              to="/"
              className="flex-shrink flex-grow-0 self-end text-xs rounded-full bg-white bg-opacity-10 hover:bg-opacity-100 hover:text-black py-1 px-3 inline-block"
            >
              {WritingList.tag} ›
            </Link>
          </div>
        ))}
      </div>
    </div>
  </Layout>
)

export default Writing
