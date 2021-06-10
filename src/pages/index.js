import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectCard from "../components/project_card"

const IndexPage = () => {
  const { scrollY } = useViewportScroll()
  const offsetRange = 600
  const yRange = useTransform(scrollY, [offsetRange, 0], [0.6, 1])
  const blurRange = useTransform(
    scrollY,
    [0.1, offsetRange],
    ["blur(0px)", "blur(10px)"]
  )
  const opacity = useSpring(yRange, { stiffness: 400, damping: 40 })
  const filter = blurRange
  return (
    <Layout>
      <Seo title="Designer" />
      <motion.div
        className="fixed inset-0 top-24 flex flex-col items-center origin-bottom"
        style={{ opacity, filter }}
      >
        <div className="mt-20 mb-24 relative">
          <span className="absolute block bg-yellow-900 rounded-full h-104 w-104 filter blur-3xl transform -translate-y-56 -translate-x-1/3 opacity-30"></span>
          <span className="rounded-full w-40 h-40 filter blur-2xl bg-yellow-400 block absolute -top-12 -left-12 opacity-40"></span>
          <span className="rounded-full w-40 h-40 filter blur-2xl bg-white block absolute -bottom-24 -right-12 opacity-40"></span>
          <svg
            className="relative z-10 mx-auto text-yellow-500 animate-float"
            width={159}
            height={111}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M158 55.5S123.078 102 80 102 2 55.5 2 55.5 36.922 9 80 9s78 46.5 78 46.5z"
              fill="#000"
            />{" "}
            <path
              d="M150.56 55.392S118.969 97.728 80 97.728c-38.97 0-70.56-42.336-70.56-42.336S41.03 13.056 80 13.056c38.969 0 70.56 42.336 70.56 42.336z"
              fill="url(#prefix__paint0_linear)"
            />{" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M80.044 12.413c-.615 0-1.229.01-1.842.032L77.782.159a66.268 66.268 0 014.516 0l-.418 12.285c-.611-.02-1.223-.03-1.836-.03zm12.797 1.479a61.845 61.845 0 00-3.64-.715l2-12.13c1.469.243 2.924.53 4.364.857L92.84 13.892zm-21.986-.71a62.106 62.106 0 00-3.654.717L64.476 1.91a74.463 74.463 0 014.377-.859l2.002 12.13zm32.715 4.096a76.916 76.916 0 00-3.536-1.322l4.017-11.619c1.386.48 2.755.993 4.106 1.536l-4.587 11.405zM59.979 15.97a77.176 77.176 0 00-3.551 1.327l-4.58-11.409a89.422 89.422 0 014.118-1.538l4.013 11.62zm53.898 6.277a96.954 96.954 0 00-3.382-1.81l5.582-10.953c1.291.658 2.562 1.34 3.813 2.041l-6.013 10.722zm-64.406-1.785a97.433 97.433 0 00-3.397 1.812l-5.997-10.731A109.646 109.646 0 0143.904 9.5l5.567 10.96zm74.196 7.995a119.13 119.13 0 00-3.203-2.19l6.769-10.26c1.201.791 2.379 1.598 3.534 2.415l-7.1 10.035zm-84.215-2.159a120.667 120.667 0 00-3.221 2.191l-7.075-10.053c1.16-.817 2.344-1.623 3.55-2.414l6.746 10.276zm93.455 9.335a141.39 141.39 0 00-3.017-2.484l7.683-9.597a155.11 155.11 0 013.276 2.698l-7.942 9.383zM29.971 33.181a145.3 145.3 0 00-3.037 2.485l-7.91-9.41c1.069-.899 2.167-1.799 3.293-2.695l7.654 9.62zm-8.94 7.712c-.99.921-1.943 1.832-2.86 2.727l-8.59-8.794c.984-.96 2.01-1.94 3.073-2.93l8.377 8.997zm120.575 2.696a161.334 161.334 0 00-2.837-2.727l8.411-8.966c1.057.992 2.075 1.972 3.052 2.934l-8.626 8.76zM12.651 49.272a166.68 166.68 0 00-2.648 2.907L.816 44.012c.872-.981 1.82-2.026 2.843-3.123l8.992 8.383zm137.056 2.88a162.269 162.269 0 00-2.624-2.91l9.029-8.342a179.347 179.347 0 012.821 3.127l-9.226 8.125zM80.044 98.486c-.615 0-1.229-.01-1.842-.032l-.42 12.286a65.35 65.35 0 004.516.001l-.418-12.287c-.611.021-1.223.032-1.836.032zm12.797-1.479a61.845 61.845 0 01-3.64.715l2 12.129a73.964 73.964 0 004.364-.856L92.84 97.007zm-21.986.71A62.188 62.188 0 0167.201 97l-2.725 11.987c1.444.329 2.903.616 4.377.86l2.002-12.13zm32.715-4.096c-1.17.47-2.349.912-3.536 1.322l4.017 11.619a89.9 89.9 0 004.106-1.536l-4.587-11.405zm-43.591 1.308a77.062 77.062 0 01-3.551-1.327l-4.58 11.409a89.252 89.252 0 004.118 1.538l4.013-11.62zm53.898-6.277a96.617 96.617 0 01-3.382 1.81l5.582 10.953a109.3 109.3 0 003.813-2.041l-6.013-10.722zm-64.406 1.785a97.264 97.264 0 01-3.397-1.812l-5.997 10.731a109.84 109.84 0 003.827 2.042l5.567-10.96zm74.196-7.996c-1.05.743-2.118 1.474-3.203 2.19l6.769 10.262a131.788 131.788 0 003.534-2.416l-7.1-10.036zm-84.215 2.16a120.432 120.432 0 01-3.221-2.191l-7.075 10.053c1.16.817 2.344 1.623 3.55 2.414l6.746-10.276zm93.455-9.335c-.981.83-1.987 1.66-3.017 2.484l7.683 9.597a155.42 155.42 0 003.276-2.698l-7.942-9.383zM29.971 77.718a144.984 144.984 0 01-3.037-2.485l-7.91 9.41c1.069.899 2.167 1.799 3.293 2.695l7.654-9.62zm-8.94-7.712c-.99-.921-1.943-1.832-2.86-2.727l-8.59 8.794c.984.96 2.01 1.94 3.073 2.93l8.377-8.997zm120.575-2.696c-.909.895-1.855 1.806-2.837 2.727l8.411 8.966a175.525 175.525 0 003.052-2.934l-8.626-8.76zM12.651 61.627a166.318 166.318 0 01-2.648-2.907L.816 66.887c.872.981 1.82 2.026 2.843 3.123l8.992-8.383zm137.056-2.88c-.803.913-1.679 1.886-2.624 2.909l9.029 8.343a178.621 178.621 0 002.821-3.127l-9.226-8.125z"
              fill="#000"
            />{" "}
            <path
              d="M111.948 55.196c0 17.753-14.391 32.144-32.144 32.144S47.66 72.949 47.66 55.196 62.05 23.052 79.804 23.052c17.752 0 32.144 14.391 32.144 32.144zM79.804 74.012c10.392 0 18.816-8.424 18.816-18.816S90.196 36.38 79.804 36.38s-18.816 8.424-18.816 18.816 8.424 18.816 18.816 18.816z"
              fill="currentColor"
              stroke="#000"
              strokeWidth={4.312}
            />{" "}
            <circle cx={79.804} cy={55.196} r={8.82} fill="#000" />{" "}
            <defs>
              {" "}
              <linearGradient
                id="prefix__paint0_linear"
                x1={-3.5}
                y1={55}
                x2={163}
                y2={55}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#333" />
                <stop offset={0.309} stopColor="#fff" />
                <stop offset={0.675} stopColor="#fff" />
                <stop offset={1} stopColor="#333" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif text-white text-center leading-9 md:leading-12 lg:leading-14 z-">
          I’m Jeff—a designer from <br />
          New York City enhancing physical <br />
          &amp; digital brand experiences.
        </h1>
        <p className="mt-6 text-sm md:text-base flex">
          Currently Senior Designer &amp; Competitive Cold Brew Drinker at @
          <a
            href="https://www.braze.com"
            target="_blank"
            rel="nofollow noreferrer"
            className="ml-2 hover:text-yellow-400"
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
      </motion.div>
      <div className="md:mt-hero mt-hero container pointer-events-none">
        <div className="w-full border-b border-gray-400 border-opacity-30 text-xs pointer-events-auto">
          <p className="px-2 py-1 border border-b-0 border-gray-400 border-opacity-30 inline-block">
            Selected work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 even:mt-4 pointer-events-auto">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
