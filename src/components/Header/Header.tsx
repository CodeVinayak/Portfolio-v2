import { Container } from './styles'
import { useLocation } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import Resume from '../../assets/Raihan_Anwar_CV_2026_MT.pdf'

export function Header() {
  const [isActive, setActive] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  function getSectionLink(section: string) {
    return isHome ? `#${section}` : `/#${section}`
  }

  function toggleTheme() {
    const html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }

  function closeMenu() {
    setActive(false)
  }

  return (
    <Container className="header-fixed">
      <HashLink smooth to={getSectionLink('home')} className="logo" onClick={closeMenu}>
        <span>{"<Raihan "}</span>
        <span>{" Anwar/>"}</span>
      </HashLink>
      <input
        onChange={toggleTheme}
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
      />
      <label htmlFor="switch">Toggle</label>
      <nav className={isActive ? 'active' : ''}>
        <NavHashLink smooth to={getSectionLink('home')} onClick={closeMenu}>
          Home
        </NavHashLink>
        <NavHashLink smooth to={getSectionLink('about')} onClick={closeMenu}>
          About me
        </NavHashLink>
        <NavHashLink smooth to={getSectionLink('project')} onClick={closeMenu}>
          Project
        </NavHashLink>
        <NavHashLink smooth to={getSectionLink('contact')} onClick={closeMenu}>
          Contact
        </NavHashLink>
        <a href={Resume} download className="button">
          Resume
        </a>
      </nav>
      <div
        aria-expanded={isActive ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
        className={isActive ? 'menu active' : 'menu'}
        onClick={() => {
          setActive(!isActive)
        }}
      ></div>
    </Container>
  )
}
