import React from "react"
import style from "./footer.module.scss"

const Footer = () => (
  <footer className={style.footer}>
    © {new Date().getFullYear()}, Made with
    <span
      style={{ margin: "0 0.3rem" }}
      role="img"
      aria-labelledby="heart emoji"
    >
      ❤️
    </span>
    by
    {` `}
    <a href="https://twitter.com/wasifbaliyan">Wasif Baliyan</a>
  </footer>
)

export default Footer
