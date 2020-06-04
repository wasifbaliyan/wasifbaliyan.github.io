import React from "react"

import style from "./project.module.scss"

const Project = ({ project }) => (
  <div className={style.project}>
    <div className={style.project__img}>
      <img src={project.imgUrl} className={style.img} alt={project.title} />
    </div>
    <div className={style.project__content}>
      <h3 className={style.project__title}>{project.title}</h3>
      <p className={style.project__text}>{project.desc}</p>
      <div className={style.btngroup}>
        <a className={style.btngroup__btn} href={project.github}>
          Github
        </a>
        <a className={style.btngroup__btn} href={project.live}>
          Live
        </a>
      </div>
    </div>
  </div>
)

export default Project
