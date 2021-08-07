import * as React from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby"
// import { motion } from "framer-motion"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import htmlSerializer from "../utils/html_serializer"
import { RichText } from "prismic-reactjs"

const Taco = ({ data }) => {
  const document = data.allPrismicTaco.edges[0].node.data

  const tacoContent = {
    title: document.title.text,
    featured: document.featured,
    background: document.background,
  }

  return (
    <Layout>
      <Seo title="taco" />
      <div className="fixed">
        <div
          className="text-6xl font-serif text-white leading-tight w-full"
          style={{ fontFamily: "Comic Sans" }}
        >
          {RichText.asText(tacoContent.title)}
        </div>
      </div>
    </Layout>
  )
}

export const tacoquery = graphql`
  query TacoPage {
    allPrismicTaco {
      edges {
        node {
          data {
            background {
              url
            }
            featured {
              url
            }
            title {
              text
            }
          }
        }
      }
    }
  }
`

export default Taco
