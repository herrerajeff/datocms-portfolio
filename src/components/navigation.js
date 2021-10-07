import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false)
  const subMenu = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        duration: 0.1,
      },
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        duration: 0.1,
      },
    },
  }
  const subItem = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  }
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return
    }
    // outside click
    setNavOpen(false)
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClick)

    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])
  const node = useRef()
  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick)
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])
  return (
    <nav className="space-x-3 w-full px-8 md:w-auto flex justify-center md:justify-self-center col-span-2 md:col-span-1 mix-blend-exclusion">
      <Link className="btn" activeClassName="btn__active" to="/">
        Work
      </Link>
      <Link className="btn" activeClassName="btn__active" to="/about">
        About
      </Link>
      <Link className="btn" activeClassName="btn__active" to="/writing">
        Writing
      </Link>
      <div className="relative subnav">
        <button
          onClick={() => setNavOpen(!navOpen)}
          ref={node}
          className={
            navOpen
              ? "btn__active active:outline-none outline-none focus:outline-none pointer-events-auto"
              : "btn__sub"
          }
        >
          Say&nbsp;Hi&nbsp;
          <span role="img" aria-label="waving hand">
            👋🏽
          </span>
        </button>
        {navOpen ? (
          <motion.div
            variants={subMenu}
            className="absolute top-full right-0 md:left-0 mt-3 grid grid-rows-4 gap-3"
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <motion.a
              variants={subItem}
              href="https://www.twitter.com/isthatjeff"
              className="btn__sub flex-none flex items-center"
              target="_blank"
              rel="noopener nofollower noreferrer"
              transition={{
                ease: "easeOut",
                duration: 0.3,
              }}
              onClick={() => setNavOpen(!navOpen)}
            >
              <svg
                className="w-4 h-4 mr-2 block"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 5.8a8.49 8.49 0 01-2.36.64 4.13 4.13 0 001.81-2.27 8.21 8.21 0 01-2.61 1 4.1 4.1 0 00-7 3.74 11.64 11.64 0 01-8.45-4.29 4.16 4.16 0 00-.55 2.07 4.09 4.09 0 001.82 3.41 4.05 4.05 0 01-1.86-.51v.05a4.1 4.1 0 003.3 4 3.933 3.933 0 01-1.1.17 4.907 4.907 0 01-.77-.07 4.11 4.11 0 003.83 2.84A8.22 8.22 0 012 18.28a11.57 11.57 0 006.29 1.85A11.589 11.589 0 0020 8.45v-.53a8.43 8.43 0 002-2.12z"
                  fill="currentColor"
                />
              </svg>
              Twitter
            </motion.a>
            <motion.a
              variants={subItem}
              href="https://www.instagram.com/_isthatjeff"
              className="btn__sub flex-none w-auto flex items-center"
              target="_blank"
              rel="noopener nofollower noreferrer"
              transition={{
                ease: "easeOut",
              }}
              onClick={() => setNavOpen(!navOpen)}
            >
              <svg
                className="w-4 h-4 mr-2 block"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.34 5.46a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zm4.6 2.42a7.588 7.588 0 00-.46-2.43 4.94 4.94 0 00-1.16-1.77 4.7 4.7 0 00-1.77-1.15 7.3 7.3 0 00-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 00-2.43.47 4.78 4.78 0 00-1.77 1.15 4.7 4.7 0 00-1.15 1.77 7.3 7.3 0 00-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 00.47 2.43 4.7 4.7 0 001.15 1.77 4.78 4.78 0 001.77 1.15 7.3 7.3 0 002.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 002.43-.47 4.7 4.7 0 001.77-1.15 4.85 4.85 0 001.16-1.77c.285-.78.44-1.6.46-2.43 0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12zM20.14 16a5.61 5.61 0 01-.34 1.86 3.06 3.06 0 01-.75 1.15c-.324.33-.717.586-1.15.75a5.61 5.61 0 01-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 01-1.94-.3 3.27 3.27 0 01-1.1-.75 3 3 0 01-.74-1.15 5.54 5.54 0 01-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 01.35-1.9A3 3 0 015 5a3.14 3.14 0 011.1-.8A5.73 5.73 0 018 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 011.86.34 3.06 3.06 0 011.19.8c.328.307.584.683.75 1.1.222.609.337 1.252.34 1.9.05 1 .06 1.37.06 4s-.01 3-.06 4zM12 6.87A5.13 5.13 0 1017.14 12 5.12 5.12 0 0012 6.87zm0 8.46a3.33 3.33 0 110-6.66 3.33 3.33 0 010 6.66z"
                  fill="currentColor"
                />
              </svg>
              Instagram
            </motion.a>
            <motion.a
              variants={subItem}
              href="https://www.linkedin.com/in/jeffrey-herrera"
              className="btn__sub flex-none flex items-center"
              target="_blank"
              rel="noopener nofollower noreferrer"
              transition={{
                ease: "easeOut",
              }}
              onClick={() => setNavOpen(!navOpen)}
            >
              <svg
                className="w-4 h-4 mr-2 block"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.47 2H3.53a1.45 1.45 0 00-1.47 1.43v17.14A1.45 1.45 0 003.53 22h16.94a1.451 1.451 0 001.47-1.43V3.43A1.45 1.45 0 0020.47 2zM8.09 18.74h-3v-9h3v9zM6.59 8.48a1.56 1.56 0 010-3.12 1.57 1.57 0 110 3.12zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0012.85 13a1.998 1.998 0 00-.1.73v5h-3v-9h3V11a3 3 0 012.71-1.5c2 0 3.45 1.29 3.45 4.06v5.18z"
                  fill="currentColor"
                />
              </svg>
              LinkedIn
            </motion.a>
            <motion.a
              variants={subItem}
              href="mailto:herrera.jeffrey@gmail.com"
              className="btn__sub flex-none flex items-center"
              target="_blank"
              rel="noopener nofollower noreferrer"
              transition={{
                ease: "easeOut",
              }}
              onClick={() => setNavOpen(!navOpen)}
            >
              <svg
                className="w-4 h-4 mr-2 block"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.265 2.428a2.048 2.048 0 00-2.078-.324L2.266 9.339a2.043 2.043 0 00.104 3.818l3.625 1.261 2.02 6.682c.028.089.068.174.119.252.008.012.019.021.027.033a.988.988 0 00.281.265c.095.063.2.11.31.136l.013.001.006.003c.067.014.135.02.203.02l.018-.003a.992.992 0 00.302-.052c.022-.008.041-.02.063-.03a.994.994 0 00.205-.114l.152-.129 2.702-2.983 4.03 3.122c.355.276.792.427 1.241.427a2.054 2.054 0 002.008-1.633l3.263-16.017a2.03 2.03 0 00-.693-1.97zM9.37 14.736a.994.994 0 00-.272.506l-.31 1.504-.784-2.593 4.065-2.117-2.699 2.7zm8.302 5.304l-4.763-3.69a1 1 0 00-1.353.12l-.866.955.306-1.487 7.083-7.083a1 1 0 00-1.169-1.593L6.745 12.554 3.02 11.191 20.999 4 17.672 20.04z"
                  fill="currentColor"
                />
              </svg>
              Email
            </motion.a>
          </motion.div>
        ) : null}
      </div>
    </nav>
  )
}

export default Nav
