import React from "react"
import style from "./projects.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <div className={style.projects}>
      <h1 className={style.projects__heading}>Projects</h1>
      <p className={style.projects__text}>
        This section is work in progress. See you soon.
      </p>
    </div>
  </Layout>
)

export default Projects
