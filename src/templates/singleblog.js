import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    datoCmsBlog(slug: { eq: $slug }) {
      article {
        ... on DatoCmsVideoExternal {
          id
          videoExternal {
            url
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsInlineImage {
          id
          img {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsCallout {
          id
          calloutNode {
            childMarkdownRemark {
              html
            }
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsArticleText {
          id
          textNode {
            childMarkdownRemark {
              html
            }
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsFigure {
          id
          caption
          image {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          model {
            apiKey
          }
        }
      }
      featuredImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      slug
      title
      meta {
        publishedAt(formatString: "MMMM DD, YYYY")
      }
      category {
        tag
      }
    }
  }
`

const SingleBlog = ({ data }) => {
  const article = data.datoCmsBlog

  return (
    <Layout>
      <Seo title={article.title} />
      <div className="md:mt-24 text-center">
        <h2 className="w-80 md:w-full mx-auto text-center text-3xl md:text-5xl font-serif text-white leading-tight">
          {article.title}
        </h2>
        <p className="text-xs tracking-wide mt-2 font-light text-gray-500">
          {article.meta.publishedAt}
        </p>
      </div>

      <div className="mt-8 mx-auto text-center">
        <Link
          to="/writing"
          className="inline-block btn bg-white/10 border-transparent"
        >
          &larr; Writing
        </Link>
      </div>
      <article className="container mx-auto mb-12">
        <Img
          className="w-full mt-12 rounded"
          fluid={article.featuredImage.fluid}
        />
        {article.article.map(block => (
          <div key={block.id}>
            {block.model.apiKey === "article_text" && (
              <div
                dangerouslySetInnerHTML={{
                  __html: block.textNode.childMarkdownRemark.html,
                }}
                className="md:mt-12 text-base md:text-lg md:leading-[2rem] article__style container-thin"
              ></div>
            )}
            {block.model.apiKey === "inline_image" && (
              <Img
                className="w-full h-112 mt-12 rounded"
                fluid={block.img.fluid}
              />
            )}
            {block.model.apiKey === "figure" && (
              <div>
                <Img
                  className="w-full mt-12 md:mt-20 rounded"
                  fluid={block.image.fluid}
                />
                <p className="text-xs mt-4">{block.caption}</p>
              </div>
            )}
            {block.model.apiKey === "video" && (
              <video playsInline autoPlay muted loop className="w-full h-auto">
                <source type="video/mp4" src={block.video.url} />
              </video>
            )}
            {block.model.apiKey === "callout" && (
              <div
                dangerouslySetInnerHTML={{
                  __html: block.calloutNode.childMarkdownRemark.html,
                }}
                className="w-full mt-12 bg-white rounded-xl text-xl md:text-3xl callout px-12 py-10 md:px-24 md:py-16"
              ></div>
            )}
          </div>
        ))}
        <div className="mt-12 md:mt-24 mx-auto text-center">
          <Link
            to="/writing"
            className="inline-block btn bg-white/10 border-transparent"
          >
            &larr; Writing
          </Link>
        </div>
      </article>
    </Layout>
  )
}

export default SingleBlog
