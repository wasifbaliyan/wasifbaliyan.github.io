import React from "react"

import style from "./project.module.scss"

const Project = ({ project }) => (
  <div className={style.project}>
    <div className={style.project__img}>&nbsp;</div>
    <h3 className={style.project__title}>{project.title}</h3>
    <div className={style.project__content}>
      {project.tags.map(tag => (
        <span className={style.project__tag}>{tag}</span>
      ))}
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
