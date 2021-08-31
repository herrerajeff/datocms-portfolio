const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allDatoCmsProject {
        edges {
          node {
            slug
          }
        }
      }
      allDatoCmsBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  results.data.allDatoCmsProject.edges.forEach(edge => {
    const project = edge.node

    createPage({
      path: `/${project.slug}/`,
      component: require.resolve("./src/templates/singleproject.js"),
      context: {
        slug: project.slug,
      },
    })
  })

  results.data.allDatoCmsBlog.edges.forEach(edge => {
    const blog = edge.node

    createPage({
      path: `/writing/${blog.slug}/`,
      component: require.resolve("./src/templates/singleblog.js"),
      context: {
        slug: blog.slug,
      },
    })
  })
}
