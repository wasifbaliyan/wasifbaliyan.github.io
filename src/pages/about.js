import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import style from "./about.module.scss"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className={style.about}>
      <div className={style.main}>
        <h1 className={style.main__heading}>Wasif Baliyan</h1>
        <p className={style.main__text}>
          Creative, ambitious, and enterprising software engineer. — I strive in
          teams with strong engineering cultures and meaningful cross-functional
          collaboration.
        </p>
      </div>
      <div className={style.skills}>
        <h2 className={style.skills__heading}>Skills</h2>
        <p className={style.skills__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          iste, explicabo inventore perferendis vero ut magnam assumenda
          architecto dolor illum minus eum obcaecati fugit alias asperiores odio
          porro animi molestias?
        </p>
      </div>
    </div>
  </Layout>
)

export default About
