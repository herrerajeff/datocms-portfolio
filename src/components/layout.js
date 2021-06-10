/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <AnimatePresence>
      <div className="px-8 flex flex-col min-h-full items-stretch">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div className="flex-grow flex-shrink-0 relative">
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="mt-24"
          >
            {children}
          </motion.main>
        </div>
        <Footer />
      </div>
    </AnimatePresence>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
