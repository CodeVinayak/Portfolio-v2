import { Container } from './styles'
import { HashLink } from 'react-router-hash-link'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import whatsapp from '../../assets/whatsapp.svg'

export function Footer() {
  return (
    <Container className="footer">
      <HashLink smooth to="/#home" className="logo">
        <span>Raihan</span>
        <span>Anwar</span>
      </HashLink>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/raihan-anwar-433b70149?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B6285766600726&text=Hello+Raihan+I+found+your+contact+through+your+portfolio.%0A%0A"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
      </div>
    </Container>
  )
}
