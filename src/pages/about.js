import * as React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import Seo from "../components/seo"
import htmlSerializer from "../utils/html_serializer"
import CustomLink from "../utils/custom_link"
import { RichText } from "prismic-reactjs"

const About = ({ data }) => {
  // const document = data.prismicAbout

  // const aboutContent = {
  //   quote: document.quote,
  //   attribution: document.attribution,
  //   portrait: document.portrait,
  //   about_me: document.about_me,
  // }

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
        <img
          className="absolute bottom-0 filter grayscale mix-blend-multiply opacity-40 md:opacity-75"
          // src={aboutContent.portrait.url}
          alt="Jeff Herrera Portrait"
        />
      </motion.div>
      <Seo title="About" />
      <div className="container-thin mt-24">
        <h1 className="text-6xl font-serif text-white leading-tight">
          {/* {RichText.asText(aboutContent.quote.raw)} */}
        </h1>
        <p className="text-sm mt-4">
          {/* {RichText.asText(aboutContent.attribution.raw)} */}
        </p>
        <div className="prose-lg mt-12">
          {/* <RichText
            render={aboutContent.about_me.raw}
            htmlSerializer={htmlSerializer}
            serializeHyperlink={CustomLink}
          /> */}
        </div>
      </div>
    </Layout>
  )
}

// export const aboutquery = graphql`
//   query AboutPage {
//     prismicAbout {
//       data {
//         quote {
//           raw
//         }
//         portrait {
//           url
//           alt
//         }
//         attribution {
//           raw
//         }
//         about_me {
//           raw
//         }
//       }
//     }
//   }
// `

export default About
