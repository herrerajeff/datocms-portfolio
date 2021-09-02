import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

// const Posts = [
//   {
//     name: "The one thing you need to know about design",
//     tag: "Thoughts",
//     id: 1,
//   },
//   { name: "On Inspiration", tag: "Thoughts", id: 2 },
//   { name: "May '21", tag: "Recent", id: 3 },
//   { name: "How to change", tag: "Thoughts", id: 4 },
//   { name: "Figma for Brand Marketing Teams", tag: "Thoughts", id: 5 },
//   { name: "Things I Use", tag: "Tools", id: 6 },
//   { name: "On Iteration", tag: "Thoughts", id: 7 },
// ]

const Writing = ({ data }) => {
  const article = data.articles.nodes
  const featured = data.featured.nodes

  return (
    <Layout>
      <Seo title="Writing" />
      <div className="container-thin mt-0 md:mt-20">
        <h2 className="mb-8 md:mb-24 font-serif text-center text-3xl md:text-5xl text-white font-light">
          Writing
        </h2>
        <div className="flex-col">
          {featured.map(featured => (
            <div
              className="border border-white/20 hover:border-yellow-400/70 rounded-lg flex justify-between items-center transition duration-300 bg-black/60 relative group mb-8"
              key={featured.id}
            >
              <Img
                className="w-80 -z-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"
                style={{ position: "absolute" }}
                fluid={featured.featuredImage.fluid}
              />
              <Link
                to={featured.slug}
                className="flex-col w-full text-xl text-white hover:text-yellow-400 font-bold group p-8"
              >
                <p className="article__title">{featured.title}</p>
                <p className="text-sm font-light text-gray-400">
                  {featured.description}
                </p>
                <p className="text-xs mt-4 font-light text-gray-600">
                  {featured.meta.publishedAt}
                </p>
              </Link>
              {/* <Link
                to="/"
                className="flex-none tracking-wide text-xs text-white rounded-full bg-white/10 hover:bg-white hover:text-black py-2 px-4 inline-block transition duration-300 mb-8 md:mb-0 md:mr-8"
              >
                {article.category.tag} ›
              </Link> */}
            </div>
          ))}
          {article.map(article => (
            <div
              className="border border-white/20 hover:border-yellow-400/70 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center transition duration-300 bg-black/70 relative group mb-8"
              key={article.id}
            >
              <Img
                className="w-96 -z-10 left-1/2 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"
                style={{ position: "absolute" }}
                fluid={article.featuredImage.fluid}
              />
              <Link
                to={article.slug}
                className="flex-col w-full text-xl text-white hover:text-yellow-400 font-bold group p-8"
              >
                <p className="article__title mb-2">{article.title}</p>
                <p className="text-sm font-light text-gray-400">
                  {article.description}
                </p>
                <p className="text-xs tracking-wide mt-6 font-light text-gray-500">
                  {article.meta.publishedAt}
                </p>
              </Link>
              {/* <Link
                to="/"
                className="flex-none tracking-wide text-xs text-white rounded-full bg-white/10 hover:bg-white hover:text-black py-2 px-4 inline-block transition duration-300 mb-8 md:mb-0 ml-8 md:ml-0 md:mr-8"
              >
                {article.category.tag} ›
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Writing

export const writingQuery = graphql`
  query writingkPage {
    featured: allDatoCmsBlog(
      filter: { category: { tag: { in: "Featured" } } }
    ) {
      nodes {
        title
        description
        slug
        meta {
          publishedAt(formatString: "MMMM DD, YYYY")
        }
        category {
          tag
        }
        featuredImage {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
    articles: allDatoCmsBlog(
      filter: { category: { tag: { ne: "Featured" } } }
    ) {
      nodes {
        title
        description
        slug
        meta {
          publishedAt(formatString: "MMMM DD, YYYY")
        }
        category {
          tag
        }
        featuredImage {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`
