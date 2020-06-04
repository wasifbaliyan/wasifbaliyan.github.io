import React from "react"
import { Link } from "gatsby"
import style from "./index.module.scss"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={style.home}>
      <div className={style.img}>
        <Image />
      </div>
      <div className={style.content}>
        <h1 className={style.content__heading}>Nice to meet you</h1>
        <p className={style.content__text}>
          My name’s <span className={style.content__name}>Wasif Baliyan</span>.
          I’m a creative, ambitious, and self taught{" "}
          <span className={style.content__name_1}>full-stack JavaScript </span>
          developer living in{" "}
          <span className={style.content__name_1}>New Delhi</span>.
        </p>
        <p className={style.content__text}>
          I mostly work with{" "}
          <span className={style.content__name_1}>
            MERN (MongoDB, Express, ReactJS and NodeJS) stack
          </span>
          .
        </p>{" "}
        <p className={style.content__text}>
          If you want to hire me, feel free to{" "}
          <Link className={style.content__link} to="/contact">
            contact
          </Link>{" "}
          or{" "}
          <Link className={style.content__link} to="/about">
            get to know me better
          </Link>
          .
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
