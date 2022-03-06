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
      <div className="container md:mt-12">
        <div className="grid gap-12 sm:grid-cols-3">
          <div className="group w-full rounded-xl border border-white/10 px-4 py-2 transition-colors duration-200 hover:bg-white/5">
            <h2 className="mb-1 border-b border-white/10 pb-2 text-xl font-black uppercase text-yellow-400">
              Design
            </h2>
            <div className="grid gap-5 py-4 lg:grid-cols-2">
              {design.map(link => {
                return <CasaCard url={link.url} name={link.title} />
              })}
            </div>
          </div>
          <div className="group w-full rounded-xl border border-white/10 px-4 py-2 transition-colors duration-200 hover:bg-white/5">
            <h2 className="mb-1 border-b border-white/10 pb-2 text-xl font-black uppercase text-yellow-400">
              Misc
            </h2>
            <div className="grid gap-5 py-4 lg:grid-cols-2">
              {misc.map(link => {
                return <CasaCard url={link.url} name={link.title} />
              })}
            </div>
          </div>
          <div className="group w-full rounded-xl border border-white/10 px-4 py-2 transition-colors duration-200 hover:bg-white/5">
            <h2 className="mb-1 border-b border-white/10 pb-2 text-xl font-black uppercase text-yellow-400">
              Dev
            </h2>
            <div className="grid gap-5 py-4 lg:grid-cols-2">
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
      sort: { order: ASC, fields: meta___publishedAt }
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
      sort: { order: ASC, fields: meta___publishedAt }
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
      sort: { order: ASC, fields: meta___publishedAt }
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
