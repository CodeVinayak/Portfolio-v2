import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"

import linkedin from "../../assets/linkedin.svg"
import githubIcon from "../../assets/github.svg"
import whatsapp from "../../assets/whatsapp.svg"
import telegram from "../../assets/telegram.svg"
import Hello from "../../assets/Hello.gif"

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">

        <ScrollAnimation animateIn="fadeInUp">
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={200}>
          <h1>Sufiyan S</h1>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={400}>
          <h3>Data Science</h3>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={600}>
          <p className="small-resume">2nd BSc Data Science</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={800}>
          <NavHashLink smooth to="#contact" className="button">
            Contact
          </NavHashLink>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={1000}>
          <div className="social-media">

            <a
              href="https://www.linkedin.com/in/sufiyan-undefined"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>

            <a
              href="https://github.com/CodeVinayak/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=%2B918098667451&text=Hello+sufiyan+I+found+your+contact+through+portfolio+site.%0A%0A"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="WhatsApp" />
            </a>

            <a
              href="https://t.me/CodeVinayak"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="Telegram" />
            </a>

          </div>
        </ScrollAnimation>
      </div>

      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1000}>
          <img src={Illustration} alt="Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
