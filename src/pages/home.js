import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Home = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container-thin md:mt-48">
      <h1>Home</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Home
