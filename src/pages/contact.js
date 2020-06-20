import React from "react"
import style from "./contact.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Mail,
  PhoneCall,
  Twitter,
  Heart,
  GitHub,
  Linkedin,
  Instagram,
} from "react-feather"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className={style.contact}>
      <h1 className={style.contact__heading}>
        Say Hello <PhoneCall size={40} style={{ marginBottom: "-.3rem" }} />
      </h1>
      <p className={style.contact__text}>
        I always love hearing from you. I'll be happy to connect with you on{" "}
        <a
          className={style.contact__link}
          href="https://twitter.com/wasifbaliyan"
        >
          twitter <Twitter size={23} style={{ marginBottom: "-.3rem" }} />
        </a>{" "}
        or{" "}
        <a className={style.contact__link} href="mailto:w.baliyan@gmail.com">
          email <Mail size={23} style={{ marginBottom: "-.3rem" }} />
        </a>
        .
      </p>

      <div className={style.social}>
        <h2 className={style.social__heading}>
          Other Social Mediums{" "}
          <Heart style={{ marginBottom: "-.3rem" }} size={30} />
        </h2>
        <ul className={style.list}>
          <li className={style.list__item}>
            <a
              href="https://twitter.com/wasifbaliyan"
              className={style.list__link}
            >
              <Twitter size={40} />
            </a>
          </li>
          <li className={style.list__item}>
            <a
              href="https://github.com/wasifbaliyan"
              className={style.list__link}
            >
              <GitHub size={40} />
            </a>
          </li>
          <li className={style.list__item}>
            <a
              href="https://linkedin.com/in/wasifbaliyan"
              className={style.list__link}
            >
              <Linkedin size={40} />
            </a>
          </li>
          <li className={style.list__item}>
            <a
              href="https://instagram.com/wasifbaliyan"
              className={style.list__link}
            >
              <Instagram size={40} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default Contact
