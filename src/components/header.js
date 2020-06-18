import React from "react"
import { Link } from "gatsby"
import style from "./header.module.scss"

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <div className={style.logo__item}>
          Wasif Baliyan{" "}
          <span className={style.logo__item_sub}>
            {"{"}webdev{"}"}
          </span>
        </div>
      </div>
      <nav className={style.nav}>
        <ul className={style.nav__list}>
          <li className={style.nav__item}>
            <Link
              activeClassName={style.active}
              to="/"
              className={style.nav__link}
            >
              Home
            </Link>
          </li>
          <li className={style.nav__item}>
            <Link
              activeClassName={style.active}
              to="/about"
              className={style.nav__link}
            >
              About
            </Link>
          </li>
          <li className={style.nav__item}>
            <Link
              activeClassName={style.active}
              to="/projects"
              className={style.nav__link}
            >
              Projects
            </Link>
          </li>
          <li className={style.nav__item}>
            <Link
              activeClassName={style.active}
              to="/contact"
              className={style.nav__link}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
