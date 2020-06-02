import React from "react"
import style from "./contact.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className={style.contact}>
      <h1 className={style.contact__heading}>
        I always love hearing from you.
      </h1>
      <div className={style.contact__email}>
        <span role="img" aria-labelledby="email emoji">
          📩
        </span>{" "}
        wasif@wasifbaliyan.com
      </div>
      <ul className={style.list}>
        <li className={style.list__item}>
          <a
            href="https://twitter.com/wasifbaliyan"
            className={style.list__link}
          >
            Twitter
          </a>
        </li>
        <li className={style.list__item}>
          <a
            href="https://github.com/wasifbaliyan"
            className={style.list__link}
          >
            Github
          </a>
        </li>
        <li className={style.list__item}>
          <a
            href="https://linkedin.com/in/wasifbaliyan"
            className={style.list__link}
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  </Layout>
)

export default Contact
