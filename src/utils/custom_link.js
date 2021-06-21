import React from "react"
import { Link } from "gatsby"
import { Link as PrismicLink } from "prismic-reactjs"
import linkResolver from "./link_resolver"

const CustomLink = (type, element, content, children, index) => {
  if (element.data.link_type === "Document") {
    return (
      <Link to={linkResolver(element.data)} key={element.data.id}>
        {content}
      </Link>
    )
  }

  if (element.data.link_type === "Web") {
    ;<PrismicLink key={element.data.id} to={linkResolver(element.data)}>
      <a target="_blank" rel="noopener noreferrer nofollower">
        {content}
      </a>
    </PrismicLink>
  }
  return null
}

export default CustomLink
