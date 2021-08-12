import * as React from "react"
// import { graphql } from "gatsby"
// import { Link } from "gatsby"
// import { motion } from "framer-motion"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Taco = ({ data }) => {
  // const document = data.prismicTaco

  // const tacoContent = {
  //   title: document.data.title.text,
  //   featured: document.data.featured,
  //   background: document.data.background,
  // }

  return (
    <Layout>
      <Seo title="taco" />
      <div className="fixed">
        <div
          className="text-6xl font-serif text-white leading-tight w-full"
          style={{ fontFamily: "Comic Sans" }}
        >
          {/* {RichText.asText(tacoContent.title)} */}
        </div>
      </div>
    </Layout>
  )
}

// export const tacoquery = graphql`
//   query TacoPage {
//     prismicTaco {
//       data {
//         background {
//           url
//         }
//         featured {
//           url
//         }
//         title {
//           text
//         }
//       }
//     }
//   }
// `

export default Taco
