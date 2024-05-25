import { Container } from "./styles";
import VinayakSingh from "../../assets/VinayakSingh.png";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import tailwind from "../../assets/tailwind.png"
import vero from '../../assets/perfil-10.png'

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Sobre mi</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Hola, soy Vero, una apasionada desarrolladora front-end con un ojo agudo para el diseño y una obsesión por la perfección en la experiencia de usuario.A lo largo de este camino he perfeccionado mis habilidades en HTML, CSS, JavaScript y frameworks como React, para crear interfaces web que no solo son visualmente atractivas, sino también funcionales e intuitivas.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          Mi viaje en el mundo del desarrollo front-end comenzó cuando descubrí el poder de transformar mis diseños en realidad a través del código. Desde entonces, he trabajado en una variedad de proyectos, desde aplicaciones web responsivas hasta aplicaciones mobiles.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            También soy diseñadora gráfica con 10 años de experiencia, en esta area me dedique a desarrollar ideas ceativas, y hoy puedo fucionar mis conocimientos en el diseño con la programación</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Tecnologías</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
        
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={tailwind} alt="JavaScript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.1 * 1000}>
          <img src={vero} alt="Vero Campero" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
