import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PlaylistCard from "../components/playlist_card"

const Profile = ({ data }) => {
  const playlist = data.allDatoCmsPlaylist.nodes

  return (
    <Layout>
      <Seo title="Profile" />
      <div className="container-thin">
        <h2 className="mt-8 border-b border-gray-400 border-opacity-30">
          My Music
        </h2>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 mt-4">
          <a
            href="https://audiomack.com/opusmusic"
            className="aspect-w-1 aspect-h-1 rounded-xl text-sm text-white hover:border-opacity-100 hover:text-yellow-400 transition duration-200 bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-filter backdrop-blur flex justify-center items-center"
            aria-label="Audiomack"
            target="_blank"
            rel="nofollower noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 265"
              className="w-full p-12"
            >
              <path
                fill="#FFA100"
                d="M131 70.7c2 2.1.7 6.5-2 6.6-2.7.1-5.2.6-7-1.3-1.8-1.9-1.3-5.6 2-6.6 0 0 4.9-.8 7 1.3zm207.7 15.7c-4.2.4-12.2 2.6-15 3-2.8.4-7.1 18.8-13.1 16.9-6-1.9-19.3-10.2-19.3-11.4 0-1 1-13.2 1.3-16.4 0-.2 0-.4.1-.6v-.1c0-.6.1-1 .1-1.4 0-1.4-.3-1.6-1.2.3-1 2.1-5.3 15.8-10.1 30.6-.5 1.3-9.5 28.7-10.7 32-1.4 3.9-2.6 6.8-3.4 8.4-1.2 1.7-2.9 2.8-5.3 2.1-5.9-1.8-13.3-9.9-13.4-11.9-.1-11.3.6-72.4-2.2-67.3-2.8 5.2-24.8 41.4-24.8 41.4-.4.1-.6.1-1 .1-1.6-.2-4-.7-4.6-2.2 0-.1-.1-.2-.1-.3 0-.1-.1-.2-.1-.4-.3-1-.4-2.1-.7-3-1-3.3-2.5-8.1-4.2-12.9-2.5-8.2-5.1-16.7-5.6-17.6-.8-1.8-2.1-1.1-3.2 0-4.9 4.2-15.3 22.5-24.7 23.5-.5 0-1-.2-1.5-.5-3.5-4.9-4.8-21.7-6.4-22.7-1.7-1-7.8 9.3-19.9 8.2-5.1-.5-10.2-3.7-13.2-6 .3-3.8.3-12.7 7.9-9.8 4.6 1.8 12.4 6.6 19.3-2.1 7.6-9.6 11.8-6.8 14.3-4.7 2.5 2.1.8 13 4.6 9.9 3.8-3 18.9-21.9 18.9-21.9s11.7-11.8 13.5.6c1.8 12.4 9.5 26.2 11.5 25.8 2-.4 25.6-48.4 29-51.5 3.4-3.1 14.8-2.7 14.2 5.2-.5 7.9-1.7 57.3-1.7 57.3s-1.3 13.9.8 6.5c.9-3.1 1.9-5.9 3.1-9.1 5.8-18.6 15.8-50.5 20.7-66.9 1.1-3.9 2.1-7.3 2.9-9.9.3-1.2.6-2.1.9-3 .4-1.4.7-2.3.8-2.5.2-.6.8-1.1 1.7-1.4.9-.5 1.8-.6 2.9-.6.6 0 1.2-.1 1.8-.1 2.4 0 5.1.4 7.7 1.1.9 0 1.9.3 2.9 1 0 0 .1 0 .1.1h.1c.2.1.5.4.9.9v.1c.2.2.3.4.5.7 1.8 2.6 2.9 7.4 1.8 15.9-2.7 21.2-4.8 64.8-4.8 64.8s-.4 2.1 4-7.1c.1-.3.3-.6.5-.9.2-.2.5-.4.8-.8 2.7-3.2 10-5.1 15-5.1 2.1.2 3.9.8 5 1.5 1.7 3 .6 14.2.6 14.2z"
              ></path>
              <path
                fill="#fff"
                d="M25.5 209.2c-3.3 0-6.9.4-10.8 1.3-4 .9-7.1 1.9-9.4 3.1V226c5.7-3.8 11.8-5.7 18.1-5.7 6.3 0 9.5 2.9 9.5 8.7l-14.5 2C6.1 232.6 0 238.6 0 248.9c0 4.9 1.5 8.8 4.4 11.7 3 2.9 7 4.4 12.2 4.4 7 0 12.3-3 15.8-8.9h.2v7.6h15.5v-31.8c.2-15.1-7.4-22.7-22.6-22.7zm7.3 32.9c0 3.2-1 5.9-2.9 8.1-1.9 2.1-4.5 3.2-7.5 3.2-2.2 0-4-.6-5.3-1.8-1.3-1.2-1.9-2.7-1.9-4.6 0-4.1 2.7-6.5 8-7.2l9.7-1.2v3.5h-.1zm56.4-31.6h16.4v53.1H89.2v-8.1h-.3c-4.1 6.2-9.5 9.4-16.3 9.4-12.4 0-18.5-7.5-18.5-22.4v-32.1h16.4V241c0 7.5 3 11.2 9 11.2 2.9 0 5.3-1 7.1-3.1 1.8-2.1 2.6-4.8 2.6-8.4v-30.2zm59.5-25.5v31.6h-.2c-2.7-4.9-7.5-7.4-14.4-7.4-7.2 0-13.1 2.6-17.6 7.9-4.5 5.3-6.7 12.3-6.7 21.1 0 8.4 2 15 6.1 19.6 4 4.7 9.4 7 16.1 7 7.2 0 12.8-2.9 16.5-8.6h.2v7.3h16.4V185h-16.4zm.4 52.8c0 4.4-1 7.9-3.1 10.6-2.1 2.7-4.8 4-8.1 4-3.5 0-6.2-1.3-8.2-3.8-2-2.5-3-6.1-3-10.8 0-5 1-8.9 3.1-11.8 2-2.8 4.9-4.3 8.5-4.3 3.2 0 5.8 1.1 7.8 3.4s3 5.2 3 8.6v4.1zm24.7-38.1c-1.8-1.7-2.6-3.7-2.6-6 0-2.5.9-4.5 2.6-6 1.8-1.6 4-2.3 6.8-2.3s5.1.8 6.8 2.3c1.8 1.5 2.6 3.5 2.6 6s-.9 4.5-2.6 6.1c-1.7 1.6-4 2.4-6.8 2.4-2.7-.1-5-.9-6.8-2.5zm23.4 52.5c.9-.2 1.8-.3 2.7-.5v11.5c-2 .5-4.1.9-6.3 1.3-2.2.3-4.5.5-6.9.5-2.2 0-4.2-.4-6-1.1-1.8-.7-3.3-1.8-4.6-3.1-1.2-1.4-2.2-3-2.9-4.9-.7-2-1-4.1-1-6.5v-38.8h16.3v35.1c0 2.2.5 4 1.6 5.1 1.1 1.1 2.5 1.7 4.3 1.7 1.1 0 1.9-.1 2.8-.3z"
              ></path>
              <path
                fill="#fff"
                d="M247.5 216.7c-5-5-12-7.4-20.8-7.4-9 0-16.1 2.5-21.4 7.4-5.3 5-7.9 11.9-7.9 20.6 0 8.5 2.5 15.2 7.6 20.2s12 7.4 20.9 7.4c9 0 16.1-2.5 21.3-7.7 5.2-5.1 7.8-12.1 7.8-20.9 0-8.1-2.5-14.7-7.5-19.6zm-21 35.7c-8.3 0-12.4-5.1-12.4-15.3 0-4.9 1.1-8.6 3.2-11.3 2.2-2.7 5.2-4 9.1-4 7.9 0 11.9 5 11.9 14.9 0 10.4-4 15.7-11.8 15.7zm117.4-21.8v33.1h-16.4v-30.3c0-7.7-2.8-11.6-8.5-11.6-2.7 0-4.9 1.2-6.6 3.5-1.7 2.3-2.6 5.2-2.6 8.7v29.7h-16.4V233c0-7.5-2.8-11.2-8.4-11.2-2.8 0-5.1 1.1-6.7 3.3-1.7 2.2-2.5 5.2-2.5 9v29.5h-16.4v-53.1h16.4v8.3h.2c1.7-2.8 4.1-5.2 7.2-6.9 3.1-1.8 6.4-2.7 10.1-2.7 7.5 0 12.7 3.3 15.4 9.9 4.1-6.6 10-9.9 17.9-9.9 11.5 0 17.3 7.1 17.3 21.4zm28.2-21.4c-3.3 0-6.9.4-10.8 1.3-4 .9-7.1 1.9-9.4 3.1V226c5.7-3.8 11.8-5.7 18.1-5.7 6.3 0 9.5 2.9 9.5 8.7l-14.5 2c-12.2 1.6-18.4 7.5-18.4 17.9 0 4.9 1.5 8.8 4.4 11.7 3 2.9 7 4.4 12.2 4.4 7 0 12.3-3 15.9-8.9h.2v7.6h15.5v-31.8c.1-15.1-7.5-22.7-22.7-22.7zm7.4 32.9c0 3.2-1 5.9-2.9 8.1-2 2.1-4.5 3.2-7.5 3.2-2.2 0-4-.6-5.3-1.8-1.3-1.2-1.9-2.7-1.9-4.6 0-4.1 2.7-6.5 8-7.2l9.7-1.2v3.5h-.1zm48.8-32.9c6.3 0 10.8.8 13.6 2.5v13.9c-3.4-2.6-7.3-3.8-11.5-3.8-4.7 0-8.4 1.4-11.2 4.1-2.8 2.8-4.1 6.5-4.1 11.4 0 4.7 1.3 8.4 4 11.1 2.6 2.7 6.3 4 10.9 4 4.1 0 8.1-1.3 12-3.8v13.2c-3.7 2.2-9.1 3.2-16.1 3.2-8.2 0-14.8-2.5-19.9-7.4-5.1-5-7.6-11.3-7.6-19.2 0-9 2.7-16.1 8.1-21.3 5.5-5.3 12.7-7.9 21.8-7.9zm71.7 54.5h-19.7l-17-26.3h-.2v26.3h-16.4v-78.5h16.4v49.9h.2l15.9-24.4h19.4l-19 24.8 20.4 28.2zM25.5 209.2c-3.3 0-6.9.4-10.8 1.3-4 .9-7.1 1.9-9.4 3.1V226c5.7-3.8 11.8-5.7 18.1-5.7 6.3 0 9.5 2.9 9.5 8.7l-14.5 2C6.1 232.6 0 238.6 0 248.9c0 4.9 1.5 8.8 4.4 11.7 3 2.9 7 4.4 12.2 4.4 7 0 12.3-3 15.8-8.9h.2v7.6h15.5v-31.8c.2-15.1-7.4-22.7-22.6-22.7zm7.3 32.9c0 3.2-1 5.9-2.9 8.1-1.9 2.1-4.5 3.2-7.5 3.2-2.2 0-4-.6-5.3-1.8-1.3-1.2-1.9-2.7-1.9-4.6 0-4.1 2.7-6.5 8-7.2l9.7-1.2v3.5h-.1zm56.4-31.6h16.4v53.1H89.2v-8.1h-.3c-4.1 6.2-9.5 9.4-16.3 9.4-12.4 0-18.5-7.5-18.5-22.4v-32.1h16.4V241c0 7.5 3 11.2 9 11.2 2.9 0 5.3-1 7.1-3.1 1.8-2.1 2.6-4.8 2.6-8.4v-30.2zm59.5-25.5v31.6h-.2c-2.7-4.9-7.5-7.4-14.4-7.4-7.2 0-13.1 2.6-17.6 7.9-4.5 5.3-6.7 12.3-6.7 21.1 0 8.4 2 15 6.1 19.6 4 4.7 9.4 7 16.1 7 7.2 0 12.8-2.9 16.5-8.6h.2v7.3h16.4V185h-16.4zm.4 52.8c0 4.4-1 7.9-3.1 10.6-2.1 2.7-4.8 4-8.1 4-3.5 0-6.2-1.3-8.2-3.8-2-2.5-3-6.1-3-10.8 0-5 1-8.9 3.1-11.8 2-2.8 4.9-4.3 8.5-4.3 3.2 0 5.8 1.1 7.8 3.4s3 5.2 3 8.6v4.1zm24.7-38.1c-1.8-1.7-2.6-3.7-2.6-6 0-2.5.9-4.5 2.6-6 1.8-1.6 4-2.3 6.8-2.3s5.1.8 6.8 2.3c1.8 1.5 2.6 3.5 2.6 6s-.9 4.5-2.6 6.1c-1.7 1.6-4 2.4-6.8 2.4-2.7-.1-5-.9-6.8-2.5z"
              ></path>
              <path
                fill="#fff"
                d="M197.2 252.2c.9-.2 1.8-.3 2.7-.5v11.5c-2 .5-4.1.9-6.3 1.3-2.2.3-4.5.5-6.9.5-2.2 0-4.2-.4-6-1.1-1.8-.7-3.3-1.8-4.6-3.1-1.2-1.4-2.2-3-2.9-4.9-.7-2-1-4.1-1-6.5v-38.8h16.3v35.1c0 2.2.5 4 1.6 5.1 1.1 1.1 2.5 1.7 4.3 1.7 1.1 0 1.9-.1 2.8-.3z"
              ></path>
              <path
                fill="#fff"
                d="M247.5 216.7c-5-5-12-7.4-20.8-7.4-9 0-16.1 2.5-21.4 7.4-5.3 5-7.9 11.9-7.9 20.6 0 8.5 2.5 15.2 7.6 20.2s12 7.4 20.9 7.4c9 0 16.1-2.5 21.3-7.7 5.2-5.1 7.8-12.1 7.8-20.9 0-8.1-2.5-14.7-7.5-19.6zm-21 35.7c-8.3 0-12.4-5.1-12.4-15.3 0-4.9 1.1-8.6 3.2-11.3 2.2-2.7 5.2-4 9.1-4 7.9 0 11.9 5 11.9 14.9 0 10.4-4 15.7-11.8 15.7zm117.4-21.8v33.1h-16.4v-30.3c0-7.7-2.8-11.6-8.5-11.6-2.7 0-4.9 1.2-6.6 3.5-1.7 2.3-2.6 5.2-2.6 8.7v29.7h-16.4V233c0-7.5-2.8-11.2-8.4-11.2-2.8 0-5.1 1.1-6.7 3.3-1.7 2.2-2.5 5.2-2.5 9v29.5h-16.4v-53.1h16.4v8.3h.2c1.7-2.8 4.1-5.2 7.2-6.9 3.1-1.8 6.4-2.7 10.1-2.7 7.5 0 12.7 3.3 15.4 9.9 4.1-6.6 10-9.9 17.9-9.9 11.5 0 17.3 7.1 17.3 21.4zm28.2-21.4c-3.3 0-6.9.4-10.8 1.3-4 .9-7.1 1.9-9.4 3.1V226c5.7-3.8 11.8-5.7 18.1-5.7 6.3 0 9.5 2.9 9.5 8.7l-14.5 2c-12.2 1.6-18.4 7.5-18.4 17.9 0 4.9 1.5 8.8 4.4 11.7 3 2.9 7 4.4 12.2 4.4 7 0 12.3-3 15.9-8.9h.2v7.6h15.5v-31.8c.1-15.1-7.5-22.7-22.7-22.7zm7.4 32.9c0 3.2-1 5.9-2.9 8.1-2 2.1-4.5 3.2-7.5 3.2-2.2 0-4-.6-5.3-1.8-1.3-1.2-1.9-2.7-1.9-4.6 0-4.1 2.7-6.5 8-7.2l9.7-1.2v3.5h-.1zm48.8-32.9c6.3 0 10.8.8 13.6 2.5v13.9c-3.4-2.6-7.3-3.8-11.5-3.8-4.7 0-8.4 1.4-11.2 4.1-2.8 2.8-4.1 6.5-4.1 11.4 0 4.7 1.3 8.4 4 11.1 2.6 2.7 6.3 4 10.9 4 4.1 0 8.1-1.3 12-3.8v13.2c-3.7 2.2-9.1 3.2-16.1 3.2-8.2 0-14.8-2.5-19.9-7.4-5.1-5-7.6-11.3-7.6-19.2 0-9 2.7-16.1 8.1-21.3 5.5-5.3 12.7-7.9 21.8-7.9zm71.7 54.5h-19.7l-17-26.3h-.2v26.3h-16.4v-78.5h16.4v49.9h.2l15.9-24.4h19.4l-19 24.8 20.4 28.2z"
              ></path>
            </svg>
          </a>
          <a
            href="https://soundcloud.com/theopusmusic"
            className="aspect-w-1 aspect-h-1 rounded-xl text-sm text-white hover:border-opacity-100 hover:text-yellow-400 transition duration-200 bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-filter backdrop-blur flex justify-center items-center"
            aria-label="Soundcloud"
            target="_blank"
            rel="nofollower noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="28.432 71.063 194.75 111.365"
              className="w-full p-12"
            >
              <path
                fill="#FFFFFF"
                d="M39.375 114.578c-.413 0-.752.332-.804.79l-1.903 17.342 1.903 16.959c.052.45.391.782.804.782.406 0 .738-.324.804-.782l2.154-16.959-2.154-17.35c-.067-.457-.399-.782-.804-.782zm-7.141 6.647c-.406 0-.723.31-.775.752l-1.416 10.733 1.416 10.542c.052.441.369.752.775.752.391 0 .708-.311.774-.752l1.667-10.542-1.667-10.733c-.066-.443-.383-.752-.774-.752zm14.724-10.047c-.509 0-.915.398-.967.951l-1.8 20.581 1.8 19.821c.052.554.458.951.967.951.501 0 .907-.397.974-.943l2.043-19.829-2.043-20.581c-.067-.553-.473-.951-.974-.951zm7.649-.723c-.598 0-1.084.479-1.129 1.114l-1.704 21.142 1.704 20.456c.044.634.531 1.112 1.129 1.112s1.084-.479 1.136-1.112l1.934-20.456-1.934-21.149c-.051-.628-.538-1.107-1.136-1.107zm9.007 42.88zm0-40.247c-.044-.723-.604-1.269-1.291-1.269-.701 0-1.254.546-1.298 1.284l-1.608 19.607 1.608 20.625c.044.729.598 1.284 1.298 1.284.687 0 1.247-.555 1.291-1.284l1.83-20.625-1.83-19.622zm6.485-13.728c-.782 0-1.424.634-1.461 1.453l-1.512 31.912 1.512 20.617c.037.805.679 1.446 1.461 1.446.767 0 1.409-.644 1.46-1.454v.008l1.704-20.617-1.704-31.919c-.052-.811-.693-1.446-1.46-1.446zm7.715-7.355c-.878 0-1.593.716-1.63 1.616l-1.409 39.215 1.409 20.492c.037.893.752 1.607 1.63 1.607.863 0 1.586-.715 1.623-1.615v.008l1.601-20.492-1.601-39.215c-.037-.9-.759-1.616-1.623-1.616zm8.019-3.54c-.974 0-1.763.782-1.792 1.785l-1.321 42.482 1.321 20.277c.029.988.819 1.771 1.792 1.771.959 0 1.748-.782 1.785-1.777v.016l1.482-20.287-1.482-42.482c-.037-1.003-.826-1.785-1.785-1.785zm9.914.354c-.037-1.092-.893-1.948-1.955-1.948-1.07 0-1.933.856-1.955 1.948l-1.224 43.914 1.224 20.16a1.959 1.959 0 001.955 1.934c1.062 0 1.918-.855 1.955-1.947l1.372-20.146-1.372-43.915zm0 64.059v.015zm6.064-65.048c-1.158 0-2.095.93-2.117 2.11l-1.122 42.792 1.122 19.969c.022 1.173.959 2.104 2.117 2.104s2.088-.931 2.125-2.117v.021l1.254-19.976-1.254-42.792c-.038-1.181-.967-2.111-2.125-2.111zm8.085 1.402c-1.254 0-2.257 1.003-2.287 2.279l-1.018 41.227 1.024 19.837c.022 1.262 1.025 2.265 2.279 2.265s2.265-1.003 2.287-2.279v.016l1.15-19.836-1.15-41.235a2.288 2.288 0 00-2.285-2.274zm9.501-7.584a2.451 2.451 0 00-1.35-.413c-.487 0-.944.147-1.328.398a2.477 2.477 0 00-1.122 2.043l-.015.465-.915 48.589c0 .029.929 19.719.929 19.719v.08c.03.555.236 1.062.576 1.461a2.433 2.433 0 001.874.895c.664 0 1.269-.281 1.711-.724s.723-1.048.738-1.72l.103-1.955.93-17.748-1.033-49.062a2.512 2.512 0 00-1.098-2.028zm1.099 70.802v-.009.009-.014.005zm6.992-75.449a2.557 2.557 0 00-2.979.222 2.627 2.627 0 00-.966 2.006l-.007.273-1.068 53.245.546 9.841.531 9.582c.015 1.416 1.188 2.59 2.61 2.59 1.425 0 2.598-1.174 2.619-2.611v.021l1.158-19.423-1.158-53.518a2.66 2.66 0 00-1.286-2.228zm71.94 30.415c-3.254 0-6.359.656-9.191 1.844-1.889-21.407-19.844-38.197-41.737-38.197a42.468 42.468 0 00-15.203 2.833c-1.793.693-2.265 1.409-2.286 2.796v75.397c.021 1.453 1.148 2.582 2.566 2.722.059.008 65.852 0 65.852 0 13.123 0 23.754-10.512 23.754-23.635-.001-13.123-10.632-23.76-23.755-23.76zm-150.42 61.689c-2.781-.655-3.533-1.01-3.533-2.108 0-.774.627-1.579 2.508-1.579 1.608 0 2.862.648 3.991 1.809l2.538-2.457c-1.66-1.732-3.667-2.767-6.403-2.767-3.459 0-6.27 1.962-6.27 5.149 0 3.459 2.257 4.492 5.496 5.236 3.312.752 3.91 1.262 3.91 2.391 0 1.328-.981 1.91-3.062 1.91-1.682 0-3.26-.582-4.492-2.014l-2.53 2.258c1.328 1.955 3.888 3.187 6.823 3.187 4.788 0 6.905-2.25 6.905-5.593-.001-3.82-3.092-4.763-5.881-5.422zm16.163-7.102c-4.788 0-7.62 3.718-7.62 9.06 0 5.349 2.833 9.059 7.62 9.059 4.795 0 7.627-3.71 7.627-9.059 0-5.342-2.832-9.06-7.627-9.06zm0 14.636c-2.833 0-4.013-2.441-4.013-5.576s1.18-5.569 4.013-5.569c2.84 0 4.02 2.435 4.02 5.569 0 3.132-1.18 5.576-4.02 5.576zm21.806-4.493c0 2.803-1.38 4.543-3.607 4.543-2.235 0-3.593-1.785-3.593-4.596v-9.812h-3.511v9.863c0 5.119 2.862 7.975 7.104 7.975 4.463 0 7.119-2.936 7.119-8.025v-9.812h-3.511l-.001 9.864zm18.669-2.434c0 .974.044 3.187.044 3.836-.221-.45-.796-1.327-1.225-1.983l-6.227-9.28h-3.363v17.563h3.467v-7.73c0-.98-.052-3.188-.052-3.836.229.449.804 1.328 1.225 1.984l6.455 9.582h3.135v-17.563h-3.46v7.427zm13.471-7.429h-5.488v17.564h5.237c4.516 0 8.986-2.611 8.986-8.787 0-6.423-3.719-8.777-8.735-8.777zm-.251 14.149h-1.732V165.7H119c3.71 0 5.245 1.776 5.245 5.362-.002 3.215-1.691 5.37-5.379 5.37zm19.851-10.94c1.578 0 2.582.708 3.217 1.902l3.252-1.496c-1.105-2.287-3.104-3.896-6.418-3.896-4.594 0-7.803 3.719-7.803 9.059 0 5.549 3.082 9.06 7.678 9.06 3.188 0 5.289-1.476 6.5-3.97l-2.967-1.756c-.929 1.558-1.852 2.244-3.438 2.244-2.633 0-4.168-2.42-4.168-5.578 0-3.26 1.513-5.569 4.147-5.569zm13.027-3.209h-3.512v17.564h10.562v-3.461h-7.053v-14.104h.003zm16.295-.28c-4.788 0-7.629 3.718-7.629 9.06 0 5.349 2.841 9.059 7.629 9.059 4.795 0 7.635-3.71 7.635-9.059 0-5.342-2.84-9.06-7.635-9.06zm0 14.636c-2.833 0-4.014-2.441-4.014-5.576s1.181-5.569 4.014-5.569c2.84 0 4.014 2.435 4.014 5.569 0 3.132-1.174 5.576-4.014 5.576zm21.807-4.493c0 2.803-1.373 4.543-3.607 4.543-2.235 0-3.594-1.785-3.594-4.596v-9.812h-3.51v9.863c0 5.119 2.861 7.975 7.104 7.975 4.463 0 7.125-2.936 7.125-8.025v-9.812h-3.518v9.864zm13.402-9.863h-5.496v17.564h5.236c4.529 0 8.986-2.611 8.986-8.787.001-6.423-3.703-8.777-8.726-8.777zm-.26 14.149h-1.725V165.7h1.857c3.711 0 5.236 1.776 5.236 5.362.003 3.215-1.67 5.37-5.368 5.37z"
              ></path>
            </svg>
          </a>
        </div>
        <h2 className="mt-12 border-b border-gray-400 border-opacity-30 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="w-5 h-5 mr-2 text-gray-600"
          >
            <path
              fill="currentColor"
              d="M10.01.019C4.515.019.019 4.515.019 10.01c0 5.494 4.496 9.99 9.991 9.99 5.494 0 9.99-4.496 9.99-9.99C20 4.515 15.554.019 10.01.019zm4.595 14.436c-.199.299-.549.4-.85.201-2.349-1.45-5.296-1.75-8.793-.951-.348.102-.648-.148-.748-.449-.101-.35.149-.648.45-.749 3.795-.85 7.093-.499 9.69 1.1.35.149.4.548.251.848zm1.2-2.747c-.251.349-.7.499-1.051.249-2.697-1.646-6.792-2.148-9.939-1.148-.398.101-.85-.1-.949-.498-.101-.402.1-.852.499-.952 3.646-1.098 8.143-.548 11.239 1.351.3.149.45.648.201.998zm.099-2.799c-3.197-1.897-8.542-2.097-11.59-1.146a.938.938 0 01-1.148-.6.937.937 0 01.599-1.151c3.547-1.049 9.392-.85 13.089 1.351.449.249.599.849.349 1.298-.25.35-.849.498-1.299.248z"
            ></path>
          </svg>
          Latest Playlist
        </h2>
        <div className="mt-4 w-full">
          {playlist.map(playlist => {
            return (
              <PlaylistCard
                url={playlist.url}
                title={playlist.title}
                featured={playlist.featured}
                cover={playlist.cover.gatsbyImageData}
              />
            )
          })}
        </div>
        <Link to="/" className="btn__body inline-block mt-12">
          ← Back to full site
        </Link>
      </div>
    </Layout>
  )
}

export default Profile

export const profilequery = graphql`
  query profileplaylists {
    allDatoCmsPlaylist(sort: { fields: date, order: DESC }, limit: 1) {
      nodes {
        title
        url
        featured
        date
        cover {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  }
`
