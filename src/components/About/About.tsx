import { Container } from "./styles";
import arduinoIcon from "../../assets/arduino-1.svg";
import codesysIcon from "../../assets/Codesys_Logo (2)-converted-from-png.svg";
import cSharpIcon from "../../assets/c-sharp.svg";
import mssqlIcon from "../../assets/MSSQL_icon.svg";
import telegrafIcon from "../../assets/Telegraf_logo.svg";
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import mysqlIcon from "../../assets/mysql-icon.svg";
import influxdbIcon from "../../assets/influxdb.svg";
import mitsubishiIcon from "../../assets/Mitsubishi_Electric_logo.svg.svg";
import nodeRedIcon from "../../assets/node-red-icon-2.svg";
import omronIcon from "../../assets/OMRON_Logo.svg.svg";
import postgresqlIcon from "../../assets/Postgresql.svg";
import certificateLemmiDetail from "../../assets/certificates/page1-image1.jpg";
import certificateLemmiFront from "../../assets/certificates/page1-image3.jpg";
import certificateHydraulicFront from "../../assets/certificates/page1-image2.jpg";
import certificateCloudDetail from "../../assets/certificates/page2-image1.jpg";
import certificateCloudFront from "../../assets/certificates/page2-image2.jpg";
import certificateDataScientistFront from "../../assets/certificates/page2-image3.jpg";
import certificateDataScientistDetail from "../../assets/certificates/page2-image4.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  const careerTimeline = [
    {
      period: "March 2020 - December 2022",
      role: "Process Engineering Sub Section Head",
      company: "PT Panata Jaya Mandiri",
      location: "Tangerang, Indonesia",
      highlights: [
        "Implemented Lean Manufacturing tools such as Kaizen and 5 Why analysis.",
        "Ensured projects were delivered on schedule and aligned with target objectives.",
        "Reduced material waste by 8% through process optimization and root cause analysis.",
      ],
    },
    {
      period: "January 2022 - February 2023",
      role: "Sales and Marketing Local Customer Assistant Section Head",
      company: "PT Panata Jaya Mandiri",
      location: "Tangerang, Indonesia",
      highlights: [
        "Coordinated production and logistics teams to maintain 100% on-time delivery performance.",
        "Aligned customer needs with internal technical and commercial requirements.",
        "Handled new product development requests from local customers.",
      ],
    },
    {
      period: "January 2023 - Present",
      role: "Project Automation and Improvement Assistant Section Head",
      company: "PT Panata Jaya Mandiri",
      location: "Tangerang, Indonesia",
      highlights: [
        "Increased production line OEE by 12% through real-time machine monitoring systems.",
        "Developed machine-to-database integration using PLC, SQL, and Node-RED.",
        "Lead IIoT and Industry 4.0 initiatives for production tracking and downtime analysis.",
      ],
    },
  ];

  const certifications = [
    {
      title: "Lean MONOZUKURI 4.0",
      issuer: "Kemenperin and AOTS Certificate",
      organization: "PIDI 4.0 Kemenperin",
      period: "September 2023 - September 2028",
      proofImages: [
        { src: certificateLemmiFront, alt: "Lean MONOZUKURI 4.0 certificate" },
      ],
    },
    {
      title: "Training Pneumatic and Hydraulic Batch 2",
      issuer: "BNSP Certificate",
      organization: "PIDI 4.0 Kemenperin",
      period: "June 2023 - June 2028",
      proofImages: [
        { src: certificateHydraulicFront, alt: "Hydraulic and Pneumatic certificate" },
        { src: certificateLemmiDetail, alt: "Hydraulic and Pneumatic certificate detail page" },
      ],
    },
    {
      title: "Training Cloud Engineer",
      issuer: "BNSP Certificate",
      organization: "PIDI 4.0 Kemenperin",
      period: "April 2024 - April 2029",
      proofImages: [
        { src: certificateCloudFront, alt: "Cloud Engineer certificate" },
        { src: certificateCloudDetail, alt: "Cloud Engineer certificate detail page" },
      ],
    },
    {
      title: "Data Scientist",
      issuer: "BNSP Certificate",
      organization: "PIDI 4.0 Kemenperin",
      period: "October 2025 - October 2030",
      proofImages: [
        { src: certificateDataScientistFront, alt: "Data Scientist certificate" },
        { src: certificateDataScientistDetail, alt: "Data Scientist certificate detail page" },
      ],
    },
  ];

  const skillGroups = [
    {
      title: "Programming Languages",
      items: [
        { name: "Python", icon: python, alt: "Python" },
        { name: "Java", icon: java, alt: "Java" },
        { name: "Arduino", icon: arduinoIcon, alt: "Arduino" },
        { name: "C#", icon: cSharpIcon, alt: "C Sharp" },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "PostgreSQL", icon: postgresqlIcon, alt: "PostgreSQL" },
        { name: "MSSQL", icon: mssqlIcon, alt: "Microsoft SQL Server" },
        { name: "MySQL", icon: mysqlIcon, alt: "MySQL" },
        { name: "InfluxDB", icon: influxdbIcon, alt: "InfluxDB" },
      ],
    },
    {
      title: "PLC & Industrial Platforms",
      items: [
        { name: "CODESYS", icon: codesysIcon, alt: "CODESYS" },
        { name: "Mitsubishi", icon: mitsubishiIcon, alt: "Mitsubishi Electric" },
        { name: "Omron", icon: omronIcon, alt: "Omron" },
        { name: "Node-RED", icon: nodeRedIcon, alt: "Node-RED" },
        { name: "Telegraf", icon: telegrafIcon, alt: "Telegraf" },
      ],
    },
  ];

  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            I’m Raihan, an Industrial Automation and IIoT Engineer with a strong focus on OEE digitalization, smart factory implementation, and machine-to-database integration.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            With over 5 years of experience in manufacturing, I have been actively involved in developing and implementing real-time monitoring systems, downtime analysis tools, and data-driven solutions to improve production efficiency and visibility.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Beyond development, I contribute to designing system architectures that are scalable, reliable, and aligned with operational needs. I also support the transition from manual processes to digital systems by understanding shopfloor challenges and translating them into practical, implementable solutions.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <p>
            My role combines hands-on technical execution with a structured approach to problem-solving—helping teams adopt digitalization in a way that is both effective and sustainable.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000}>
          <p>
            My core stack includes PLC programming with Mitsubishi, Omron, and CODESYS, along with Node-RED, Telegraf, Python, Java, Arduino, C#, and database technologies such as PostgreSQL, MSSQL, MySQL, and InfluxDB to build integrated and data-driven industrial systems.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={600}>
          <div className="education">
            <h3>Education:</h3>
            <h4>Mechatronic Engineering</h4>
            <p>Politeknik Negeri Sriwijaya | September 2014 - September 2018</p>
            <p>GPA 3.35</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={750}>
          <div className="experience">
            <h3>Career Roadmap:</h3>
            <div className="timeline">
              {careerTimeline.map((item) => (
                <div className="timeline-item" key={`${item.role}-${item.period}`}>
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <span className="timeline-period">{item.period}</span>
                    <h4>{item.role}</h4>
                    <p className="timeline-company">{item.company}</p>
                    <p className="timeline-location">{item.location}</p>
                    <ul>
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={900}>
          <div className="certifications">
            <h3>Certifications:</h3>
            <div className="certificate-grid">
              {certifications.map((certificate) => (
                <div className="certificate-card" key={certificate.title}>
                  <span className="certificate-period">{certificate.period}</span>
                  <h4>{certificate.title}</h4>
                  <p>{certificate.issuer}</p>
                  <p>{certificate.organization}</p>
                  <div className="certificate-proof">
                    {certificate.proofImages.map((image) => (
                      <figure key={image.alt} className="certificate-figure">
                        <img src={image.src} alt={image.alt} />
                        <figcaption>Certificate proof attached</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {skillGroups.map((group, groupIndex) => (
            <div className="skill-group" key={group.title}>
              <ScrollAnimation animateIn="fadeInUp" delay={(0.1 + groupIndex * 0.08) * 1000}>
                <h4>{group.title}</h4>
              </ScrollAnimation>
              <div className="skill-list">
                {group.items.map((skill, skillIndex) => (
                  <div className="hability" key={skill.name}>
                    <ScrollAnimation
                      animateIn="fadeInUp"
                      delay={(0.14 + groupIndex * 0.08 + skillIndex * 0.03) * 1000}
                    >
                      <div className="skill-card">
                        {skill.icon ? <img src={skill.icon} alt={skill.alt ?? skill.name} /> : <span className="skill-badge">{skill.name}</span>}
                        {skill.icon ? <span>{skill.name}</span> : null}
                      </div>
                    </ScrollAnimation>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
