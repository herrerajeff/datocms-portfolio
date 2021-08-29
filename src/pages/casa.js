import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CasaCard from "../components/casa_card"

const Home = ({ data }) => {
  const design = data.design.nodes
  const misc = data.misc.nodes
  const dev = data.dev.nodes

  return (
    <Layout>
      <Seo title="Casa" />
      <div className="container xl:mt-24">
        <h1 className="mx-auto text-center mb-8 text-yellow-400">Casa.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start overflow-hidden">
          <div className="grid grid-rows-auto bg-gray-900/30 hover:bg-yellow-400/10 transition duration-300 rounded-xl py-4 border border-white/10 first:rounded-xl group">
            <div className="grid grid-cols-2 grid-rows-auto gap-4 p-4">
              {design.map(link => {
                return <CasaCard url={link.url} name={link.title} />
              })}
            </div>
          </div>
          <div className="grid grid-rows-auto bg-gray-900/30 hover:bg-yellow-400/10 transition duration-300 rounded-xl py-4 border border-white/10 group">
            <h2 className="mb-4 p-4 border-b border-white/10 group-hover:text-yellow-400 transition duration-300">
              Misc
            </h2>
            <div className="grid grid-cols-2 grid-rows-auto gap-4 p-4">
              {misc.map(link => {
                return <CasaCard url={link.url} name={link.title} />
              })}
            </div>
          </div>
          <div className="grid grid-rows-auto bg-gray-900/30 hover:bg-yellow-400/10 transition duration-300 rounded-xl py-4 border border-white/10 group">
            <h2 className="mb-4 p-4 border-b border-white/10 group-hover:text-yellow-400 transition duration-300">
              Dev
            </h2>
            <div className="grid grid-cols-2 grid-rows-auto gap-4 p-4">
              {dev.map(link => {
                return <CasaCard url={link.url} name={link.title} />
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
    design: allDatoCmsCasa(
      filter: { category: { elemMatch: { category: { eq: "Design" } } } }
    ) {
      nodes {
        url
        title
        category {
          originalId
          category
        }
      }
    }
    misc: allDatoCmsCasa(
      filter: { category: { elemMatch: { category: { eq: "Misc" } } } }
    ) {
      nodes {
        url
        title
        category {
          originalId
          category
        }
      }
    }
    dev: allDatoCmsCasa(
      filter: { category: { elemMatch: { category: { eq: "Dev" } } } }
    ) {
      nodes {
        url
        title
        category {
          originalId
          category
        }
      }
    }
  }
`

export default Home
