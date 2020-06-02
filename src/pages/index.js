import React from "react"
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
          I’m a creative, ambitious, and self taught full stack{" "}
          <span className={style.content__name_1}>JavaScript </span>
          developer.
        </p>
        <p className={style.content__text}>
          Recently I joined{" "}
          <span className={style.content__name_1}>Google </span>
          in <span className={style.content__name_1}>London </span>to work on a
          research project enabling meaningful control of data in distributed
          systems. Previously I built a web-app at N26 in Berlin.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
