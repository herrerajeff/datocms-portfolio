import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import catgif from "../images/cats.gif"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="mx-8 md:absolute md:inset-0 text-center flex flex-col justify-center items-center">
      <div className=" md:bg-black/60 p-12 md:p-32 rounded-xl md:border border-white/10 md:shadow-2xl">
        <h1 className="block text-9xl font-light text-yellow-400">404</h1>
        <p className="max-w-xl text-lg md:text-xl leading-relaxed">
          Looks like the cat just knocked your link off the table...use the
          navigation to get back to a page that exists.
        </p>
      </div>
    </div>
    <img
      className="-z-10 fixed inset-0 w-full h-full grayscale opacity-[.15]"
      src={catgif}
      alt="cat knocking things off table"
    />
  </Layout>
)

export default NotFoundPage
