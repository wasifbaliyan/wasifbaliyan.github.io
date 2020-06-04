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
          Creative, ambitious, and full-stack JavaScript developer. — I strive
          in teams with strong engineering cultures and meaningful
          cross-functional collaboration.
        </p>
      </div>
      <div className={style.skills}>
        <h2 className={style.skills__heading}>Tech Skills</h2>
        <div className={style.tech}>
          <div className={style.frontend}>
            <h3 className={style.heading}>Frontend</h3>
            <ul className={style.list}>
              <li className={style.list__item}>ReactJS</li>
              <li className={style.list__item}>GatsbyJS</li>
              <li className={style.list__item}>Bootstrap4</li>
              <li className={style.list__item}>Html5</li>
              <li className={style.list__item}>Css3</li>
              <li className={style.list__item}>JavaScript</li>
            </ul>
          </div>
          <div className={style.backend}>
            <h3 className={style.heading}>Backend</h3>
            <ul className={style.list}>
              <li className={style.list__item}>NodeJS</li>
              <li className={style.list__item}>MongoDB</li>
              <li className={style.list__item}>ExpressJS</li>
              <li className={style.list__item}>Mongoose</li>
            </ul>
          </div>
          <div className={style.general}>
            <h3 className={style.heading}>General</h3>
            <ul className={style.list}>
              <li className={style.list__item}>Git</li>
              <li className={style.list__item}>Github</li>
              <li className={style.list__item}>VS Code</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.education}>
        <h2 className={style.education__heading}>Education</h2>
        <ul className={style.list}>
          <li className={style.list__item}>
            Bachelors in Technology, Electrical Engineering Aligarh Muslim
            University Aligarh India
          </li>
        </ul>
      </div>

      <div className={style.language}>
        <h3 className={style.language__heading}>Languages</h3>
        <ul className={style.list}>
          <li className={style.list__item}>English</li>
          <li className={style.list__item}>Hindi</li>
          <li className={style.list__item}>Urdu</li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default About
