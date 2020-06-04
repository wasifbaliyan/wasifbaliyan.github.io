import React from "react"
import style from "./projects.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const projects = [
  {
    title: "My Burger",
    desc:
      "This is a burger ordering web app. It was built with ReactJS at frontend and firebase at backend. I use Redux for state management.",
    imgUrl:
      "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    github: "https://github.com/wasifbaliyan/myburger",
    live: "https://wasifbaliyan.github.io/myburger/",
    id: 1,
  },
  {
    title: "The Color Game",
    desc:
      "This is a Color Game web app. It was built with HTML5, CSS3 and Vanilla JavaScript.",
    imgUrl:
      "https://images.pexels.com/photos/1150626/pexels-photo-1150626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    github: "https://github.com/wasifbaliyan/color-game",
    live: "https://wasifbaliyan.github.io/color-game/",
    id: 2,
  },
  {
    title: "Random Quotes Generator",
    desc:
      "This is a Random Quote Generator web app. It was built with ReactJS.",
    imgUrl:
      "https://images.pexels.com/photos/1395463/pexels-photo-1395463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    github: "https://github.com/wasifbaliyan/random-quotes",
    live: "https://wasifbaliyan.github.io/random-quotes/",
    id: 3,
  },
  {
    title: "Monster Rolodex",
    desc:
      "This is a Monster Rolodex web app. It was built with ReactJS and a random robots genrator api.",
    imgUrl:
      "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    github: "https://github.com/wasifbaliyan/monster-rolodex",
    live: "https://wasifbaliyan.github.io/monster-rolodex/",
    id: 4,
  },
  {
    title: "The Pig Game",
    desc:
      "This is a Pig Game web app. It was built with HTML5, CSS3 and  vanilla JavaScript.",
    imgUrl:
      "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    github: "https://github.com/wasifbaliyan/pig-game",
    live: "https://wasifbaliyan.github.io/pig-game/",
    id: 5,
  },
]

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <div className={style.projects}>
      <h1 className={style.projects__heading}>Projects</h1>
      <div className={style.projects__content}>
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  </Layout>
)

export default Projects
