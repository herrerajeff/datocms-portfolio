import * as React from "react"
import { motion } from "framer-motion"
// import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="my-24 mx-auto flex-none text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="container"
      >
        <button className="btn">
          If you like it, put a{" "}
          <span role="img" aria-label="Wedding Ring">
            💍
          </span>{" "}
          on it
        </button>
        <p className="text-xs mt-4 text-gray-600">
          ©{new Date().getFullYear()} Jeffrey Herrera{" "}
        </p>
      </motion.div>
    </footer>
  )
}

export default Footer
