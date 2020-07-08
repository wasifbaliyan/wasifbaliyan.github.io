import React from "react"
import style from "./projects.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import { Trello } from "react-feather"

const projects = [
  {
    title: "MyBurger",
    desc: "MyBurger Web App.",
    imgUrl:
      "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    github: "https://github.com/wasifbaliyan/myburger",
    live: "https://wasifbaliyan.github.io/myburger/",
    id: 1,
    tags: ["#firebase", "#reactjs"],
  },
  {
    title: "Portfolio Website",
    desc: "Portfolio web app.",
    imgUrl:
      "https://avatars2.githubusercontent.com/u/40515308?s=460&u=8f69eceda1b14aeca71cb94d5ff597d22263b318&v=4",
    github: "https://github.com/wasifbaliyan/wasifbaliyan.github.io",
    live: "https://wasifbaliyan.github.io",
    id: 6,
    tags: ["#gatsbyjs", "#github"],
  },
  {
    title: "Color Game",
    desc: "Color Game web app.",
    imgUrl:
      "https://images.pexels.com/photos/1150626/pexels-photo-1150626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    github: "https://github.com/wasifbaliyan/color-game",
    live: "https://wasifbaliyan.github.io/color-game/",
    id: 2,
    tags: ["#javascript", "#css3", "#html5"],
  },
  {
    title: "Random Quotes Generator",
    desc: "Random Quote Generator.",
    imgUrl:
      "https://images.pexels.com/photos/1395463/pexels-photo-1395463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    github: "https://github.com/wasifbaliyan/random-quotes",
    live: "https://wasifbaliyan.github.io/random-quotes/",
    id: 3,
    tags: ["#api", "#reactjs"],
  },
  {
    title: "Monster Rolodex",
    desc: "Monster Rolodex web app.",
    imgUrl:
      "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    github: "https://github.com/wasifbaliyan/monster-rolodex",
    live: "https://wasifbaliyan.github.io/monster-rolodex/",
    id: 4,
    tags: ["#javascript", "#reactjs"],
  },
  {
    title: "Dice Pig Game",
    desc: "Pig Game web app. ",
    imgUrl:
      "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    github: "https://github.com/wasifbaliyan/pig-game",
    live: "https://wasifbaliyan.github.io/pig-game/",
    id: 5,
    tags: ["#javascript", "#html5", "#css3"],
  },
  {
    title: "StartUp Website",
    desc: "Mountain Travel Startup web app.",
    imgUrl:
      "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    github: "https://github.com/wasifbaliyan/startup-landing-page/",
    live: "https://wasifbaliyan.github.io/startup-landing-page/",
    id: 7,
    tags: ["#html5", "#css3"],
  },
]

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <div className={style.projects}>
      <h1 className={style.projects__heading}>
        Projects <Trello size={40} style={{ marginBottom: "-.3rem" }} />
      </h1>
      <div className={style.projects__content}>
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  </Layout>
)

export default Projects
