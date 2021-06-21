import * as React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
// import { Link } from "gatsby"

const Footer = () => {
  const [SocialOpen, setSocialOpen] = useState(false)
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
        <button
          onClick={() => setSocialOpen(!SocialOpen)}
          className={SocialOpen ? "btn__active z-20" : "btn z-20"}
          style={{ zIndex: "10" }}
        >
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
      {SocialOpen ? (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="flex flex-col justify-center space-y-8 z-20 -mt-48"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <a
              href="http://www.twitter.com/isthatjeff"
              target="_blank"
              rel="nofollower noreferrer noopener"
              className="text-6xl font-serif text-white hover:text-yellow-400 transition duration-300 group relative"
            >
              Twitter
              <span className="absolute ml-4 text-yellow-400 opacity-0 group-hover:opacity-100 transform -translate-x-12 group-hover:translate-x-0 transition duration-300">
                →
              </span>
            </a>
            <a
              href="http://www.instagram.com/_isthatjeff"
              target="_blank"
              rel="nofollower noreferrer noopener"
              className="text-6xl font-serif text-white hover:text-yellow-400 transition duration-300 group relative"
            >
              Instagram
              <span className="absolute ml-4 text-yellow-400 opacity-0 group-hover:opacity-100 transform -translate-x-12 group-hover:translate-x-0 transition duration-300">
                →
              </span>
            </a>
            <a
              href="http://www.linkedin.com/in/jeffrey-herrera"
              target="_blank"
              rel="nofollower noreferrer noopener"
              className="text-6xl font-serif text-white hover:text-yellow-400 transition duration-300 group relative"
            >
              LinkedIn
              <span className="absolute ml-4 text-yellow-400 opacity-0 group-hover:opacity-100 transform -translate-x-12 group-hover:translate-x-0 transition duration-300">
                →
              </span>
            </a>
            <a
              href="@mailto:herrera.jeffrey@gmail.com"
              target="_blank"
              rel="nofollower noreferrer noopener"
              className="text-6xl font-serif text-white hover:text-yellow-400 transition duration-300 group relative"
            >
              Email
              <span className="absolute ml-4 text-yellow-400 opacity-0 group-hover:opacity-100 transform -translate-x-12 group-hover:translate-x-0 transition duration-300">
                →
              </span>
            </a>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 0.5,
            }}
            onClick={() => setSocialOpen(false)}
            className="mt-16 rounded-full bg-white hover:bg-yellow-400 w-14 h-14 text-black backdrop-filter backdrop-blur-md grid place-items-center transform rotate-0 hover:rotate-90 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>
        </motion.div>
      ) : null}
    </footer>
  )
}

export default Footer
