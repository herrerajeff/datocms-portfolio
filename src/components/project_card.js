import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const ProjectCard = ({ title, color, description, fluid, image, slug }) => {
  return (
    <Link
      to={slug}
      className="aspect-w-3 aspect-h-2 bg-gray-300 rounded overflow-hidden group ring-1 ring-white/40 md:ring-transparent hover:ring-white/30 duration-300 ease-in-out relative object-cover"
    >
      <GatsbyImage
        className="w-full group-hover:scale-[1.2] origin-top duration-1000 ease-in-out"
        style={{ position: "absolute" }}
        fluid={fluid}
        image={image}
      />
      <div className="w-full h-full flex-col justify-between py-4 px-6 md:p-8 group-hover:backdrop-blur-lg bg-gradient-to-b from-black/90 md:bg-none md:bg-black md:bg-opacity-0 group-hover:bg-opacity-90 duration-500 ease-in-out">
        <div>
          <h2 className="text-lg md:text-2xl md:-translate-x-24 md:opacity-0 group-hover:opacity-100 group-hover:translate-x-0 duration-500 group-hover:delay-200 ease-in-out">
            {title}
          </h2>
          <p
            className="text-lg md:text-2xl font-bold md:-translate-x-24 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 duration-500 group-hover:delay-300 ease-in-out"
            style={{ color: `${color}` }}
          >
            &rarr;
          </p>
        </div>
        <div className="mt-8">
          <p className="text-sm md:text-base translate-y-16 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-500 group-hover:delay-500 ease-in-out">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
