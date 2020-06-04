import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

import style from "./404.module.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className={style.notfound}>NOT FOUND</h1>
    <p className={style.notfound__text}>
      You just hit a route that doesn&#39;t exist... the sadness.
    </p>
    <Link className={style.notfound__link} to="/">
      Go back
    </Link>
  </Layout>
)

export default NotFoundPage
