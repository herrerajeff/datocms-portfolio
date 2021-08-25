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
        fluid {
          base64
        }
        gatsbyImageData
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
            fluid {
              base64
            }
            gatsbyImageData
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsVideo {
          id
          videoExternal {
            url
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsHalfImage {
          id
          leftImage {
            fluid {
              base64
            }
            gatsbyImageData
          }
          rightImage {
            fluid {
              base64
            }
            gatsbyImageData
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

  return (
    <Layout>
      <Seo title={project.title} />
      <div
        className="pt-28 -mt-40 -mx-16 relative overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 100%, ${project.color.hex} 0%, #000 85%)`,
          backgroundPosition: "50% 200%",
        }}
      >
        <div className="absolute inset-0 blur-lg opacity-50 mix-blend-multiply">
          <GatsbyImage
            className="w-full"
            fluid={project.featureImage.fluid}
            image={project.featureImage.gatsbyImageData}
          />
        </div>
        <div className="pt-4 md:pt-32 pb-40 md:pb-48 text-center">
          <h2 className="w-80 md:w-full mx-auto text-center text-4xl md:text-7xl font-serif text-white leading-tight">
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
            fluid={project.featureImage.fluid}
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
                    className="w-full mt-12 rounded"
                    fluid={block.img.fluid}
                    image={block.img.gatsbyImageData}
                  />
                )}
                {block.model.apiKey === "half_image" && (
                  <div className="grid md:grid-cols-2 gap-12">
                    <GatsbyImage
                      className="w-full mt-12 rounded"
                      fluid={block.leftImage.fluid}
                      image={block.leftImage.gatsbyImageData}
                    />
                    <GatsbyImage
                      className="w-full mt-12 rounded"
                      fluid={block.rightImage.fluid}
                      image={block.rightImage.gatsbyImageData}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
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
        </div>
      </div>
    </Layout>
  )
}

export default SingleProject
