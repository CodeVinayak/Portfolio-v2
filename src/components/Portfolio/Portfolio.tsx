import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import DownloadApp from '../../assets/download-app.svg'
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>My Portfolio</h2>

      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://madewithluv.in/" target="_blank" rel="noreferrer">
              <img src={DownloadApp} alt="Download App" />
            </a>
                {/* <a href="https://ecommerce.vinayaksingh.in/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              {/* <h3>E-commerce Website + App </h3> */}
              <h3>E-commerce Website  </h3>
              {/* <p>The Website is made with the help of Wordpress and woocommerce. The Android app is made with the help of Java that converted website into app.
              </p> */}
              <p>The Website is made with the help of Wordpress and woocommerce. 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Java</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://drrohitdamor.vinayaksingh.in/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Online Appointment Booking</h3>
              <p>Customers Can Schedule an Appointment with You in under a Minute. This website is speically designed for Medical Appointment booking for our client <a href="https://drrohitdamor.vinayaksingh.in/"> DR. ROHIT DAMOR</a>
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                {/* <a href="https://github.com/" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a> */}
                <a href="https://mitulindustries.vinayaksingh.in/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Manufacturing Industries</h3>
              <p>Manufacturing Industrial Website for Showing Product and information about their business in online world.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/Portfolio-v1" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visitar site" />
                </a>
                <a href="https://portfoliov1.vinayaksingh.in/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Portfolio V1</h3>
              <p>An alternate version of my portfolio, using HTML,CSS and JAVASCRIPT.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                {/* <a href="https://github.com/" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a> */}
                <a href="https://blog.vinayaksingh.in/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Blog</h3>
              <p>
                Blog about Best Online Shopping Deals and Offers. Enjoy Savings , Add Bookmark our website. Never Miss any Loot Deals and Tricks.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                {/* <li>JavaScript</li> */}
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                {/* <a href="https://github.com/" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a> */}
                <a href="https://spotify.vinayaksingh.in/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Spotify</h3>
              <p>
              A modern Web-Based music player made using ReactJS. Clean UI with dark mode, High-quality online music streaming with no lag, Ad Free, Download music to your system, Global Music.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>React Redux</li>
                <li>Redux</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>



      </div>
    </Container>
  );
}