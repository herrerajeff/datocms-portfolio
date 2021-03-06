import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Nav from "./navigation"

const Header = ({ siteTitle }) => (
  <header
    className="left-1/2 -translate-x-1/2 py-8 w-full text-sm flex-none z-20 container"
    style={{ position: "fixed" }}
  >
    <div className="flex justify-between items-center md:grid grid-cols-3">
      <Link
        to="/"
        className="text-yellow-400 justify-self-start hidden md:block"
      >
        <svg
          width={32}
          height={32}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx={16} cy={16} r={16} fill="currentColor" />
          <path
            fill="#111"
            d="M7.529 7.529h4.682v16H7.529zM18.847 7.529h4.682v16h-4.682z"
          />
          <path fill="#111" d="M23.53 13.02V17.7h-16V13.02z" />
        </svg>
      </Link>
      <Nav />
      <div className="items-center justify-self-end hidden md:flex">
        <Link
          to="/playlists"
          activeClassName="btn__active"
          className="ml-1 btn items-center justify-self-end hidden md:flex btn"
          href="https://open.spotify.com/playlist/4fThmEeTfs0aUolJs5t3K5?si=ae1aa9483fcb4742"
          target="_blank"
          rel=" nofollow noreferrer"
        >
          <span className="text-yellow-400 inline-block mr-2">
            <svg
              width={16}
              height={17}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12.5V3.833L14 2.5v8.667"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 14.5a2 2 0 100-4 2 2 0 000 4zM12 13.167a2 2 0 100-4 2 2 0 000 4z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Now Listening ›
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
