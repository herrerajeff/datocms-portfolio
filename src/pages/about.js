import * as React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data }) => {
  const document = data.datoCmsAbout
  const aboutContent = {
    quote: document.quote,
    attribution: document.quoteAttribution,
    portrait: document.portrait.gatsbyImageData,
    bio: document.bioNode.childMarkdownRemark.html,
  }

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 0.4, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{
          duration: 1.5,
        }}
        className="fixed md:w-104 inset-0 md:inset-y-0 bg-gradient-to-b from-black to-yellow-400/70 md:to-yellow-400 -z-10"
      >
        <GatsbyImage
          className="bottom-0 filter grayscale mix-blend-multiply opacity-40 md:opacity-75 w-full"
          style={{ position: "absolute" }}
          image={aboutContent.portrait}
          alt="Jeff Herrera Portrait"
        />
      </motion.div>
      <Seo title="About" />
      <div className="container-thin md:mt-24">
        <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight">
          {aboutContent.quote}
        </h1>
        <p className="text-sm mt-4">{aboutContent.attribution}</p>
        <div
          className="prose-lg mt-12"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsAbout.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </Layout>
  )
}

export const aboutquery = graphql`
  query aboutPage {
    datoCmsAbout {
      quote
      quoteAttribution
      portrait {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      bioNode {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
    }
  }
`

export default About
