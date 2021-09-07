import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Taco = ({ data }) => {
  const document = data.datoCmsTaco

  return (
    <Layout background={document.background.url}>
      <Seo title="Taco" />
      <h2
        className="absolute block text-3xl md:text-6xl font-serif leading-tight z-10 left-0 right-0 -mx-8 taco-marquee"
        style={{
          fontFamily: "Comic Sans MS, Comic Sans, cursive",
          color: "lime",
        }}
      >
        {document.title}
      </h2>
      <div className="text-center mt-12 container">
        <GatsbyImage
          className="border-2 border-white taco-spin w-full md:w-1/2 mx-auto"
          image={document.featuredImage.gatsbyImageData}
          alt="Jeff Herrera Portrait"
        />
        <div className="flex md:justify-between items-center flex-wrap justify-center mx-auto mt-12">
          {document.glitters.map(image => {
            return (
              <div className="object-contain w-72 mb-8">
                <GatsbyImage image={image.gatsbyImageData} />
              </div>
            )
          })}
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
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      glitters {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      background {
        url
      }
    }
  }
`

export default Taco
