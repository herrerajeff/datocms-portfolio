import * as React from "react"
// import { motion } from "framer-motion"
import { Link } from "gatsby"

const ProjectCard = ({ children }) => {
  return (
    <Link to="/" className="aspect-w-3 aspect-h-4 bg-gray-300 rounded-lg">
      {children}
    </Link>
  )
}

export default ProjectCard
