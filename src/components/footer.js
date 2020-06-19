import React from "react"
import style from "./footer.module.scss"
import { Heart } from "react-feather"

const Footer = () => (
  <footer className={style.footer}>
    © {new Date().getFullYear()}, Made with
    <span
      style={{
        margin: "0 0.5rem",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
      role="img"
      aria-labelledby="heart emoji"
    >
      <Heart size={12.8} color="red" />
    </span>
    by
    {` `}
    <a className={style.footer__link} href="https://twitter.com/wasifbaliyan">
      Wasif Baliyan
    </a>
  </footer>
)

export default Footer
