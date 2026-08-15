
"use client";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {

  const [showVelibVideo, setShowVelibVideo] = useState(false);
  const [showIAVideo, setShowIAVideo] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up'); // Initialement vers le haut
  const [activeTab, setActiveTab] = useState("langues"); // Onglet par défaut
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
      console.error("Impossible d'ouvrir la vidéo en plein écran.", error);
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

  // Hook pour détecter le défilement et ajuster la direction
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // Si on défile vers le bas, cacher la navbar
        setScrollDirection('down');
      } else {
        // Si on défile vers le haut, afficher la navbar
        setScrollDirection('up');
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Évite les valeurs négatives
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
        <meta name="description" content="Portfolio de Kenza HALIL, étudiante en informatique à l'IUT de Ville-Tanneuse, à la recherche d'une alternance." />
        <meta name="keywords" content="Kenza HALIL, informatique, alternance, développement, web, Python, PHP, Next.js" />
        <meta name="author" content="Kenza HALIL" />
      </Head>

      <div className={`theme-${theme}`}>

      <header className="hero">
        <nav className={`navbar ${scrollDirection === 'down' ? 'hide' : ''}`}>
          <a href="#top" className="logo">KH</a>
          <ul className="nav-links">
            <li><Link href="#presentation">À propos</Link></li>
            <li><Link href="#competences">Compétences</Link></li>
            <li><Link href="#diplomes">Formations</Link></li>
            <li><Link href="#projets">Projets</Link></li>
            <li><Link href="#Expériences">Expériences</Link></li>
            <li><Link href="#veille">Veille</Link></li>
            <li><Link href="#autre">Autre</Link></li>
            <li><Link href="#references">Références</Link></li>
            <li><Link href="#cv">CV</Link></li>
            <li><Link href="#contact">contact</Link></li>
            <li>
  <button
    className="lang-button"
    onClick={() => window.location.href = '/index2'}
  >
    <img src="/icons/uk.jpg" alt="English" style={{ width: "24px", height: "16px", borderRadius: "2px" }} />
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
          <p><strong>Future ingénieure à CY Tech (admise pour la prochaine rentrée)</strong></p>
          <p><strong>En cours de recrutement pour rejoindre BNP Paribas en alternance pour mon cycle ingénieur de 3 ans à CY Tech</strong></p>
          <p className={'hero-quote'}>&#8220;Code ton futur avec passion &#38; d&#233;termination!&#8221;</p>
        </div>
      </header>


      <section id="presentation" className="presentation">
        <div className="content">
            <div className="presentation-container">
            <h2>À propos</h2>
            <div className="presentation-inner">
                <div className="photo">
                <img src="/images/photo-profil.png" alt="Photo de profil" />
                </div>
                <div className="texte">
                <p>
                  Bonjour, je m’appelle Kenza HALIL. Étudiante en troisième année de BUT Informatique à l’IUT de Villetaneuse – Université Sorbonne Paris Nord, je réalise actuellement une alternance de 12 mois à CY Cergy Paris Université. Je suis également admise à l’école d’ingénieurs CY Tech pour la prochaine rentrée et je suis actuellement en cours de recrutement pour rejoindre BNP Paribas en alternance pour mon cycle ingénieur de 3 ans à CY Tech. Passionnée par l’informatique et le développement, je m’investis pleinement dans des projets visant à renforcer mes compétences techniques, tout en développant une approche rigoureuse et professionnelle du monde du numérique.
                </p>
                <p>
                    Au cours de mes études, j'ai acquis une solide maîtrise des langages de programmation tels que Python, PHP, JavaScript, ainsi que des technologies web comme HTML, CSS, et jQuery. J’ai également travaillé sur des projets de développement backend, impliquant la conception et la gestion de bases de données relationnelles (SQL, PostgreSQL), ainsi que sur le développement d’interfaces front-end. Par ailleurs, j’ai participé à un projet de développement d’application mobile intégrant des modèles d’intelligence artificielle, visant à analyser des caractéristiques telles que l’âge, l’ethnie et le genre à partir de données visuelles
                </p>
                <p>
                    Je suis une personne curieuse, motivée et toujours en quête de nouveaux défis. Mon objectif est de développer mes compétences en programmation et d'acquérir plus d'expérience pour contribuer à des projets innovants. Vous pouvez découvrir plus de détails sur mon parcours et mes compétences dans ce portfolio.
                </p>
                <p>
                    Vous pouvez également consulter le programme de mon diplôme <a href="https://iutv.univ-paris13.fr/but-informatique/" target="_blank" rel="noopener noreferrer">ici</a> pour en savoir plus sur les matières que j'ai étudiées et les compétences que j'ai développées.
                </p>
                </div>
            </div>
            </div>
        </div>
        </section>


    <section id="competences" className="competences">
        <div className="content">
            <h2>Mes Compétences</h2>
            <div className="skills-grid">

            <div className="column">
                <h3>Intelligence Artificielle</h3>
                <div className="skill-item">Réseaux de neurones (Perceptron, MLP)<span className="percentage">80%</span></div>
                <div className="skill-item">CNN (Convolutional Neural Networks)<span className="percentage">75%</span></div>
                <div className="skill-item">Machine Learning<span className="percentage">80%</span></div>
                <div className="skill-item">Deep Learning<span className="percentage">70%</span></div>
                <div className="skill-item">Classification & régression<span className="percentage">85%</span></div>
                <div className="skill-item">Traitement d’images<span className="percentage">70%</span></div>
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
                <h3>Bases de données & analyse</h3>
                <div className="skill-item">PostgreSQL<span className="percentage">90%</span></div>
                <div className="skill-item">SQL<span className="percentage">90%</span></div>
                <div className="skill-item">MySQL<span className="percentage">80%</span></div>
                <div className="skill-item">Python(Pandas/Numpy)<span className="percentage">90%</span></div>
                <div className="skill-item">Anaconda/Jupyter Notebook/outils de visualisation de données<span className="percentage">75%</span></div>
            </div>

            <div className="column">
                <h3>Programmation</h3>
                <div className="skill-item">Python<span className="percentage">90%</span></div>
                <div className="skill-item">Java<span className="percentage">80%</span></div>
                <div className="skill-item">C#<span className="percentage">60%</span></div>
                <div className="skill-item">Assembleur<span className="percentage">50%</span></div>
            </div>

            <div className="column">
                <h3>Algorithmes & mathématiques</h3>
                <div className="skill-item">Analyse<span className="percentage">90%</span></div>
                <div className="skill-item">Statistiques<span className="percentage">80%</span></div>
                <div className="skill-item">Méthodes numériques<span className="percentage">80%</span></div>
                <div className="skill-item">Automates<span className="percentage">80%</span></div>
                <div className="skill-item">Probabilités<span className="percentage">80%</span></div>
            </div>

            <div className="column">
                <h3>Infrastructures & réseaux</h3>
                <div className="skill-item">Serveurs LAMP/conception de réseaux TCP/IP<span className="percentage">70%</span></div>
                <div className="skill-item">Linux<span className="percentage">95%</span></div>
                <div className="skill-item">Windows<span className="percentage">95%</span></div>
                <div className="skill-item">Android<span className="percentage">70%</span></div>
                <div className="skill-item">Docker<span className="percentage">70%</span></div>
                <div className="skill-item">Shell scripting<span className="percentage">70%</span></div>
            </div>

            <div className="column">
                <h3>Outils de Développement & Gestion de Projets</h3>
                <div className="skill-item">Git/GitHub<span className="percentage">95%</span></div>
                <div className="skill-item">UML<span className="percentage">95%</span></div>
                <div className="skill-item">VS code/IntelliJ/Eclipse<span className="percentage">85%</span></div>
                <div className="skill-item">Virtualbox/Marionnet<span className="percentage">70%</span></div>
            </div>
            </div>
        </div>
        </section>



        <section className="diplomes" id="diplomes">
            <h2>Formations</h2>
            <div className="timeline">

                <div className="timeline-item right">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <div className="formation-image">
                        <img src="/images/cytech.jpg" alt="CY Tech Cergy" />
                    </div>
                    <h3>Cycle Ingénieur Génie Informatique en alternance – Spécialisation Intelligence Artificielle en 3ème année</h3>
                    <span>Sept. 2026 - 2029</span>
                    <p>CY Tech – Cergy</p>
                </div>
                </div>

                <div className="timeline-item left">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <div className="formation-image">
                        <img src="/images/iut.jpg" alt="IUT de Villetaneuse" />
                    </div>
                    <h3>Troisième année de BUT Informatique en alternance (Première et deuxième années validées)</h3>
                    <span>2023 - en cours</span>
                    <p>Université Sorbonne Paris Nord – IUT de Villetaneuse</p>
                    <div style={{ marginTop: "10px", display: "flex", gap: "10px", justifyContent: "center" }}>
                      <a href="/pdf/DUT.pdf" target="_blank" rel="noopener noreferrer" className="btn" style={{ fontSize: "0.85rem" }}>Visualiser le DUT</a>
                      <a href="/pdf/DUT.pdf" download="DUT" className="btn" style={{ fontSize: "0.85rem" }}>Télécharger le DUT</a>
                    </div>
                </div>
                </div>

                
                <div className="timeline-item right">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <div className="formation-image">
                        <img src="/images/lycee.jpg" alt="Lycée Les trois frères SI-BACHIR" />
                    </div>
                    <h3>Baccalauréat Scientifique</h3>
                    <span>2023</span>
                    <p>Mention Très-Bien (16.78) – Lycée Les trois frères SI-BACHIR - Algérie</p>
                    <div style={{ marginTop: "10px", display: "flex", gap: "10px", justifyContent: "center" }}>
                      <a href="/pdf/BAC_Kenza.pdf" target="_blank" rel="noopener noreferrer" className="btn" style={{ fontSize: "0.85rem" }}>Visualiser le diplôme du BAC</a>
                      <a href="/pdf/BAC_Kenza.pdf" download="BAC_Kenza" className="btn" style={{ fontSize: "0.85rem" }}>Télécharger le diplôme du BAC</a>
                    </div>
                </div>
                </div>

            
                <div className="timeline-item left">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <div className="formation-image">
                        <img src="/images/college.jpg" alt="Collège YOUCEF OUALI Mohand Larbi" />
                    </div>
                    <h3>Brevet</h3>
                    <span>2020</span>
                    <p>Mention Très Bien (18.01) – collège YOUCEF OUALI Mohand Larbi - Algérie</p>
                </div>
                </div>
            </div>
        </section>

        <section id="projets" className="projets">
  <div className="content">
    <h2>Mes Projets</h2>
    <div className="project-grid">
      {/* Projet IA */}
      <div className="project-card featured">
        <div className="card-front">
          <img src="/images/IA.jpg" alt="Application mobile d’analyse par intelligence artificielle" />
          <h3>Application mobile d’analyse par IA</h3>
          <span className="pill">Projet · IA</span>
        </div>

        <div className="card-back">
          <p>
            Application mobile permettant l’analyse d’une image afin d’estimer automatiquement des caractéristiques telles que l’âge, le genre et l’ethnicité probable d’une personne.
            Le projet s’appuie sur l’utilisation de réseaux de neurones convolutifs (CNN), avec la mise en place de quatre modèles distincts : un modèle dédié à la prédiction de l’âge, un modèle pour le genre, un modèle pour l’ethnicité, ainsi qu’un modèle global visant à centraliser et harmoniser les prédictions. Une attention particulière est portée à l’optimisation des performances et à l’expérience utilisateur sur mobile.
          </p>

          <button className="btn" onClick={handleOpenIAVideo}>
            Voir la démo
          </button>
          {showIAVideo && (
            <div style={{ marginTop: "15px" }}>
              <video ref={iaVideoRef} width="100%" controls>
                <source src="/videos/ia-demo.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
              </video>
            </div>
          )}

          <a href="https://github.com/KenzaHalil/Projet_IA_Face" target="_blank" rel="noopener noreferrer" className="btn">Code GitHub</a>
          <a href="/pdf/rapport-ia.pdf" download className="btn">Télécharger le rapport</a>
        </div>
      </div>


      {/* Projet : ATS Intelligent */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/ats.jpg" alt="ATS Intelligent" />
          <h3>ATS Intelligent</h3>
          <span className="pill">Projet · IA</span>
        </div>
        <div className="card-back">
          <p>
            Projet de groupe : système de suivi de candidatures intelligent (ATS) exploitant l'intelligence artificielle pour automatiser et optimiser le processus de recrutement. Analyse automatique des CV, matching intelligent entre candidats et offres d'emploi, et classement des profils les plus pertinents.
          </p>
          <a href="https://github.com/KenzaHalil/ATS_Intelligent" target="_blank" rel="noopener noreferrer" className="btn">Code GitHub</a>
        </div>
      </div>

      {/* Projet : TransportsChatbot */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/chatbot.jpg" alt="Chatbot transports en commun" />
          <h3>TransportsChatbot</h3>
          <span className="pill">Projet · IA</span>
        </div>
        <div className="card-back">
          <p>
            Chatbot web spécialisé dans les transports en commun français (SNCF et Île-de-France Mobilités). L'utilisateur peut se connecter, créer des conversations et poser des questions sur les tarifs, l'accessibilité, les équipements et la fréquentation des gares.
          </p>
          <p style={{ fontSize: "0.85rem", color: "#555", marginTop: "8px" }}>
            <strong>Frontend :</strong> React, Vite, react-markdown &nbsp;|&nbsp;
            <strong>Backend :</strong> Flask, SQLAlchemy, bcrypt &nbsp;|&nbsp;
            <strong>LLM :</strong> OpenRouter &nbsp;|&nbsp;
            <strong>RAG :</strong> ChromaDB + sentence-transformers &nbsp;|&nbsp;
            <strong>BDD :</strong> SQLite &nbsp;|&nbsp;
            <strong>Données :</strong> Open data SNCF &amp; IDFM
          </p>
          <a href="https://github.com/KenzaHalil/TransportsChatbot" target="_blank" rel="noopener noreferrer" className="btn">Code GitHub</a>
        </div>
      </div>

      {/* Projet : Application Vélib */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/velib.jpg" alt="Application Vélib" />
          <h3>Développement de l'application Vélib'</h3>
        </div>
        <div className="card-back">
          <p>
            Dans le cadre d’un projet universitaire, j’ai développé une application web et mobile de gestion des stations Vélib’ avec mon équipe permettant de localiser en temps réel les stations disponibles, consulter les vélos et emplacements libres, simuler des réservations et suivre l’historique des utilisations. Le projet s’appuie sur des données open data et une API REST. J’ai appliqué la modélisation UML et la méthode TDD (Test Driven Development) pour garantir la qualité et la fiabilité du code.
          </p>
          <a href="https://github.com/KenzaHalil/Velib" target="_blank" rel="noopener noreferrer" className="btn">Application web</a>
          <a href="https://github.com/KenzaHalil/Velib_mobile" target="_blank" rel="noopener noreferrer" className="btn">Application mobile</a>
          <button className="btn" onClick={handleOpenVelibVideo}>
            Voir la vidéo
          </button>
          {showVelibVideo && (
            <div style={{ marginTop: "15px" }}>
              <video ref={velibVideoRef} width="100%" controls>
                <source src="/videos/velib-demo.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
              </video>
            </div>
          )}
        </div>
      </div>

      {/* Projet : Mini Convertisseur de devises */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/convertisseur.jpg" alt="Mini Convertisseur de devises" />
          <h3>Mini Convertisseur de devises</h3>
        </div>
        <div className="card-back">
          <p>
            Application web permettant de convertir des montants entre différentes devises en temps réel. Interface simple et intuitive pour effectuer rapidement des conversions de devises.
          </p>
          <a href="https://github.com/KenzaHalil/Mini-Convertisseur-de-devises" target="_blank" rel="noopener noreferrer" className="btn">Voir sur GitHub</a>
        </div>
      </div>

      {/* Projet : Bot d'annonces de logement */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/housing.jpg" alt="Bot d'annonces de logement étudiant" />
          <h3>Bot d'annonces de logement</h3>
        </div>
        <div className="card-back">
          <p>
            Bot Python de scraping automatique d'annonces immobilières permettant de trouver des chambres étudiantes, studios et logements à 500 € maximum dans des villes comme La Défense, Courbevoie, Nanterre et les communes environnantes. Le bot agrège les annonces et les filtre selon les critères de prix et de localisation.
          </p>
          <a href="https://github.com/KenzaHalil/housing_bot_annonces" target="_blank" rel="noopener noreferrer" className="btn">Voir sur GitHub</a>
        </div>
      </div>

      {/* Projet 2 : Portfolio Version 1 */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/portfolio.jpg" alt="Portfolio" />
          <h3>Portfolio Version 1</h3>
        </div>
        <div className="card-back">
          <p>Développement de mon premier portfolio personnel pour mettre en avant mes compétences et projets.</p>
          <a href="https://porfoliokenza.my.canva.site/portfoliohalilkenza" target="_blank" rel="noopener noreferrer" className="btn">Voir le portfolio</a>
        </div>
      </div>

      {/* Projet 3 : Gestion de recrutement */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/recrutement.jpg" alt="Gestion de recrutement" />
          <h3>Mini-projet de gestion de recrutement</h3>
        </div>
        <div className="card-back">
          <p>Développement d'une application pour la gestion de recrutement en utilisant Python et Django avec des tests unitaires. Modélisation UML avec Draw.io et documentation avec Swagger.</p>
          <a href="https://github.com/KenzaHalil/Recrutement-api" target="_blank" rel="noopener noreferrer" className="btn">Voir sur GitHub</a>
        </div>
      </div>

      {/* Projet 4 : Ma Calculatrice */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/calculatrice.jpg" alt="Ma Calculatrice" />
         <h3>Ma Calculatrice</h3>
        </div>
        <div className="card-back">
          <p>Projet universitaire en Java pour développer une calculatrice avec des fonctionnalités avancées en binôme.</p>
          <a href="https://github.com/KenzaHalil/SAE_R201_Ma_Calculatrice_Partie1_Kenza_tassadit" target="_blank" rel="noopener noreferrer" className="btn">Voir sur GitHub (partie 1)</a>
          <a href="https://github.com/KenzaHalil/SAE_R201_Ma_Calculatrice_Partie2_Kenza_tassadit" target="_blank" rel="noopener noreferrer" className="btn">Voir sur GitHub (partie 2)</a>
        </div>
      </div>

      {/* Projet 5 : Création et manipulation de base de données */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/bdd.jpg" alt="Création et manipulation de base de données" />
          <h3>Création et manipulation de base de données</h3>
        </div>
        <div className="card-back">
          <p>Projet universitaire pour concevoir et manipuler des bases de données relationnelles.</p>
          <a href="/pdf/rendu-final-bdd.pdf" download="Rendu_Final_BDD" className="btn">Télécharger le rendu</a>
        </div>
      </div>

      {/* Projet 6 : Santa Cruz */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/noel.jpg" alt="Papa Noel" />
          <h3>Le père Noël</h3>
        </div>
        <div className="card-back">
          <p>Projet en Python pour aider le père Noël à traverser toutes les villes de France et optimiser son trajet.</p>
        </div>
      </div>

      {/* Projet 7 : Vivatechnologie */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/vivatech.jpg" alt="Vivatechnologie" />
          <h3>Travail d'équipe</h3>
        </div>
        <div className="card-back">
          <p>Notre équipe a participé à un évènement technologique appelé VivaTech, où nous avons exploré les dernières innovations technologiques des entreprises. Inspirés par cette expérience, nous avons décidé de créer un site web pour la prochaine édition de VivaTech. Ce site mettra en avant les nouveautés attendues, les exposants, et les conférences, tout en offrant des outils de réseautage pour les participants.Grâce à ce projet collaboratif, j’ai acquis des compétences en communication et en gestion de temps ...</p>
          <a href="https://inesmarcisz.wixsite.com/vivatech2025" target="_blank" rel="noopener noreferrer" className="btn">Voir le site</a>
        </div>
      </div>

      {/* Projet 8 : Recueil de besoins */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/recueil.jpg" alt="Recueil de besoins" />
          <h3>Recueil de besoins</h3>
        </div>
        <div className="card-back">
          <p>Dans le cadre de mon projet Recueil de besoins, j'ai fais des entretiens avec des étudiants qui sonr mes clients et j'ai créé un site web qui répond à leurs attentes, j’ai acquis la compétence de comprendre les besoins des clients et  pouvoir faire un site web et son design selon la description du client et sa demande.</p>
          <a href="https://halilkenza2005.wixsite.com/la-maison-de-la-cult" target="_blank" rel="noopener noreferrer" className="btn">Voir le site</a>
          <a href="/zip/livrables.zip" download="Livrables" className="btn">Télécharger les livrables</a>
        </div>
      </div>

      {/* Projet 9 : Gestion de projet */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/gestion.jpg" alt="Gestion de projet" />
          <h3>Gestion de projet</h3>
        </div>
        <div className="card-back">
          <p>Projet universitaire pour aménager une chambre, ce projet m'a aidé à apprendre les méthodologies de gestion de projet, rédaction d'un cahier des charges et conduite de projet.</p>
          <a href="/pdf/rendu-gestion-projet.pdf" download="Rendu_Gestion_Projet" className="btn">Télécharger le rendu</a>
        </div>
      </div>

      {/* Projet 10 : Mise en place de serveurs LAMP */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/serveurs.jpg" alt="Mise en place de serveurs LAMP" />
          <h3>Mise en place de serveurs LAMP</h3>
        </div>
        <div className="card-back">
          <p>Configuration de serveurs LAMP et conception de réseaux TCP/IP.</p>
        </div>
      </div>

    </div>
  </div>
</section>

      <section id="Expériences" className="expériences">
  <div className="content">
    <h2>Expériences</h2>
    <div className="experience-grid">

      {/* Expérience 1 : Alternance CY Cergy Paris Université */}
      <div className="experience-card">
        <div className="card-front">
          <img src="/images/gargantua.jpg" alt="Automatisation de processus" />
          <h3>Alternance CY Cergy Paris Université</h3>
        </div>
        <div className="card-back">
          <h3>Alternance CY Cergy Paris Université</h3>
          <span>12 mois</span>
          <span>Dév & automatisation avec Gargantua</span>
          <p>Développement et automatisation de processus métiers au sein de l’université, en industrialisant des workflows avec la plateforme Gargantua et en assurant leur maintenance.</p>
          <a href="/pdf/rapport_alternance_1.pdf" download="Rapport_Alternance_1" className="btn">Rapport Alternance 1</a>
          <a href="/pdf/rapport_alternance_2.pdf" download="Rapport_Alternance_2" className="btn">Rapport Alternance 2</a>
        </div>
      </div>


      {/* Expérience 2 : Stage */}
      <div className="experience-card">
        <div className="card-front">
          <img src="/images/web-dev.jpg" alt="Développement web" />
          <h3>Stage en Développement Web back-end</h3>
        </div>
        <div className="card-back">
          <h3>Stage en tant qu'Analyst développeur
          </h3>
          <span>27 Janvier 2025 - 28 Mars 2025</span>
          <span>chez Reewayy SAS</span>
          <p>Développement d'une application web pour la gestion de recrutement</p>
          <a href="https://www.arimayi.fr/" target="_blank" rel="noopener noreferrer" className="btn-mauve">ARIMAYI</a>
          <a href="/pdf/rapport_stage.pdf" download="Rapport_Stage" className="btn">Télécharger le rapport</a>
        </div>
      </div>

      {/* Expérience : Interview IUT */}
      <div className="experience-card">
        <div className="card-front">
          <img src="/images/iut.jpg" alt="Interview Les Elles de l'Info" />
          <h3>Interview « Les Elles de l’Info »</h3>
        </div>
        <div className="card-back">
          <h3>Participation à une interview à l’IUT</h3>
          <span>Initiative « Les Elles de l’Info »</span>
          <p>
            J’ai participé, avec 2 camarades de ma promotion, à une vidéo au format interview pour parler de la place des femmes dans les métiers de l’informatique,
            partager nos parcours et encourager davantage de jeunes filles à s’orienter vers le numérique.
          </p>
        </div>
      </div>


    {/* Expérience supp : Tutorat */}
    <div className="experience-card">
      <div className="card-front">
        <img src="/images/tutorat.jpg" alt="Séances de tutorat" />
        <h3>Séances de tutorat en informatique</h3>
      </div>

      <div className="card-back">
        <h3>Tutorat – Accompagnement des étudiants</h3>
        <span>Durant l’année universitaire</span>
        <span>BUT Informatique (1re et 2e année)</span>
        <p>
          Participation à des séances de tutorat pendant les pauses de midi :
          aide à la compréhension des notions vues en cours, réponse aux questions
          techniques, stage et alternance, accompagnement sur les projets et conseils méthodologiques
          pour les étudiants de BUT 1 et BUT 2.
        </p>
      </div>
    </div>

      {/* Expérience 3 : Enseignement particulier */}
      <div className="experience-card">
        <div className="card-front">
          <img src="/images/teaching.jpg" alt="Enseignement" />
          <h3>Enseignement Particulier</h3>
        </div>
        <div className="card-back">
          <h3>Enseignement Particulier</h3>
          <span>2022 - Présent</span>
          <p>Donner des cours particuliers en mathématiques, anglais, français et programmation à des collégiens et des lycéens (5 élèves).</p>
        </div>
      </div>

      
      {/* Expérience 2 : Caissière chez ACTION */}
      <div className="experience-card">
        <div className="card-front">
            <img src="/images/cashier.jpg" alt="Caissière chez ACTION" />
            <h3>Caissière chez ACTION</h3>
        </div>
        <div className="card-back">
            <h3>Caissière chez ACTION</h3>
            <span>Avril 2025 - Présent</span>
            <span>4 boulevard Galliéni 92390, Villeneuve la Garenne</span>
            <p>Gestion des transactions, accueil des clients, et maintien de l'organisation en magasin.</p>
        </div>
        </div>
     
      {/* Expérience 3 : Baby-sitting */}
      <div className="experience-card">
        <div className="card-front">
          <img src="/images/babysitting.jpg" alt="Garde d'enfants" />
          <h3>Baby-sitting</h3>
        </div>
        <div className="card-back">
          <h3>Baby-sitting</h3>
          <span>2022 - Présent</span>
          <p>Prendre soin d'enfants tout en organisant des activités éducatives et ludiques.</p>
        </div>
        </div>
    </div>
  </div>
</section>


<section id="veille" className="veille">
  <div className="content">
    <h2>Veille Technologique</h2>
    <div className="veille-cards">
      <div className="veille-card">
        <img src="/images/stockage-adn-1.jpg" alt="Illustration du stockage ADN" className="veille-image" />
        <h3>Le stockage ADN</h3>
        <p>
          À mesure que les informations et les connaissances collectées par les industries, les universités et d'autres centres augmentent, il est nécessaire d'avoir un lieu de stockage de plus en plus grand.
        </p>
        <p>
          Cependant, la capacité de mémoire des supports de stockage existants est limitée, ce qui a conduit à une quête pour trouver des emplacements de stockage de données. Par exemple, un projet à l'Université de Harvard a réussi à stocker jusqu'à 700 To dans un gramme d'ADN.
        </p>
      </div>

      <div className="veille-cards-row">
        <div className="veille-card">
          <img src="/images/stockage-adn-2.jpg" alt="Fonctionnement du stockage ADN" className="veille-image" />
          <h3>Comment fonctionne le stockage ADN ?</h3>
          <p>
            Le stockage ADN consiste à encoder des données binaires dans l'ADN. Pour ce faire, les bits individuels (chiffres binaires) sont convertis de 1 et 0 vers les lettres A, C, G et T. Ces lettres représentent les quatre principaux composants de l'ADN : l'adénine, la cytosine, la guanine et la thymine.
          </p>
        </div>
        <div className="veille-card">
          <img src="/images/stockage-adn-3.jpg" alt="Intérêt pour le stockage ADN" className="veille-image" />
          <h3>Pourquoi cette technologie m'intéresse ?</h3>
          <p>
            La combinaison entre la science de la vie et l’informatique a particulièrement attiré mon attention, car je suis passionnée par ces deux domaines. En plus, c’est une technologie innovante et prometteuse qui mérite d’être explorée.
          </p>
          <p>
            Pour en savoir plus, consultez cet article : 
            <a href="https://lejournal.cnrs.fr/articles/stockage-de-donnees-la-revolution-sur-adn" target="_blank" rel="noopener noreferrer">
              Stockage ADN : l'avenir du stockage de données
            </a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* filepath: /home/kenza/mon-portfolio/src/pages/index.tsx */}
<section id="autre" className="autre">
  <div className="content">
    <h2>Autre</h2>
    <div className="tabs">
  <button
    className={`tab-button ${activeTab === "langues" ? "active" : ""}`}
    onClick={() => setActiveTab("langues")}
  >
    Langues
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


  <div className={`tab-content ${activeTab === "langues" ? "active" : "hidden"}`} id="langues">
            <h3>Langues</h3>
            <div className="flags">
              <div className="flag">
                <img src="/icons/france.jpg" alt="Français" />
                <p><strong>Français</strong><br />Bilingue</p>
              </div>
              <div className="flag">
                <img src="/icons/uk.jpg" alt="Anglais" />
                <p><strong>Anglais</strong><br />Niveau B2</p>
              </div>
              <div className="flag">
                <img src="/icons/kabyle.jpg" alt="Kabyle" />
                <p><strong>Kabyle</strong><br />Langue maternelle</p>
              </div>
              <div className="flag">
                <img src="/icons/arabe.jpg" alt="Arabe" />
                <p><strong>Arabe</strong><br />Bilingue</p>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <p><strong>Certification CLES</strong> – Anglais Niveau B2</p>
              <a href="/pdf/CLES.pdf" target="_blank" rel="noopener noreferrer" className="btn" style={{ fontSize: "0.9rem" }}>Visualiser le certificat</a>
              <a href="/pdf/CLES.pdf" download="CLES" className="btn" style={{ fontSize: "0.9rem", marginLeft: "10px" }}>Télécharger le certificat</a>
            </div>
          </div>
          <div className={`tab-content ${activeTab === "soft-skills" ? "active" : "hidden"}`} id="soft-skills">
            <h3>Soft Skills</h3>
            <ul>
              <li><strong>Créativité</strong> — Je suis capable de trouver rapidement des solutions aux problèmes</li>
              <li><strong>Ambition</strong> — Je suis ambitieuse, motivée par la recherche de défis et d'opportunités. Ma détermination à réussir guide mes actions et me pousse à constamment repousser mes limites</li>
              <li><strong>Esprit d’équipe</strong> — Je suis capable de collaborer efficacement, à communiquer clairement et à être flexible et adaptable dans mon approche de travail en équipe.</li>
              <li><strong>Sérieux</strong> — Je suis sérieuse et engagée dans mes efforts, travaillant avec rigueur pour atteindre mes objectifs. Ma fiabilité et ma responsabilité font partie intégrante de ma personnalité.</li>
              <li><strong>Organisation</strong> — Je suis reconnue pour ma capacité à être méthodique et organisée, ce qui se traduit par une gestion efficace des tâches et des projets, ainsi qu'une attention particulière portée aux détails.</li>
              <li><strong>Adaptabilité</strong> — Je suis capable de m’ajuster rapidement aux changements et de m’adapter à de nouvelles situations, ce qui me permet de m’épanouir dans des environnements variés.</li>
              <li><strong>Curiosité</strong> — Je suis avide de connaissances et j’aime explorer de nouveaux domaines, ce qui me permet d'élargir constamment mes compétences.</li>
              <li><strong>Autonomie</strong> — Je suis capable de travailler de manière indépendante, en prenant des initiatives et en assumant la responsabilité de mes actions.</li>
            </ul>
          </div>
          <div className={`tab-content ${activeTab === "passions" ? "active" : "hidden"}`} id="passions">
            <h3>Passions</h3>
            <ul>
            <li><strong>Développement informatique</strong> — une passion pour la création de solutions techniques et d’interfaces utiles.</li>
            <li><strong>Médecine</strong> — un fort intérêt pour le domaine de la santé et des sciences médicales.</li>
            <li><strong>Équitation</strong> — pratique et amour du lien avec les chevaux.</li>
            <li><strong>Cinéma (science-fiction)</strong> — fascination pour les univers futuristes, les récits visionnaires et les technologies imaginées.</li>
            <li><strong>Lecture</strong> — plaisir de découvrir de nouveaux univers à travers les livres et les romans.</li>
            <li><strong>Voyages</strong> — envie de découvrir d'autres cultures et d'explorer le monde.</li>
            <li><strong>Musique</strong> — écoute variée et inspiration dans la créativité musicale.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="references" className="references">
  <div className="content">
    <h2>Références</h2>
    <div className="references-grid">
      {/* Référence 1 */}
      <div className="reference-card">
        <img src="/images/person1.jpg" alt="Personne 1" className="reference-photo" />
        <h3>Samir BEDOUHENE</h3>
        <p>Co-fondateur de l'entreprise Reewayy SAS</p>
        <div className="reference-buttons">
          <a href="samir.bedouhene@reewayy.io" className="icon-button" target="_blank" rel="noopener noreferrer">
            <img src="/icons/email.svg" alt="Email" />
          </a>
          <a href="https://www.linkedin.com/in/samir-bedouhene/" className="icon-button" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>

      {/* Référence 2 */}
      <div className="reference-card">
        <img src="/images/person2.jpg" alt="Personne 2" className="reference-photo" />
        <h3>Pascale Hellégouarc'h</h3>
        <p>Cheffe de département informatique à l'IUT de Villetaneuse</p>
        <div className="reference-buttons">
          <a href="pascale.hellegouarc-h@univ-paris13.fr " className="icon-button" target="_blank" rel="noopener noreferrer">
            <img src="/icons/email.svg" alt="Email" />
          </a>
          <a href="https://www.linkedin.com/in/pascale-hell%C3%A9gouarc-h-b69903148/" className="icon-button" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>

      {/* Référence 3 */}
      <div className="reference-card">
        <img src="/images/person3.jpg" alt="Martial Dubois" className="reference-photo" />
        <h3>Martial Dubois</h3>
        <p>Responsable de projet Gargantua à CY Cergy Paris Université</p>
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
            <h2>Mon CV</h2>
            <p>Future ingénieure admise à CY Tech, je suis à la recherche d’une alternance en informatique à partir de septembre. Mon objectif est d’intégrer une entreprise où je pourrai mettre en pratique mes compétences techniques, continuer à apprendre sur des projets concrets et contribuer avec rigueur et motivation.</p>
            <p>Téléchargez mon CV</p>
            <div className="cv-links">
            <a href="/pdf/Kenza_HALIL_CV_FR.pdf" target="_blank" rel="noopener noreferrer" className="btn">Visualiser le CV (Français)</a>
            <a href="/pdf/Kenza_HALIL_CV_FR.pdf" download="Mon_CV_France" className="btn">Télécharger le CV (Français)</a>
            <a href="/pdf/Kenza_HALIL_CV_EN.pdf" target="_blank" rel="noopener noreferrer" className="btn">Visualiser le CV (English)</a>
            <a href="/pdf/Kenza_HALIL_CV_EN.pdf" download="My_CV_English" className="btn" style={{ backgroundColor: "#007bff" }}>Download CV (English)</a>
            </div>
        </div>
       </section>

       <section id="contact" className="contact">
      <div className="content">
        <h2>Me Contacter</h2>
        <p>Vous pouvez me joindre via les liens ci-dessous :</p>
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
                <p>&copy; {new Date().getFullYear()} Kenza HALIL. Tous droits réservés.</p>
                <p>Téléphone: +33 (0)602566055</p>
                <p>Ce site est un projet Next.js qui a été codé avec TypeScript, JavaScript, HTML et CSS.</p>
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
          background-color: rgba(255, 255, 255, 0.7);
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

        .hero-quote {
          font-style: italic;
          font-size: 1.5rem !important;
          color: #0070f3 !important;
          font-weight: 700;
          margin-top: 20px !important;
          padding-top: 14px;
          border-top: 2px solid rgba(0, 0, 0, 0.15);
          letter-spacing: 0.5px;
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

/* Mode sombre */
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
.theme-dark .expériences,
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
