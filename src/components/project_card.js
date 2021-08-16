import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const ProjectCard = ({ title, color, description, fluid, image, slug }) => {
  return (
    <Link
      to={slug}
      className="aspect-w-3 aspect-h-4 bg-gray-300 rounded-lg overflow-hidden group ring-1 ring-transparent hover:ring-white/30 duration-300 ease-in-out relative"
    >
      <GatsbyImage
        className="absolute inset-0 w-full group-hover:scale-150 origin-top duration-1000 ease-in-out"
        fluid={fluid}
        image={image}
      />
      <div className="w-full h-full grid grid-rows-2 justify-between p-8 group-hover:backdrop-blur-md bg-black bg-opacity-0 group-hover:bg-opacity-90 duration-500 ease-in-out">
        <div>
          <h2 className="text-2xl -translate-x-24 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 duration-500 group-hover:delay-200 ease-in-out">
            {title}
          </h2>
          <p
            className="text-2xl font-bold -translate-x-24 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 duration-500 group-hover:delay-300 ease-in-out"
            style={{ color: `${color}` }}
          >
            &rarr;
          </p>
        </div>
        <div className="self-end">
          <div
            className="w-full h-px block mb-4 scale-x-0 origin-left group-hover:scale-x-100 duration-300 group-hover:delay-300 ease-in-out"
            style={{ background: `${color}` }}
          />
          <p className="translate-y-24 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-500 group-hover:delay-500 ease-in-out">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
