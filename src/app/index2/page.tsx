"use client";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const [showVelibVideo, setShowVelibVideo] = useState(false);
  const [showIAVideo, setShowIAVideo] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up'); // Initially scrolling up
  const [activeTab, setActiveTab] = useState("languages"); // Default tab
  const [theme, setTheme] = useState("light");
  const iaVideoRef = useRef<HTMLVideoElement>(null);
  const velibVideoRef = useRef<HTMLVideoElement>(null);

  const openVideoInFullscreen = async (video: HTMLVideoElement | null) => {
    if (!video) return;

    try {
      if (document.fullscreenElement !== video) {
        await video.requestFullscreen();
      }
      await video.play();
    } catch (error) {
      console.error("Unable to open video in fullscreen.", error);
    }
  };

  const handleOpenIAVideo = () => {
    setShowIAVideo(true);
    window.setTimeout(() => {
      openVideoInFullscreen(iaVideoRef.current);
    }, 80);
  };

  const handleOpenVelibVideo = () => {
    setShowVelibVideo(true);
    window.setTimeout(() => {
      openVideoInFullscreen(velibVideoRef.current);
    }, 80);
  };

  // Hook to detect scrolling and adjust direction
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // If scrolling down, hide the navbar
        setScrollDirection('down');
      } else {
        // If scrolling up, show the navbar
        setScrollDirection('up');
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreenElement = document.fullscreenElement;

      const iaVideo = iaVideoRef.current;
      if (showIAVideo && iaVideo && fullscreenElement !== iaVideo) {
        iaVideo.pause();
        iaVideo.currentTime = 0;
        setShowIAVideo(false);
      }

      const velibVideo = velibVideoRef.current;
      if (showVelibVideo && velibVideo && fullscreenElement !== velibVideo) {
        velibVideo.pause();
        velibVideo.currentTime = 0;
        setShowVelibVideo(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [showIAVideo, showVelibVideo]);

  return (
    <>
      <Head>
        <title>Portfolio - Kenza HALIL</title>
        <meta name="description" content="Portfolio of Kenza HALIL, a computer science student at IUT Ville-Tanneuse, looking for an apprenticeship." />
        <meta name="keywords" content="Kenza HALIL, computer science, apprenticeship, development, web, Python, PHP, Next.js" />
        <meta name="author" content="Kenza HALIL" />
      </Head>

      <div className={`theme-${theme}`}>

      <header className="hero">
        <nav className={`navbar ${scrollDirection === 'down' ? 'hide' : ''}`}>
          <a href="#top" className="logo">KH</a>
          <ul className="nav-links">
            <li><Link href="#presentation">About</Link></li>
            <li><Link href="#competences">Skills</Link></li>
            <li><Link href="#diplomes">Education</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#experiences">Experiences</Link></li>
            <li><Link href="#veille">Tech-Watch</Link></li>
            <li><Link href="#other">Other</Link></li>
            <li><Link href="#references">References</Link></li>
            <li><Link href="#cv">Resume</Link></li>
            <li><Link href="#contact">Contact</Link></li>
            <li>
              <button
                className="lang-button"
                onClick={() => window.location.href = '/'}
              >
                <img src="/icons/france.jpg" alt="Français" style={{ width: "24px", height: "16px", borderRadius: "2px" }} />
              </button>
            </li>
            <li>
              <button
                className="theme-button"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            </li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>Kenza HALIL</h1>
          <p><strong>Future Engineer at CY Tech – admitted for the next academic year</strong></p>
          <p><strong>Looking for a work-study apprenticeship in Computer Science starting September</strong></p>
          <p><strong>“Code your future with passion & determination!”</strong></p>
        </div>
      </header>


      <section id="presentation" className="presentation">
  <div className="content">
    <div className="presentation-container">
      <h2>About</h2>
      <div className="presentation-inner">
        <div className="photo">
          <img src="/images/photo-profil.png" alt="Profile photo" />
        </div>
        <div className="texte">
          <p>
            Hello, my name is Kenza HALIL. I am currently a third-year student in a Bachelor of Computer Science at IUT Villetaneuse – Sorbonne Paris North University, and I am completing a 12-month apprenticeship at CY Cergy Paris University. I am also admitted to CY Tech engineering school for the next academic year and I am looking for a work-study apprenticeship in Computer Science starting in September. Passionate about computer science and development, I am fully committed to projects aimed at strengthening my technical skills while developing a rigorous and professional approach to the digital world.
          </p>
          <p>
            During my studies, I have gained solid expertise in programming languages such as Python, PHP, and JavaScript, as well as web technologies like HTML, CSS, and jQuery. I have also worked on backend development projects involving the design and management of relational databases (SQL, PostgreSQL), as well as front-end interface development. Additionally, I participated in a mobile application development project integrating artificial intelligence models to analyze characteristics such as age, ethnicity, and gender from visual data.
          </p>
          <p>
            I am a curious, motivated person who is always seeking new challenges. My goal is to develop my programming skills and gain more experience to contribute to innovative projects. You can find more details about my background and skills in this portfolio.
          </p>
          <p>
            You can also check out the curriculum of my degree <a href="https://iutv.univ-paris13.fr/but-informatique/" target="_blank" rel="noopener noreferrer">here</a> to learn more about the subjects I have studied and the skills I have developed.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    <section id="competences" className="competences">
        <div className="content">
            <h2>Skills</h2>
            <div className="skills-grid">

            <div className="column">
                <h3>Artificial Intelligence</h3>
                <div className="skill-item">Neural Networks (Perceptron, MLP)<span className="percentage">80%</span></div>
                <div className="skill-item">CNN (Convolutional Neural Networks)<span className="percentage">75%</span></div>
                <div className="skill-item">Machine Learning<span className="percentage">80%</span></div>
                <div className="skill-item">Deep Learning<span className="percentage">70%</span></div>
                <div className="skill-item">Classification & Regression<span className="percentage">85%</span></div>
                <div className="skill-item">Image Processing<span className="percentage">70%</span></div>
                <div className="skill-item">Python (TensorFlow)<span className="percentage">75%</span></div>
            </div>

            <div className="column">
                <h3>Web & API</h3>
                <div className="skill-item">Canva<span className="percentage">90%</span></div>
                <div className="skill-item">Django/Flask<span className="percentage">80%</span></div>
                <div className="skill-item">JavaScript/jQuery<span className="percentage">75%</span></div>
                <div className="skill-item">HTML / CSS / JS<span className="percentage">60%</span></div>
                <div className="skill-item">PHP<span className="percentage">60%</span></div>
                <div className="skill-item">Next.js<span className="percentage">50%</span></div>
            </div>

            <div className="column">
                <h3>Databases & Analysis</h3>
                <div className="skill-item">PostgreSQL<span className="percentage">90%</span></div>
                <div className="skill-item">SQL<span className="percentage">90%</span></div>
                <div className="skill-item">MySQL<span className="percentage">80%</span></div>
                <div className="skill-item">Python(Pandas/Numpy)<span className="percentage">90%</span></div>
                <div className="skill-item">Anaconda/Jupyter Notebook/Dta virtualization tools<span className="percentage">75%</span></div>
            </div>

            <div className="column">
                <h3>Programming</h3>
                <div className="skill-item">Python<span className="percentage">90%</span></div>
                <div className="skill-item">Java<span className="percentage">80%</span></div>
                <div className="skill-item">C#<span className="percentage">60%</span></div>
                <div className="skill-item">Assembly<span className="percentage">50%</span></div>
            </div>

            <div className="column">
                <h3>Algorithms & Mathematics</h3>
                <div className="skill-item">Analysis<span className="percentage">90%</span></div>
                <div className="skill-item">Statistics<span className="percentage">80%</span></div>
                <div className="skill-item">Numerical Methods<span className="percentage">80%</span></div>
                <div className="skill-item">Automata<span className="percentage">80%</span></div>
                <div className="skill-item">Probability<span className="percentage">80%</span></div>
            </div>

            <div className="column">
                <h3>Infrastructure & Networks</h3>
                <div className="skill-item">LAMP Servers/Network Design TCP/IP<span className="percentage">70%</span></div>
                <div className="skill-item">Linux<span className="percentage">95%</span></div>
                <div className="skill-item">Windows<span className="percentage">95%</span></div>
                <div className="skill-item">Android<span className="percentage">70%</span></div>
                <div className="skill-item">Docker<span className="percentage">70%</span></div>
                <div className="skill-item">Shell scripting<span className="percentage">70%</span></div>
            </div>

            <div className="column">
                <h3>Development Tools & Project Management</h3>
                <div className="skill-item">Git/GitHub<span className="percentage">95%</span></div>
                <div className="skill-item">UML<span className="percentage">95%</span></div>
                <div className="skill-item">VS code/IntelliJ/Eclipse<span className="percentage">85%</span></div>
                <div className="skill-item">Virtualbox/Marionnet<span className="percentage">70%</span></div>
            </div>
            </div>
        </div>
        </section>



        <section className="diplomes" id="diplomes">
  <h2>Education</h2>
  <div className="timeline">
    <div className="timeline-item right">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <div className="formation-image">
          <img src="/images/cytech.jpg" alt="CY Tech Cergy" />
        </div>
        <h3>Computer Science Engineering Degree (Apprenticeship) – AI Specialization in 3rd year</h3>
        <span>Sept. 2026 - 2029</span>
        <p>CY Tech – Cergy</p>
      </div>
    </div>

    <div className="timeline-item left">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <div className="formation-image">
          <img src="/images/iut.jpg" alt="IUT of Villetaneuse" />
        </div>
        <h3>Third Year of Bachelor's in Computer Science (First and second Year Completed)</h3>
        <span>2023 - Present</span>
        <p>Sorbonne Paris North University – IUT of Villetaneuse</p>
        <div style={{ marginTop: "10px", display: "flex", gap: "10px", justifyContent: "center" }}>
          <a href="/pdf/DUT.pdf" target="_blank" rel="noopener noreferrer" className="btn" style={{ fontSize: "0.85rem" }}>View DUT</a>
          <a href="/pdf/DUT.pdf" download="DUT" className="btn" style={{ fontSize: "0.85rem" }}>Download DUT</a>
        </div>
      </div>
    </div>

    <div className="timeline-item right">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <div className="formation-image">
          <img src="/images/lycee.jpg" alt="Lycée Les Trois Frères SI-BACHIR" />
        </div>
        <h3>Scientific Baccalaureate</h3>
        <span>2023</span>
        <p>Graduated with honors (16.78) – Lycée Les Trois Frères SI-BACHIR - Algeria</p>
        <div style={{ marginTop: "10px", display: "flex", gap: "10px", justifyContent: "center" }}>
          <a href="/pdf/BAC_Kenza.pdf" target="_blank" rel="noopener noreferrer" className="btn" style={{ fontSize: "0.85rem" }}>View Baccalaureate diploma</a>
          <a href="/pdf/BAC_Kenza.pdf" download="BAC_Kenza" className="btn" style={{ fontSize: "0.85rem" }}>Download Baccalaureate diploma</a>
        </div>
      </div>
    </div>

    <div className="timeline-item left">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <div className="formation-image">
          <img src="/images/college.jpg" alt="Collège YOUCEF OUALI Mohand Larbi" />
        </div>
        <h3>Middle School Diploma</h3>
        <span>2020</span>
        <p>Graduated with honors (18.01) – Collège YOUCEF OUALI Mohand Larbi - Algeria</p>
      </div>
    </div>
  </div>
</section>

<section id="projects" className="projets">
  <div className="content">
    <h2>Projects</h2>
    <div className="project-grid">
      {/* Featured AI Project */}
      <div className="project-card featured">
        <div className="card-front">
          <img src="/images/IA.jpg" alt="AI mobile analysis application" />
          <h3>AI Mobile Analysis App</h3>
          <span className="pill">Academic Project · AI</span>
        </div>

        <div className="card-back">
          <p>
            Mobile application that analyzes an image to automatically estimate characteristics such as age, gender, and probable ethnicity of a person.
            The project relies on the use of convolutional neural networks (CNN), with the implementation of four distinct models: one dedicated to age prediction, one for gender, one for ethnicity, and a global model to centralize and harmonize predictions. Particular attention is paid to performance optimization and mobile user experience.
          </p>

          <button className="btn" onClick={handleOpenIAVideo}>
            Watch demo
          </button>
          {showIAVideo && (
            <div style={{ marginTop: "15px" }}>
              <video ref={iaVideoRef} width="100%" controls>
                <source src="/videos/ia-demo.mp4" type="video/mp4" />
                Your browser does not support this video.
              </video>
            </div>
          )}

          <a href="https://github.com/KenzaHalil/Projet_IA_Face" target="_blank" rel="noopener noreferrer" className="btn">GitHub Code</a>
          <a href="/pdf/rapport-ia.pdf" download className="btn">Download Report</a>
        </div>
      </div>


      {/* Project: TransportsChatbot */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/chatbot.jpg" alt="French public transport chatbot" />
          <h3>TransportsChatbot</h3>
        </div>
        <div className="card-back">
          <p>
            Web chatbot specializing in French public transport (SNCF and Île-de-France Mobilités). Users can log in, create conversations, and ask questions about fares, accessibility, facilities, and station attendance.
          </p>
          <p style={{ fontSize: "0.85rem", color: "#555", marginTop: "8px" }}>
            <strong>Frontend:</strong> React, Vite, react-markdown &nbsp;|&nbsp;
            <strong>Backend:</strong> Flask, SQLAlchemy, bcrypt &nbsp;|&nbsp;
            <strong>LLM:</strong> OpenRouter &nbsp;|&nbsp;
            <strong>RAG:</strong> ChromaDB + sentence-transformers &nbsp;|&nbsp;
            <strong>DB:</strong> SQLite &nbsp;|&nbsp;
            <strong>Data:</strong> SNCF &amp; IDFM open data
          </p>
        </div>
      </div>

      {/* Project: Vélib Application */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/velib.jpg" alt="Application Vélib" />
          <h3>Vélib'</h3>
        </div>
        <div className="card-back">
          <p>As part of a university project, I developed a Vélib' station management web and mobile application with my team. It allows users to locate available stations in real-time, check available bikes and slots, simulate reservations, and track usage history. The project uses open data, a REST API, and was designed with a modular software architecture. I applied UML modeling and the TDD (Test Driven Development) method to ensure code quality and reliability.</p>
          <a href="https://github.com/KenzaHalil/Velib" target="_blank" rel="noopener noreferrer" className="btn">Web app</a>
          <a href="https://github.com/KenzaHalil/Velib_mobile" target="_blank" rel="noopener noreferrer" className="btn">Mobile app</a>
          <button className="btn" onClick={handleOpenVelibVideo}>
            Watch video
          </button>
          {showVelibVideo && (
            <div style={{ marginTop: "15px" }}>
              <video ref={velibVideoRef} width="100%" controls>
                <source src="/videos/velib-demo.mp4" type="video/mp4" />
                Your browser does not support this video.
              </video>
            </div>
          )}
        </div>
      </div>
      

      {/* Project 2: Portfolio Version 1 */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/portfolio.jpg" alt="Portfolio" />
          <h3>Portfolio Version 1</h3>
        </div>
        <div className="card-back">
          <p>Development of my first personal portfolio to showcase my skills and projects.</p>
          <a href="https://porfoliokenza.my.canva.site/portfoliohalilkenza" target="_blank" rel="noopener noreferrer" className="btn">View Portfolio</a>
        </div>
      </div>

      {/* Project 3: Recruitment Management */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/recrutement.jpg" alt="Recruitment Management" />
          <h3>Recruitment Management Mini-Project</h3>
        </div>
        <div className="card-back">
          <p>Development of a recruitment management application using Python and Django with unit tests. UML modeling with Draw.io and documentation with Swagger.</p>
          <a href="https://github.com/KenzaHalil/Recrutement-api" target="_blank" rel="noopener noreferrer" className="btn">View on GitHub</a>
        </div>
      </div>

      {/* Project 4: My Calculator */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/calculatrice.jpg" alt="My Calculator" />
          <h3>My Calculator</h3>
        </div>
        <div className="card-back">
          <p>University project in Java to develop a calculator with advanced features in collaboration with a partner.</p>
          <a href="https://github.com/KenzaHalil/SAE_R201_Ma_Calculatrice_Partie1_Kenza_tassadit" target="_blank" rel="noopener noreferrer" className="btn">View on GitHub (Part 1)</a>
          <a href="https://github.com/KenzaHalil/SAE_R201_Ma_Calculatrice_Partie2_Kenza_tassadit" target="_blank" rel="noopener noreferrer" className="btn">View on GitHub (Part 2)</a>
        </div>
      </div>

      {/* Project 5: Database Creation and Manipulation */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/bdd.jpg" alt="Database Creation and Manipulation" />
          <h3>Database Creation and Manipulation</h3>
        </div>
        <div className="card-back">
          <p>University project to design and manipulate relational databases.</p>
          <a href="/pdf/rendu-final-bdd.pdf" download="Final_Database_Report" className="btn">Download Report</a>
        </div>
      </div>

      {/* Project 6: Santa Cruz */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/noel.jpg" alt="Santa Cruz" />
          <h3>Santa Cruz</h3>
        </div>
        <div className="card-back">
          <p>Python project to help Santa Claus optimize his route across all cities in France.</p>
        </div>
      </div>

      {/* Project 7: VivaTechnology */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/vivatech.jpg" alt="VivaTechnology" />
          <h3>Teamwork</h3>
        </div>
        <div className="card-back">
          <p>Our team participated in a technology event called VivaTech, where we explored the latest technological innovations. Inspired by this experience, we decided to create a website for the next VivaTech edition. This site highlights upcoming innovations, exhibitors, and conferences while offering networking tools for participants.</p>
          <a href="https://inesmarcisz.wixsite.com/vivatech2025" target="_blank" rel="noopener noreferrer" className="btn">View Website</a>
        </div>
      </div>
      {/* Project 8: Needs Gathering */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/recueil.jpg" alt="Requirements Gathering" />
          <h3>Requirements Gathering</h3>
        </div>
        <div className="card-back">
          <p>As part of my Requirements Gathering project, I conducted interviews with students who were my clients and created a website that met their expectations. I acquired the skill of understanding client needs and designing a website and its layout according to their descriptions and requests.</p>
          <a href="https://halilkenza2005.wixsite.com/la-maison-de-la-cult" target="_blank" rel="noopener noreferrer" className="btn">View Website</a>
          <a href="/zip/livrables.zip" download="Deliverables" className="btn">Download Deliverables</a>
        </div>
      </div>
      {/* Project 9: Project Management */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/gestion.jpg" alt="Project Management" />
          <h3>Project Management</h3>
        </div>
        <div className="card-back">
          <p>University project to design a room layout. This project helped me learn project management methodologies, drafting a project specification, and project execution.</p>
          <a href="/pdf/rendu-gestion-projet.pdf" download="Project_Management_Report" className="btn">Download Report</a>
        </div>
      </div>

      {/* Project 10: LAMP Server Setup */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/serveurs.jpg" alt="Setting Up LAMP Servers" />
          <h3>Setting Up LAMP Servers</h3>
        </div>
        <div className="card-back">
          <p>Configuration of LAMP servers and TCP/IP network design.</p>
        </div>
      </div>

      {/* Project 11: Housing Listings Bot */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/housing.jpg" alt="Housing listings bot for students" />
          <h3>Housing Listings Bot</h3>
        </div>
        <div className="card-back">
          <p>
            Python scraping bot that automatically finds housing listings — student rooms, studios, and apartments priced under €500 — in cities such as La Défense, Courbevoie, Nanterre, and surrounding areas. The bot aggregates and filters listings based on price and location criteria.
          </p>
          <a href="https://github.com/KenzaHalil/housing_bot_annonces" target="_blank" rel="noopener noreferrer" className="btn">View on GitHub</a>
        </div>
      </div>

  </div>
  </div>
</section>

<section id="experiences" className="experiences">
  <div className="content">
    <h2>Experiences</h2>
    <div className="experience-grid">

      {/* Experience 1: Apprenticeship at CY Cergy Paris University */}
      <div className="experience-card">
        <div className="card-front">
          <img src="/images/gargantua.jpg" alt="Process automation" />
          <h3>Apprenticeship at CY Cergy Paris University</h3>
        </div>
        <div className="card-back">
          <h3>Apprenticeship at CY Cergy Paris University</h3>
          <span>12 months</span>
          <span>Dev & automation with Gargantua</span>
          <p>Development and automation of business processes within the university, industrializing workflows with the Gargantua platform and ensuring their maintenance.</p>
          <a href="/pdf/rapport_alternance_1.pdf" download="Apprenticeship_Report_1" className="btn">Apprenticeship Report 1</a>
          <a href="/pdf/rapport_alternance_2.pdf" download="Apprenticeship_Report_2" className="btn">Apprenticeship Report 2</a>
        </div>
      </div>


      {/* Experience 2: Internship */}
      <div className="experience-card">
        <div className="card-front">
          <img src="/images/web-dev.jpg" alt="Web Development Internship" />
          <h3>Web Development Internship (back-end)</h3>
        </div>
        <div className="card-back">
          <h3>Internship as an Analyst Developer</h3>
          <span>January 27, 2025 - March 28, 2025</span>
          <span>at Reewayy SAS</span>
          <p>Developed a web application for recruitment management.</p>
          <a href="https://www.arimayi.fr/" target="_blank" rel="noopener noreferrer" className="btn-mauve">ARIMAYI</a>
          <a href="/pdf/rapport_stage.pdf" download="Internship_Report" className="btn">Download Report</a>
        </div>
      </div>

      {/* Experience 3: Interview "Les Elles de l'Info" */}
      <div className="experience-card">
        <div className="card-front">
          <img src="/images/iut.jpg" alt="Interview Les Elles de l'Info" />
          <h3>Interview “Les Elles de l’Info”</h3>
        </div>
        <div className="card-back">
          <h3>Interview at IUT Villetaneuse</h3>
          <span>Initiative “Les Elles de l’Info”</span>
          <p>
            I took part, with two classmates from my program, in an interview video about women’s place in tech careers,
            sharing our experiences and encouraging more young women to pursue digital and computer science fields.
          </p>
        </div>
      </div>

      {/* Experience 2: Tutoring */}
      <div className="experience-card">
        <div className="card-front">
          <img src="/images/tutorat.jpg" alt="Tutoring sessions" />
          <h3>Computer Science Tutoring Sessions</h3>
        </div>

        <div className="card-back">
          <h3>Tutor – Student Support</h3>
          <span>During the academic year</span>
          <span>BUT Computer Science (1st and 2nd year)</span>
          <p>
            Participation in tutoring sessions during lunch breaks, providing support
            to first- and second-year Computer Science students. Answering technical
            questions, helping with course concepts, assisting with projects, and
            offering methodological and academic advice.
          </p>
        </div>
      </div>


      {/* Experience 3: Private Tutoring */}
      <div className="experience-card">
        <div className="card-front">
          <img src="/images/teaching.jpg" alt="Private Tutoring" />
          <h3>Teaching</h3>
        </div>
        <div className="card-back">
          <h3>Private Tutoring</h3>
          <span>2022 - Present</span>
          <p>Providing private lessons in mathematics, English, French, and programming to middle and high school students.</p>
        </div>
      </div>

      
      {/* Experience 4: Cashier at ACTION */}
      <div className="experience-card">
        <div className="card-front">
          <img src="/images/cashier.jpg" alt="Cashier at ACTION" />
          <h3>Cashier at ACTION</h3>
        </div>
        <div className="card-back">
          <h3>Cashier at ACTION</h3>
          <span>April 2025 - Present</span>
          <span>4 Boulevard Galliéni, 92390 Villeneuve-la-Garenne</span>
          <p>Handled transactions, welcomed customers, and maintained store organization.</p>
        </div>
      </div>

      {/* Experience 4: Babysitting */}
      <div className="experience-card">
        <div className="card-front">
          <img src="/images/babysitting.jpg" alt="Babysitting" />
          <h3>Babysitting</h3>
        </div>
        <div className="card-back">
          <h3>Babysitting</h3>
          <span>2022 - Present</span>
          <p>Caring for children while organizing educational and recreational activities.</p>
        </div>
      </div>
    </div>
  </div>
</section>



<section id="veille" className="veille">
  <div className="content">
    <h2>Tech-watch</h2>
    <div className="veille-cards">
      <div className="veille-card">
        <img src="/images/stockage-adn-1.jpg" alt="Illustration du stockage ADN" className="veille-image" />
        <h3>DNA Storage</h3>
        <p>
        As the information and knowledge collected by industries, universities, and other centers increase, the need for larger storage spaces grows.
        </p>
        <p>
        However, the memory capacity of existing storage media is limited, leading to a quest for new data storage solutions. For example, a project at Harvard University successfully stored up to 700 TB in a single gram of DNA.
        </p>
      </div>

      <div className="veille-cards-row">
        <div className="veille-card">
          <img src="/images/stockage-adn-2.jpg" alt="Fonctionnement du stockage ADN" className="veille-image" />
          <h3>How Does DNA Storage Work?</h3>
          <p>
          DNA storage involves encoding binary data into DNA. Individual bits (binary digits) are converted from 1s and 0s into the letters A, C, G, and T. These letters represent the four main components of DNA: adenine, cytosine, guanine, and thymine.
          </p>
        </div>
        <div className="veille-card">
          <img src="/images/stockage-adn-3.jpg" alt="Intérêt pour le stockage ADN" className="veille-image" />
          <h3>Why Does This Technology Interest Me?</h3>
          <p>
          The combination of life sciences and computer science particularly caught my attention because I am passionate about both fields. Additionally, it is an innovative and promising technology worth exploring.
          </p>
          <p>
            To learn more, check out this article: 
            <a href="https://lejournal.cnrs.fr/articles/stockage-de-donnees-la-revolution-sur-adn" target="_blank" rel="noopener noreferrer">
            DNA Storage: The Future of Data Storage
            </a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* filepath: /home/kenza/mon-portfolio/src/pages/index.tsx */}
      <section id="other" className="other">
  <div className="content">
    <h2>Other</h2>
    <div className="tabs">
      <button
        className={`tab-button ${activeTab === "languages" ? "active" : ""}`}
        onClick={() => setActiveTab("languages")}
      >
        Languages
      </button>
      <button
        className={`tab-button ${activeTab === "soft-skills" ? "active" : ""}`}
        onClick={() => setActiveTab("soft-skills")}
      >
        Soft Skills
      </button>
      <button
        className={`tab-button ${activeTab === "passions" ? "active" : ""}`}
        onClick={() => setActiveTab("passions")}
      >
        Passions
      </button>
    </div>

    <div className={`tab-content ${activeTab === "languages" ? "active" : "hidden"}`} id="languages">
      <h3>Languages</h3>
      <div className="flags">
        <div className="flag">
          <img src="/icons/france.jpg" alt="French" />
          <p><strong>French</strong><br />Bilingual</p>
        </div>
        <div className="flag">
          <img src="/icons/uk.jpg" alt="English" />
          <p><strong>English</strong><br />B2 Level</p>
        </div>
        <div className="flag">
          <img src="/icons/kabyle.jpg" alt="Kabyle" />
          <p><strong>Kabyle</strong><br />Native Language</p>
        </div>
        <div className="flag">
          <img src="/icons/arabe.jpg" alt="Arabic" />
          <p><strong>Arabic</strong><br />Bilingual</p>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p><strong>CLES Certification</strong> – English B2 Level</p>
        <a href="/pdf/CLES.pdf" target="_blank" rel="noopener noreferrer" className="btn" style={{ fontSize: "0.9rem" }}>View certificate</a>
        <a href="/pdf/CLES.pdf" download="CLES" className="btn" style={{ fontSize: "0.9rem", marginLeft: "10px" }}>Download certificate</a>
      </div>
    </div>

    <div className={`tab-content ${activeTab === "soft-skills" ? "active" : "hidden"}`} id="soft-skills">
      <h3>Soft Skills</h3>
      <ul>
        <li>Creativity — I am capable of quickly finding solutions to problems.</li>
        <li>Ambition — I am ambitious, motivated by challenges and opportunities. My determination to succeed drives my actions and pushes me to constantly exceed my limits.</li>
        <li>Team Spirit — I can collaborate effectively, communicate clearly, and be flexible and adaptable in my approach to teamwork.</li>
        <li>Seriousness — I am serious and committed to my efforts, working diligently to achieve my goals. My reliability and responsibility are integral parts of my personality.</li>
        <li>Organization — I am known for my ability to be methodical and organized, which translates into effective task and project management, as well as attention to detail.</li>
        <li>Adaptability — I can quickly adjust to changes and adapt to new situations, allowing me to thrive in diverse environments.</li>
        <li>Curiosity — I am eager to learn and enjoy exploring new fields, which allows me to constantly expand my skills.</li>
        <li>Autonomy — I can work independently, take initiatives, and assume responsibility for my actions.</li>
      </ul>
    </div>

    <div className={`tab-content ${activeTab === "passions" ? "active" : "hidden"}`} id="passions">
      <h3>Passions</h3>
      <ul>
        <li>Software Development — A passion for creating technical solutions and useful interfaces.</li>
        <li>Medicine — A strong interest in the field of health and medical sciences.</li>
        <li>Horse Riding — Practicing and loving the bond with horses.</li>
        <li>Cinema (Science Fiction) — Fascination with futuristic worlds, visionary stories, and imagined technologies.</li>
        <li>Reading — Enjoying discovering new worlds through books and novels.</li>
        <li>Traveling — A desire to discover other cultures and explore the world.</li>
        <li>Music — A varied taste and inspiration in musical creativity.</li>
      </ul>
    </div>
  </div>
</section>


<section id="references" className="references">
  <div className="content">
    <h2>References</h2>
    <div className="references-grid">
      {/* Reference 1 */}
      <div className="reference-card">
        <img src="/images/person1.jpg" alt="Person 1" className="reference-photo" />
        <h3>Samir BEDOUHENE</h3>
        <p>Co-founder of Reewayy SAS</p>
        <div className="reference-buttons">
          <a href="mailto:samir.bedouhene@reewayy.io" className="icon-button" target="_blank" rel="noopener noreferrer">
            <img src="/icons/email.svg" alt="Email" />
          </a>
          <a href="https://www.linkedin.com/in/samir-bedouhene/" className="icon-button" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>

      {/* Reference 2 */}
      <div className="reference-card">
        <img src="/images/person2.jpg" alt="Person 2" className="reference-photo" />
        <h3>Pascale Hellégouarc'h</h3>
        <p>Head of the Computer Science Department at IUT Villetaneuse</p>
        <div className="reference-buttons">
          <a href="mailto:pascale.hellegouarc-h@univ-paris13.fr" className="icon-button" target="_blank" rel="noopener noreferrer">
            <img src="/icons/email.svg" alt="Email" />
          </a>
          <a href="https://www.linkedin.com/in/pascale-hell%C3%A9gouarc-h-b69903148/" className="icon-button" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>

      {/* Reference 3 */}
      <div className="reference-card">
        <img src="/images/person3.jpg" alt="Martial Dubois" className="reference-photo" />
        <h3>Martial Dubois</h3>
        <p>Gargantua Project Manager at CY Cergy Paris University</p>
        <div className="reference-buttons">
          <a href="mailto:martial.dubois@cyu.fr" className="icon-button" target="_blank" rel="noopener noreferrer">
            <img src="/icons/email.svg" alt="Email" />
          </a>
          <a href="https://www.linkedin.com/in/martialdubois/" className="icon-button" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="cv" className="cv">
  <div className="content">
    <h2>My Resume</h2>
    <p>As a future engineer admitted to CY Tech, I am looking for a work-study apprenticeship in Computer Science starting in September. My objective is to join a company where I can apply my technical skills, continue learning in real-world projects, and contribute with rigor and motivation.</p>
    <p>Download my resume</p>
    <div className="cv-links">
      <a href="/pdf/Kenza_HALIL_CV_FR.pdf" target="_blank" rel="noopener noreferrer" className="btn">View Resume (French)</a>
      <a href="/pdf/Kenza_HALIL_CV_FR.pdf" download="My_CV_French" className="btn">Download Resume (French)</a>
      <a href="/pdf/Kenza_HALIL_CV_EN.pdf" target="_blank" rel="noopener noreferrer" className="btn">View Resume (English)</a>
      <a href="/pdf/Kenza_HALIL_CV_EN.pdf" download="My_CV_English" className="btn" style={{ backgroundColor: "#007bff" }}>Download Resume (English)</a>
    </div>
  </div>
</section>

<section id="contact" className="contact">
  <div className="content">
    <h2>Contact</h2>
    <p>You can reach me through the links below:</p>
    <div className="contact-icons">
      <a href="mailto:halilkenza2005@gmail.com" className="icon-button" target="_blank" rel="noopener noreferrer">
        <img src="/icons/email.svg" alt="Email" />
      </a>
      <a href="https://www.linkedin.com/in/kenza-halil/" className="icon-button" target="_blank" rel="noopener noreferrer">
        <img src="/icons/linkedin.svg" alt="LinkedIn" />
      </a>
      <a href="https://github.com/KenzaHalil" className="icon-button" target="_blank" rel="noopener noreferrer">
        <img src="/icons/github.svg" alt="GitHub" />
      </a>
    </div>
  </div>
</section>


    <footer className="footer">
      <div className="content">
        <p>&copy; {new Date().getFullYear()} Kenza HALIL. All rights reserved.</p>
        <p>Phone: +33 (0)602566055</p>
        <p>This site is a Next.js project coded with TypeScript, JavaScript, HTML, and CSS.</p>
      </div>
    </footer>

    </div>



        <style jsx global>{`
  .navbar .nav-links li a {
    text-decoration: none; /* Supprime le soulignement */
    color: #111; /* Définit une couleur par défaut */
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.3s ease, transform 0.3s ease;
  }

  .navbar .nav-links li a:hover {
    color: #0070f3; /* Change la couleur au survol */
    transform: scale(1.05); /* Effet de zoom léger au survol */
  }

  .theme-dark .navbar .nav-links li a,
  .theme-dark .navbar .nav-links li a:visited {
    color: #f2f2f2 !important;
  }

  .theme-dark .navbar .nav-links li a:hover {
    color: #9dc4ff !important;
  }
`}</style>
      <style jsx>{`


        .lang-button {
  background-color: transparent;
  border: none;
  color: #111;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
}

.lang-button:hover {
  color: #0070f3; /* Change la couleur au survol */
  transform: scale(1.05); /* Effet de zoom léger au survol */
}

.theme-button {
  background-color: transparent;
  border: none;
  color: #111;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.theme-button:hover {
  transform: scale(1.08);
}
        .hero {
          height: 100vh;
          background-image: url('/images/background.jpg');
          background-size: cover;
          background-position: center;
          position: relative;
          color: white;
          font-family: 'Playfair Display', serif;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 20px 40px;
          background-color: rgba(255, 255, 255, 0.8);
          z-index: 1000;
          transition: transform 0.3s ease, opacity 0.3s ease; /* Transition fluide */
          opacity: 1;
          overflow: visible;
        }

        /* Quand la navbar doit être cachée (défilement vers le bas) */
        .navbar.hide {
          transform: translateY(-100%); /* Déplace la navbar au-dessus de la page */
          opacity: 0; /* Cache la navbar */
        }


        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #111;
          text-decoration: none;
          margin-right: 450px; /* Réduit l'espace entre le logo et les liens */

        }

        .nav-links {
            list-style: none;
            display: flex;
            align-items: center;
            margin: 0;
        }

        .nav-links li {
            margin-right: 10px; /* Espace entre les éléments */
        }



        .hero-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          background-color: rgba(255, 255, 255, 0.4);
          padding: 30px 50px;
          border-radius: 25px;
          box-shadow: 0 0 20px rgba(0,0,0,0.3);
        }

        .hero-content h1 {
          font-size: 4rem;
          font-weight: bold;
          color: #000;
          margin: 0;
        }

        .hero-content p {
          font-size: 1.8rem;
          color: #111;
          margin-top: 10px;
        }

        section {
          padding: 60px 20px;
          background-color: #f4f4f4;
        }

        .content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .competences, .diplomes, .projets, .references, .contact, .cv {
          margin-bottom: 60px;
        }

        h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .skills {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .skill h3 {
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .project {
          margin-bottom: 30px;
        }

        .contact p, .cv p {
          text-align: center;
          font-size: 1.2rem;
        }

        

        /* Section CV */
        #cv {
        padding: 40px;
        background-color: #f4f7fa;
        text-align: center;
        }

        #cv .content h2 {
        font-size: 2rem;
        color: #333;
        margin-bottom: 10px;
        }

        #cv .content p {
        font-size: 1.1rem;
        color: #555;
        margin-bottom: 20px;
        }

        /* Conteneur des liens */
        .cv-links {
        display: flex;
        justify-content: center;
        gap: 20px;
        }

        /* Style des boutons */
        .btn {
        display: inline-block;
        background-color: #4CAF50;
        color: white;
        padding: 12px 30px;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 25px;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        /* Effet au survol */
        .btn:hover {
        background-color: #45a049;
        transform: translateY(-3px);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }

        /* Style pour la version anglaise */
        .btn:nth-child(2) {
        background-color: #007bff;
        }

        /* Effet au survol pour la version anglaise */
        .btn:nth-child(2):hover {
        background-color: #0056b3;
        }


        @media screen and (max-width: 768px) {
          .skills {
            grid-template-columns: 1fr;
          }

          .hero-content h1 {
            font-size: 3rem;
          }

          .hero-content p {
            font-size: 1.5rem;
          }
        }

        

        .presentation {
            background-color: #fff;
            padding: 80px 20px;
            text-align: center; /* Centrer le contenu */
        }

        .presentation-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }

        .presentation-inner {
            display: flex;
            align-items: center; /* Centrer verticalement */
            gap: 40px;
            flex-wrap: wrap;
        }

        .photo img {
            width: 350px;
            height: 600px;
            border-radius: 50%; /* Rendre l'image ovale */
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

          .texte {
            font-size: 1.2rem;
            line-height: 1.6;
            background-color: #f7f7f7; /* Arrière-plan gris clair */
            padding: 20px;
            border-radius: 8px; /* Arrondir les coins */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            flex: 1; /* Occuper l'espace restant */
        }

        .content {
            max-width: 1200px;
            margin: 0 auto;
        }

        @media screen and (max-width: 768px) {
            .presentation-container {
            flex-direction: column;
            text-align: center;
            }

            .texte {
            font-size: 1rem;
            }

            .photo img {
            width: 150px;
            height: 150px; /* Ajuster la taille de l'image pour mobile */
            }
        }
    

        .skills-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            justify-content: center;
        }
        
        .column {
            background: #fff;
            padding: 20px;
            border-radius: 20px;
            flex: 1 1 220px;
            min-width: 220px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }
        
        .column h3 {
            margin-bottom: 15px;
            font-size: 1.5rem;
            text-align: center;
            color: #111;
        }
        
        .skill-item {
            position: relative;
            margin: 10px 0;
            font-size: 1.1rem;
            font-weight: 500;
            padding: 12px 16px;
            background-color: #f7f7f7;
            border-radius: 12px;
            transition: background-color 0.3s ease;
            cursor: default;
        }
        
        .skill-item:hover {
            background-color: #e0e0e0;
        }
        
        .percentage {
            position: absolute;
            top: 8px;
            right: 10px;
            background-color: #111;
            color: #fff;
            font-size: 0.85rem;
            padding: 3px 8px;
            border-radius: 10px;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .skill-item:hover .percentage {
            opacity: 1;
        }
        
        @media screen and (max-width: 768px) {
            .skills-grid {
            flex-direction: column;
            }
        
            .column {
            width: 100%;
            }
        }

          .skills-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            }

            .column {
            flex: 1 1 250px;
            }
        

        @media screen and (max-width: 768px) {
          .presentation-container {
            flex-direction: column;
            text-align: center;
          }

          html {
            scroll-behavior: smooth;
            }


          .texte {
            font-size: 1rem;
          }
        }


        .diplomes {
        padding: 4rem 2rem;
        }

    /* filepath: /home/kenza/mon-portfolio/src/pages/index.tsx */

  .diplomes {
    padding: 4rem 2rem;
    background-color: #f9f9f9; /* Couleur de fond douce */
  }

  .diplomes h2 {
    font-size: 2.5rem;
    color: #000; /* Titre en noir */
    text-align: center;
    margin-bottom: 3rem;
    font-weight: bold;
  }

  .timeline {
    position: relative;
    margin: 0 auto;
    max-width: 800px;
    padding: 0 1rem;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: #000; /* Barre centrale en noir */
  }

  .timeline-item {
    width: 100%;
    position: relative;
    margin-bottom: 3rem;
  }

  .timeline-dot {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background: #000; /* Point en noir */
    border-radius: 50%;
    border: 4px solid white;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.3); /* Effet lumineux */
    z-index: 1;
  }

  .timeline-image {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 110px;
    height: 110px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border: 3px solid white;
    background: #fff;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .timeline-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .timeline-image:hover {
    transform: translateY(-50%) scale(1.05);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  }

  .timeline-item.left .timeline-image {
    right: calc(50% + 90px);
  }

  .timeline-item.right .timeline-image {
    left: calc(50% + 90px);
  }

  .formation-image {
    width: 100%;
    height: 180px;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .formation-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .formation-image:hover img {
    transform: scale(1.05);
  }

  .timeline-line {
    position: absolute;
    top: 10px; /* Aligner avec le centre du point */
    width: 60px; /* Longueur du trait */
    height: 2px; /* Épaisseur du trait */
    background: #000; /* Couleur du trait */
  }

  .timeline-item.left .timeline-line {
    left: calc(50% - 60px); /* Positionner à gauche du point */
    transform: translateX(-100%);
  }

  .timeline-item.right .timeline-line {
    left: 50%; /* Positionner à droite du point */
  }

  .timeline-content {
    background: #fff;
    padding: 1.5rem 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    width: 45%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .timeline-item.left .timeline-content {
    left: calc(50% - 60px); /* Alignement avec le point */
    transform: translateX(-100%);
    text-align: right;
  }

  .timeline-item.right .timeline-content {
    left: calc(50% + 60px); /* Alignement avec le point */
    text-align: left;
  }

  .timeline-content:hover {
        transform: translateY(-5px); /* Légère élévation au survol */
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15); /* Ombre plus marquée */
    }
  
    /* Effet au survol */
  .timeline-item.left .timeline-content:hover {
    transform: translateX(-100%) translateY(-5px); /* Combine les transformations */
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15); /* Ombre plus marquée */
  }

  .timeline-item.right .timeline-content:hover {
    transform: translateY(-5px); /* Légère élévation au survol */
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15); /* Ombre plus marquée */
  }

  .timeline-item.left .timeline-content {
    text-align: center; /* Centrer le texte */
  }

  .timeline-item.right .timeline-content {
    text-align: center; /* Centrer le texte */
  }

  .timeline-content h3 {
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
    color: #000; /* Titre en noir */
    font-weight: bold;
  }

  .timeline-content span {
    font-size: 1rem;
    color: #555;
    font-style: italic;
  }

  .timeline-content p {
    margin-top: 0.8rem;
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .timeline::before {
      left: 20px;
      transform: none;
    }

    .timeline-dot {
      left: 20px;
      transform: none;
    }

    .timeline-item.left .timeline-line,
    .timeline-item.right .timeline-line {
      display: none; /* Cacher les traits sur mobile */
    }
    }

        .contact {
      padding: 60px 20px;
      background-color: #f9f9f9;
      text-align: center;
    }

    .contact h2 {
      font-size: 2.5rem;
      margin-bottom: 20px;
      color: #333;
    }

    .contact p {
      font-size: 1.2rem;
      color: #555;
      margin-bottom: 30px;
    }

    .contact-icons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.icon-button {
  width: 64px;
  height: 64px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #f5f5f5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.icon-button img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.icon-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.expériences {
  margin-bottom: 60px; /* Ajoute un espacement en bas de la section Expériences */
}

.references {
  margin-top: 60px; /* Ajoute un espacement en haut de la section Références */
}

.expériences {
  padding: 60px 20px;
  background-color: #f4f4f4;
}

.expériences h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #333;
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
}

.experience-card {
  perspective: 1000px; /* Nécessaire pour l'effet 3D */
  width: 100%;
  max-width: 350px;
  height: 400px;
  margin-bottom: 40px;
}

.card-front,
.card-back {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  backface-visibility: hidden;
  transition: transform 0.6s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
}

.card-front {
  transform: rotateY(0deg);
}

.card-back {
  transform: rotateY(180deg);
  background: #f0f0f0; /* Gris clair */
  color: #333;
}

.experience-card:hover .card-front {
  transform: rotateY(-180deg);
}

.experience-card:hover .card-back {
  transform: rotateY(0deg);
}

.card-front img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
}

.card-front h3,
.card-back h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
   color: #333;
}

.card-back span {
  font-size: 1rem;
  font-style: italic;
  margin-bottom: 10px;
  display: block;
}

.card-back p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.card-back .btn {
  display: inline-block;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 25px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-back .btn:hover {
  background-color: #555;
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .experience-card {
    height: 350px;
  }
}

.btn-mauve {
  background-color: #d8b4e2; /* Mauve clair */
  color: #fff; /* Texte en blanc */
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 25px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-mauve:hover {
  background-color: #c490d1; /* Mauve légèrement plus foncé au survol */
  transform: translateY(-3px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.experience-card:last-child {
  grid-column: auto; /* Garde l'alignement standard dans la grille */
  justify-self: center;
}

.experience-card:first-child {
  margin-top: 0;
}

.experience-card:nth-child(3) {
  margin-top: 0;
}

.experience-card:nth-child(4),
.experience-card:nth-child(5) {
  margin-top: 0; /* Aligne Caissière et Baby-sitting sur la même ligne */
}


.hidden {
  display: none;
}

.active {
  display: block;
}

.flags {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
}

.flag {
  text-align: center;
  font-size: 1rem;
  color: #333;
}

.flag img {
  width: 120px;
  height: 80px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

.flag p {
  font-size: 1,8rem;
  font-weight: 500;
  line-height: 1.4;
}

.flag p strong {
  font-size: 2rem;
  font-weight: bold;
  display: block;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.tab-button {
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  border: 2px solid #ddd;
  border-radius: 30px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-button.active {
  background-color: #f9f9f9;
  color: #333;
  border-color: #ccc;
}

.tab-button:hover {
  background-color: #f9f9f9;
  color: #333;
}

.tab-content {
  display: none;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.tab-content.active {
  display: block;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 10px;
  font-size: 1rem;
  line-height: 1.6;
}

ul li strong {
  font-style: italic;
}

.tab-content ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.tab-content ul li {
  font-size: 1.2rem;
  font-weight: 500;
  color: #555;
  background-color: #f9f9f9;
  padding: 15px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}
.tab-content ul li:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  background-color: #f0f0f0;
}

.references {
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: center;
}

.references h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #333;
}

.references-grid {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.reference-card {
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center;
  width: 400px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
  .reference-card {
  min-height: 300px; /* Hauteur minimale pour toutes les cartes */
}

.reference-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.reference-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.reference-card h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #333;
}

.reference-card p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 25px;
}

.reference-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.icon-button {
  width: 80px;
  height: 80px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #f5f5f5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.icon-button img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.icon-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.veille {
  padding: 60px 20px;
  background: linear-gradient(135deg, #f9f9f9, #e3e3e3);
  text-align: center;
}

.veille h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #333;
}

.veille-cards {
  display: flex;
  flex-direction: column; /* Aligne les cartes en colonne */
  gap: 20px; /* Espace entre les cartes */
}

.veille-card:first-child {
  width: 100%; /* La première carte prend toute la largeur */
  max-width: 100%; /* Empêche une limite de largeur */
}

.veille-cards-row {
  display: flex; /* Aligne les cartes 2 et 3 côte à côte */
  gap: 20px; /* Espace entre les deux cartes */
  justify-content: space-between; /* Ajoute de l'espace entre les cartes */
}

.veille-cards-row .veille-card {
  flex: 1; /* Les cartes prennent une largeur égale */
  max-width: calc(50% - 10px); /* Chaque carte prend 50% de la largeur moins l'espace */
}

@media (max-width: 768px) {
  .veille-cards-row {
    flex-direction: column; /* Les cartes s'empilent sur mobile */
  }

  .veille-cards-row .veille-card {
    max-width: 100%; /* Les cartes prennent toute la largeur sur mobile */
  }
}

.veille-card:not(:first-child) {
  display: inline-block;
  width: calc(50% - 10px); /* Les deux autres cartes prennent chacune 50% de la largeur */
  margin: 0 auto; /* Centre les cartes */
}

.veille-cards > .veille-card:nth-child(2),
.veille-cards > .veille-card:nth-child(3) {
  width: calc(50% - 10px); /* Les deux cartes prennent chacune 50% de la largeur */
  margin: 0; /* Supprime les marges inutiles */
}

.veille-cards > .veille-card:nth-child(2),
.veille-cards > .veille-card:nth-child(3) {
  display: inline-block;
}

.veille-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.veille-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.veille-card h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #000; /* Titre en noir */
}

.veille-card p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
}

.veille-card a {
  color: #0070f3;
  text-decoration: none;
  font-weight: bold;
}

.veille-card a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .veille-cards {
    flex-direction: column;
    align-items: center;
  }

  .veille-card {
    width: 100%;
  }
}
  .veille-card img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.veille-card:hover img {
  transform: scale(1.05); /* Zoom léger au survol */
}

.veille-cards {
  display: flex;
  flex-direction: column; /* Aligne les cartes en colonne */
  gap: 20px; /* Espace entre les cartes */
}

.veille-cards-row {
  display: flex; /* Aligne les cartes 2 et 3 côte à côte */
  gap: 20px; /* Espace entre les deux cartes */
  justify-content: space-between; /* Ajoute de l'espace entre les cartes */
}

.veille-cards-row .veille-card {
  flex: 1; /* Les cartes prennent une largeur égale */
  max-width: calc(50% - 10px); /* Chaque carte prend 50% de la largeur moins l'espace */
}

@media (max-width: 768px) {
  .veille-cards-row {
    flex-direction: column; /* Les cartes s'empilent sur mobile */
  }

  .veille-cards-row .veille-card {
    max-width: 100%; /* Les cartes prennent toute la largeur sur mobile */
  }
}

.veille-card:first-child .veille-image {
  width: 80%; /* Réduit la largeur de l'image à 80% de la carte */
  height: auto; /* Maintient les proportions de l'image */
  margin: 0 auto; /* Centre l'image horizontalement */
  display: block; /* Assure que l'image est un bloc centré */
}


.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
}

.project-card {
  perspective: 1000px; /* Nécessaire pour l'effet 3D */
  width: 100%;
  max-width: 350px;
  height: 400px;
  margin-bottom: 40px;
}

.project-card.featured {
  max-width: 350px;
  height: 400px;
  position: relative;
}

.card-front,
.card-back {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  backface-visibility: hidden;
  transition: transform 0.6s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
}

.card-front {
  transform: rotateY(0deg);
}

.card-back {
  transform: rotateY(180deg);
  background: #f0f0f0; /* Gris clair */
  color: #333;
}

.project-card:hover .card-front {
  transform: rotateY(-180deg);
}

.project-card:hover .card-back {
  transform: rotateY(0deg);
}

.card-front h3,
.card-back h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

.card-back p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.card-back .btn {
  display: inline-block;
  background-color: #0070f3;
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 25px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-back .btn:hover {
  background-color: #0056b3;
  transform: translateY(-3px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.pill {
  display: inline-block;
  margin-top: 8px;
  padding: 6px 12px;
  border-radius: 999px;
  background: linear-gradient(135deg, #0070f3, #4da1ff);
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.4px;
  box-shadow: 0 6px 14px rgba(0, 112, 243, 0.35);
}

.card-back .tech-list {
  margin-top: -10px;
  margin-bottom: 14px;
  font-weight: 600;
  color: #1a1a1a;
}

.footer {
  background-color: #0070f3; /* Bleu */
  color: white; /* Texte en blanc pour le contraste */
  padding: 20px;
  text-align: center;
}

.footer p {
  margin: 5px 0; /* Espacement entre les paragraphes */
}

.project-card .card-front img {
  width: 100px; /* Largeur de l'image */
  height: 100px; /* Hauteur de l'image */
  object-fit: cover; /* Ajuste l'image pour qu'elle remplisse le conteneur */
  border-radius: 50%; /* Rend l'image circulaire */
  margin-bottom: 20px; /* Espace sous l'image */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Ajoute une ombre */
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Trois colonnes */
  gap: 30px; /* Espacement entre les colonnes */
  justify-items: center; /* Centre les colonnes */
}

.column {
  background: #fff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.column h3 {
  margin-bottom: 15px;
  font-size: 1.5rem;
  color: #111;
}

.skill-item {
  margin: 10px 0;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 12px 16px;
  background-color: #f7f7f7;
  border-radius: 12px;
  transition: background-color 0.3s ease;
}

.skill-item:hover {
  background-color: #e0e0e0;
}

.reference-card {
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center; /* Centre tout le contenu */
  width: 400px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column; /* Aligne les éléments verticalement */
  align-items: center; /* Centre les éléments horizontalement */
}

.reference-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%; /* Rend l'image circulaire */
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}
  .skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Trois colonnes */
  gap: 30px; /* Espacement entre les colonnes */
  justify-items: center; /* Centre les colonnes */
}

.column {
  background: #fff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
  width: 100%; /* Assure que toutes les colonnes occupent la même largeur */
  max-width: 400px; /* Largeur maximale pour uniformiser les cartes */
  min-width: 250px; /* Largeur minimale pour éviter que les cartes soient trop petites */
  box-sizing: border-box; /* Inclut les bordures et le padding dans la largeur */
}

.column h3 {
  margin-bottom: 15px;
  font-size: 1.5rem;
  color: #111;
}

.skill-item {
  margin: 10px 0;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 12px 16px;
  background-color: #f7f7f7;
  border-radius: 12px;
  transition: background-color 0.3s ease;
}

.skill-item:hover {
  background-color: #e0e0e0;
}

/* Style général pour les gros titres (h2) */
h2 {
  font-family: 'Playfair Display', serif; /* Police élégante pour les gros titres */
  font-weight: bold; /* Texte en gras */
  color: #111; /* Couleur noire */
  text-align: center; /* Centrer les titres */
  margin-bottom: 20px; /* Espacement en bas */
  text-transform: uppercase; /* Mettre les titres en majuscules */
  letter-spacing: 1.5px; /* Espacement entre les lettres */
  position: relative; /* Nécessaire pour les effets */
  z-index: 1;
  font-size: 2.8rem; /* Taille plus grande pour les gros titres */
}

/* Effet de soulignement avec ombre */
h2::after {
  content: '';
  display: block;
  width: 80px; /* Largeur de la ligne */
  height: 4px; /* Épaisseur de la ligne */
  background: #111; /* Couleur noire */
  margin: 10px auto 0; /* Centrer la ligne */
  border-radius: 2px; /* Arrondir les coins */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Effet d'ombre */
  transition: width 0.3s ease; /* Animation au survol */
}

h2:hover::after {
  width: 120px; /* Augmente la largeur au survol */
}

/* Effet au survol pour les gros titres */
h2:hover {
  transform: scale(1.05); /* Zoom léger au survol */
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); /* Ombre légère */
}

/* Style général pour les sous-titres (h3) */
h3 {
  font-family: 'Roboto', sans-serif; /* Police différente pour les sous-titres */
  font-weight: bold; /* Texte en gras */
  color: #333; /* Couleur sombre */
  text-align: center; /* Alignement au centre */
  margin-top: 10px; /* Espacement en haut */
  font-size: 2rem; /* Taille légèrement plus petite */
  transition: transform 0.3s ease, text-shadow 0.3s ease; /* Animation au survol */
}

/* Effet au survol pour les sous-titres */
h3:hover {
  transform: translateY(-5px); /* Légère élévation au survol */
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2); /* Ombre légère */
}

/* Effet décoratif sous les sous-titres */
h3::after {
  content: '';
  display: block;
  width: 50px; /* Largeur de la ligne */
  height: 2px; /* Épaisseur de la ligne */
  background: #333; /* Couleur sombre */
  margin: 5px auto 0; /* Centrer la ligne */
  border-radius: 1px; /* Arrondir les coins */
  transition: width 0.3s ease; /* Animation au survol */
}

h3:hover::after {
  width: 70px; /* Augmente la largeur au survol */
}

/* Dark mode */
.theme-dark {
  background-color: #202a38;
  color: #f3f6fb;
}

.theme-dark section,
.theme-dark .presentation,
.theme-dark .diplomes,
.theme-dark .projets,
.theme-dark .references,
.theme-dark .contact,
.theme-dark .cv,
.theme-dark .experiences,
.theme-dark .veille,
.theme-dark #cv {
  background: #2a3648 !important;
}

.theme-dark .navbar {
  background-color: rgba(40, 52, 70, 0.9);
}

.theme-dark .logo,
.theme-dark .navbar .nav-links li a,
.theme-dark .lang-button,
.theme-dark .theme-button {
  color: #f2f2f2 !important;
}

.theme-dark .navbar .nav-links li a:hover {
  color: #9dc4ff !important;
}

.theme-dark .hero-content {
  background-color: rgba(24, 32, 44, 0.85);
}

.theme-dark .hero-content h1,
.theme-dark .hero-content p {
  color: #f3f6fb;
}

.theme-dark .texte,
.theme-dark .column,
.theme-dark .timeline-content,
.theme-dark .tab-content,
.theme-dark .tab-content ul li,
.theme-dark .reference-card,
.theme-dark .veille-card,
.theme-dark .card-front,
.theme-dark .card-back,
.theme-dark .skill-item,
.theme-dark .icon-button,
.theme-dark .tab-button {
  background-color: #3a4a61 !important;
  color: #f3f6fb !important;
}

.theme-dark .tab-button {
  border-color: #607089;
}

.theme-dark .timeline::before,
.theme-dark .timeline-dot,
.theme-dark h2::after,
.theme-dark h3::after {
  background: #6ea8ff;
}

.theme-dark .footer {
  background-color: #2a3648;
}

.theme-dark .footer p,
.theme-dark .tab-content ul li,
.theme-dark .veille-card p,
.theme-dark .reference-card p,
.theme-dark .contact p,
.theme-dark .card-back p,
.theme-dark .card-back span,
.theme-dark .timeline-content p,
.theme-dark .timeline-content span,
.theme-dark h2,
.theme-dark h3,
.theme-dark .flag {
  color: #f3f6fb !important;
}


 `}</style>
 </>
  );
}
