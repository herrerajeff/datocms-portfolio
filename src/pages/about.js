import * as React from "react"
// import { Link } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 0.4, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 1.5,
      }}
      className="fixed w-full md:w-104 inset-0 md:inset-y-0 bg-gradient-to-b from-black to-yellow-400 -z-10 3xl:left-1/4"
    >
      <img
        className="absolute bottom-0 filter grayscale mix-blend-multiply opacity-75"
        src={"/images/portrait_transparent.png"}
        alt="Logo"
      />
    </motion.div>
    <Seo title="About" />
    <div className="container-thin mt-12 3xl:mt-40">
      <h1 className="text-6xl font-serif text-white leading-tight">
        Anything that can be changed, can be designed.
      </h1>
      <p className="text-sm mt-4">– Marty Neumeier</p>
      <div className="prose-lg mt-12 text-white">
        <p>
          My interest in design is rooted in the intersection of form and
          narrative. Story separates design from decoration – adding intent and
          empathy to a project. It influences behavior and, as creators, we are
          responsible for translating the elements of an idea into something
          recognizable. The goal is, and will always be, to enrich the lives of
          the world around us, and make a positive impact through the design
          choices we make. Now, off to try and make my love for tacos sound that
          poetic.
        </p>
        <p>Education · BFA Graphic Design, SUNY Purchase</p>
        <p className="relative flex">
          Current ·{" "}
          <a
            href="https://www.braze.com"
            target="_blank"
            rel="nofollow noreferrer"
            className="ml-2 mt-1 hover:text-yellow-400 inline-block"
          >
            <svg
              className="h-7"
              viewBox="0 0 63 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#prefix__clip0)">
                <path
                  d="M62.909 20.602s-.623-.84-.815-1.08c-.134-.157-.297-.341-.719-.064-.949.609-2.013 1.172-3.326 1.172-1.007 0-1.879-.25-2.53-.785.277-.12.565-.249.852-.406 1.553-.803 2.847-1.836 3.47-2.436 3.02-2.907 2.08-7.244-1.61-7.244-3.48 0-6.221 3.257-6.221 6.884 0 .544.067 1.329.306 2.15-.2.093-1.581.739-3.23 1.615-1.553-1.116-3.969-.618-3.969-.618 2.244-3.073 5.627-7.863 5.915-8.26.21-.286.172-.563-.029-1.005-.259-.536-.517-.628-.863-.628h-7.026c-.23 0-.412.101-.48.35-.066.25-.21 1.108-.239 1.394-.029.296.259.48.556.48h5.09l-4.601 6.34c-.029.028-.058.055-.086.092-.671.932-1.697 2.234-2.924 2.234-.767 0-1.716-.526-1.716-2.252 0-1.689.71-5.26 1.227-8.047.057-.296-.048-.591-.546-.591h-1.247c-.287 0-.45.166-.489.406-.076.424-.153.84-.22 1.246-.613-1.135-1.6-1.781-3.02-1.781a5.19 5.19 0 00-3.661 1.486c-2.627 2.528-2.128 6.653-4.4 8.84-.978.942-2.08.656-2.08-1.2 0-2.113.843-4.475 1.802-6.708.172-.397-.01-.73-.192-.979-.259-.36-.355-.544-.815-.544-.719 0-1.86.434-4.15.434-.49 0-.95-.019-1.371-.046.029-.333.029-.554.038-.637.02-.314-.096-.508-.44-.508h-1.17c-.422 0-.528.194-.576.517-.2 1.347-.575 6.303-3.163 8.786-.297.286-.48.378-.48.378.643-1.21.988-2.796.988-4.06 0-3.544-2.176-5.74-4.917-5.74-.834 0-1.716.258-2.55.756.383-2.16.738-4.18.862-4.863.106-.582-.105-.877-.268-1.117C7.617 4.175 7.387 4 7.042 4H2.997c-.23 0-.403.157-.46.406-.067.286-.211 1.043-.23 1.394-.02.304.2.424.46.424h2.952c-.47 2.787-1.37 8.186-1.639 9.542-.345 1.726-1.62 3.84-3.767 4.596-.269.092-.374.332-.278.61.096.276.47.996.584 1.18a.525.525 0 00.595.24c1.112-.378 2.137-.987 2.943-1.762.201-.194.393-.406.575-.637.958 2.086 2.933 2.842 4.937 2.842 2.271 0 4.726-.766 6.45-2.418 2.014-1.938 2.848-5.13 3.212-7.4.499.064 1.064.12 1.61.12 1.381 0 2.54-.287 2.54-.287s-1.389 3.562-1.389 6.183c0 2.962 1.476 3.802 3.096 3.802 1.678 0 2.857-1.209 3.69-2.713.221.47.547 1.024.988 1.449.758.729 1.697 1.264 3.058 1.264 1.553 0 2.885-.858 3.834-2.187.173.563.432 1.024.786 1.366.48.461 1.362.821 2.455.821 1.888 0 2.99-1.366 5.933-1.366.374 0 .71.056 1.016.157-1.351.794-2.636 1.643-3.422 2.4-2.425 2.335-2.54 5.417-.949 6.949 1.937 1.864 4.678.923 6.404-.73 2.013-1.937 2.597-5.6 1.437-8.102 1.41-.71 2.589-1.236 2.867-1.366.882 1.154 2.339 2.058 4.735 2.058a8.287 8.287 0 004.803-1.569c.191-.175.24-.461.086-.664zm-52.061-.794c-.547.526-1.218.813-1.898.813-.633 0-1.18-.277-1.64-.72-1.552-1.495-1.418-5.178.585-7.106.566-.545 1.256-.858 1.956-.858.632 0 1.179.267 1.639.71 1.457 1.412 1.543 5.057-.642 7.161zm22.21.803c-1.677 0-2.77-1.947-2.434-4.346.335-2.4 1.965-4.347 3.642-4.347 1.553 0 2.608 1.67 2.492 3.82-.047.314-.086.61-.115.905-.45 2.224-1.993 3.968-3.585 3.968zm13.967 8.453c-2.195 2.114-4.994-.58-1.725-3.728.738-.71 1.955-1.495 3.22-2.215.72 1.717.154 4.356-1.495 5.944zm8.81-16.223c1.648-1.587 3.48-1.117 3.48.424 0 1.505-1.87 3.129-4.132 4.384-.22.12-.48.258-.739.387a5.644 5.644 0 01-.134-1.264c-.01-1.292.556-3 1.524-3.931z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="prefix__clip0">
                  <path fill="currentColor" d="M0 0h63v32H0z" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </p>
      </div>
    </div>
  </Layout>
)

export default About
