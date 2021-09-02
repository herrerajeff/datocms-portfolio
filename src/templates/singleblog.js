import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    datoCmsBlog(slug: { eq: $slug }) {
      article {
        ... on DatoCmsVideoExternal {
          id
          videoExternal {
            providerUid
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsInlineImage {
          id
          img {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
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
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
          model {
            apiKey
          }
        }
      }
      featuredImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
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
        <h2 className="w-80 md:w-full mx-auto text-center text-3xl md:text-5xl font-serif text-white leading-tight font-light">
          {article.title}
        </h2>
        <p className="text-xs tracking-wide mt-2 font-light text-gray-500">
          {article.meta.publishedAt}
        </p>
      </div>
      <article className="container mx-auto mb-12">
        <GatsbyImage
          className="w-full mt-12 rounded"
          image={article.featuredImage.gatsbyImageData}
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
              <GatsbyImage
                className="w-full h-112 my-12 md:my-24 rounded"
                image={block.img.gatsbyImageData}
              />
            )}
            {block.model.apiKey === "figure" && (
              <div className=" my-12 md:my-24 ">
                <GatsbyImage
                  className="w-full rounded"
                  image={block.image.gatsbyImageData}
                />
                <p className="text-xs mt-4">{block.caption}</p>
              </div>
            )}
            {block.model.apiKey === "video" && (
              <video playsInline autoPlay muted loop className="w-full h-auto">
                <source type="video/mp4" src={block.video.url} />
              </video>
            )}
            {block.model.apiKey === "video_external" && (
              <div className="mt-12">
                <iframe
                  className="aspect-w-16 aspect-h-9 w-full"
                  src={`https://www.youtube.com/embed/${block.videoExternal.providerUid}`}
                  frameBorder="0"
                  title={article.title}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
                />
              </div>
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
        <div className="mt-16 container-thin">
          <hr className="w-8 border-t border-white/20 pt-12" />
          <Link
            to="/writing"
            className="inline-block btn bg-white/10 border-transparent "
          >
            &larr; Writing
          </Link>
        </div>
      </article>
    </Layout>
  )
}

export default SingleBlog
