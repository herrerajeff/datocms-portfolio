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
      <div className="container md:mt-24">
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="w-full group">
            <h2>Design</h2>
            <div className="grid lg:grid-cols-2 gap-3 py-4">
              {design.map(link => {
                return <CasaCard url={link.url} name={link.title} />
              })}
            </div>
          </div>
          <div className="w-full group">
            <h2>Misc</h2>
            <div className="grid lg:grid-cols-2 gap-3 py-4">
              {misc.map(link => {
                return <CasaCard url={link.url} name={link.title} />
              })}
            </div>
          </div>
          <div className="w-full group">
            <h2>Dev</h2>
            <div className="grid lg:grid-cols-2 gap-3 py-4">
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
