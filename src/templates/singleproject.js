import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    datoCmsProject(slug: { eq: $slug }) {
      title
      results {
        model {
          apiKey
        }
        stat
        statDescription
      }
      description
      featureImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        url
      }
      projectType
      projectArticle {
        ... on DatoCmsSectionCopy {
          bodyNode {
            childMarkdownRemark {
              html
            }
          }
          headingNode {
            childMarkdownRemark {
              html
            }
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
        ... on DatoCmsVideo {
          id
          video {
            url
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsVideoExternal {
          id
          videoExternal {
            providerUid
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
        ... on DatoCmsHalfImage {
          id
          leftImage {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
          rightImage {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
          model {
            apiKey
          }
        }
      }
      color {
        hex
      }
    }
  }
`

const SingleProject = ({ data }) => {
  const project = data.datoCmsProject
  const noResults = data.datoCmsProject.results.length > 0

  return (
    <Layout>
      <Seo title={project.title} image={project.featureImage.url} />
      <div
        className="pt-28 -mt-40 -mx-16 relative overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 100%, ${project.color.hex} 0%, #000 85%)`,
          backgroundPosition: "50% 200%",
        }}
      >
        <div className="absolute inset-0 blur-lg opacity-50 mix-blend-multiply">
          <GatsbyImage
            className="w-full grayscale"
            image={project.featureImage.gatsbyImageData}
          />
        </div>
        <div className="pt-4 md:pt-32 pb-40 md:pb-48 text-center">
          <h2 className="w-80 md:w-full mx-auto text-center text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-tight">
            {project.title}
          </h2>
          <p className="container-thin text-sm md:text-xl w-full px-16 lg:w-3/5 xl:w-1/2 text-white mt-2 mx-auto">
            {project.description}
          </p>
          <hr className="w-12 h-px bg-white mt-4 md:mt-8 opacity-60 mx-auto" />
          <p className="container px-16 text-xs md:text-sm text-white/60 mt-4 md:mt-8">
            Product Design, Information Architecture, UX, E-Commerce
          </p>
        </div>
      </div>
      <div className="pt-12 flex flex-col w-full min-h-full items-stretch">
        <div className="container flex-grow flex-shrink-0 ">
          <GatsbyImage
            className="w-full -mt-40 rounded"
            style={{ boxShadow: "0 -24px 64px rgba(0,0,0,0.3)" }}
            image={project.featureImage.gatsbyImageData}
          />
          <div className="md:mt-24">
            {project.projectArticle.map(block => (
              <div key={block.id}>
                {block.model.apiKey === "section_copy" && (
                  <div className="mt-16 md:mb-8 lg:mt-44 lg:mb-32 grid gap-0 md:gap-12 md:grid-cols-2">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: block.headingNode.childMarkdownRemark.html,
                      }}
                      className="project-headings"
                    ></div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: block.bodyNode.childMarkdownRemark.html,
                      }}
                      className="mt-8 md:mt-0 space-y-8 text-base md:text-lg leading-relaxed"
                    ></div>
                  </div>
                )}
                {block.model.apiKey === "inline_image" && (
                  <GatsbyImage
                    layout="fullWidth"
                    className="w-full mt-12 rounded"
                    image={block.img.gatsbyImageData}
                  />
                )}
                {block.model.apiKey === "video" && (
                  <video
                    playsInline
                    autoPlay
                    muted
                    loop
                    className="w-full h-auto"
                  >
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
                {block.model.apiKey === "half_image" && (
                  <div className="grid md:grid-cols-2 gap-12">
                    <GatsbyImage
                      layout="fullWidth"
                      className="w-full mt-12 rounded self-start"
                      image={block.leftImage.gatsbyImageData}
                    />
                    <GatsbyImage
                      layout="fullWidth"
                      className="w-full h-auto mt-12 rounded self-start"
                      image={block.rightImage.gatsbyImageData}
                    />
                  </div>
                )}
                {block.model.apiKey === "video_external" && (
                  <div className="aspect-w-16 aspect-h-9 mt-12 block">
                    <iframe
                      className="w-full"
                      src={`https://www.youtube.com/embed/${block.videoExternal.providerUid}`}
                      frameBorder="0"
                      title={project.title}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          {noResults && (
            <div className="mt-24 mb-12">
              <h3 className="uppercase text-white font-bold text-sm tracking-[0.2em]">
                Results
              </h3>
              <div className="px-12 py-8 text-center md:text-left grid md:grid-cols-3 content-around gap-12 bg-white mt-4 rounded-xl">
                {project.results.map(block => (
                  <div key={block.id}>
                    {block.model.apiKey === "result" && (
                      <div className="flex-column">
                        <h3 style={{ color: `${project.color.hex}` }}>
                          {block.stat}
                        </h3>
                        <p className="text-3xl font-bold text-black uppercase">
                          {block.statDescription}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default SingleProject
