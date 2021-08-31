import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Taco = ({ data }) => {
  const document = data.datoCmsTaco

  return (
    <Layout background={document.background.url}>
      <Seo title="taco" />
      <div>
        <div className="text-center">
          <h2
            className="inline-block text-6xl font-serif leading-tight taco-marquee"
            style={{
              fontFamily: "Comic Sans MS, Comic Sans, cursive",
              color: "lime",
            }}
          >
            {document.title}
          </h2>
        </div>
        <div className="text-center mt-8 container">
          <Img
            className="border-2 border-white taco-spin w-1/2 mx-auto"
            fluid={document.featuredImage.fluid}
            alt="Jeff Herrera Portrait"
          />
          <div className="flex md:justify-between items-center flex-wrap justify-center mx-auto mt-12">
            {document.glitters.map(image => {
              return (
                <div className="object-contain w-72">
                  <Img fluid={image.fluid} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const tacoquery = graphql`
  query TacoPage {
    datoCmsTaco {
      title
      featuredImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      glitters {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      background {
        url
      }
    }
  }
`

export default Taco
