
"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {

  
  const [scrollDirection, setScrollDirection] = useState('up'); // Initialement vers le haut
  const [activeTab, setActiveTab] = useState("langues"); // Onglet par défaut

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

  return (
    <>
      <Head>
        <title>Portfolio - Kenza HALIL</title>
        <meta name="description" content="Portfolio de Kenza HALIL, étudiante en informatique à l'IUT de Ville-Tanneuse, à la recherche d'une alternance." />
        <meta name="keywords" content="Kenza HALIL, informatique, alternance, développement, web, Python, PHP, Next.js" />
        <meta name="author" content="Kenza HALIL" />
      </Head>

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
    🇬🇧
  </button>
</li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>Kenza HALIL</h1>
          <p><strong>Étudiante en Informatique à la recherche d'une alternance</strong></p>
          <p><strong>“Code ton futur avec passion & détermination!”</strong></p>
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
                    Bonjour, je m'appelle Kenza HALIL et je suis actuellement en deuxième année de BUT Informatique à l'IUT de Villetaneuse, Université Sorbonne Paris Nord. Passionnée par l'informatique et le développement, je suis à la recherche d'une alternance pour mettre en pratique mes compétences et continuer à apprendre dans un environnement professionnel.
                </p>
                <p>
                    Au cours de mes études, j'ai acquis une solide maîtrise des langages de programmation tels que Python, PHP, JavaScript, ainsi que des technologies web comme HTML, CSS, et jQuery. J'ai également travaillé sur des projets de développement backend avec des bases de données SQL et PostgreSQL, ainsi que des applications front-end.
                </p>
                <p>
                    Je suis une personne curieuse, motivée et toujours en quête de nouveaux défis. Mon objectif est de développer mes compétences en programmation et d'acquérir de l'expérience pour contribuer à des projets innovants. Vous pouvez découvrir plus de détails sur mon parcours et mes compétences dans ce portfolio.
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
                <h3>Web & API</h3>
                <div className="skill-item">HTML / CSS / JS<span className="percentage">60%</span></div>
                <div className="skill-item">PHP<span className="percentage">60%</span></div>
                <div className="skill-item">Next.js<span className="percentage">50%</span></div>
                <div className="skill-item">JavaScript/jQuery<span className="percentage">75%</span></div>
                <div className="skill-item">Django/Flask<span className="percentage">80%</span></div>
                <div className="skill-item">Canva<span className="percentage">90%</span></div>
            </div>

            <div className="column">
                <h3>Bases de données & analyse</h3>
                <div className="skill-item">MySQL<span className="percentage">80%</span></div>
                <div className="skill-item">PostgreSQL<span className="percentage">90%</span></div>
                <div className="skill-item">SQL<span className="percentage">90%</span></div>
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
                <div className="skill-item">Shell scripting<span className="percentage">70%</span></div>
            </div>

            <div className="column">
                <h3>Outils de Développement & Gestion de Projets</h3>
                <div className="skill-item">Git/GitHub<span className="percentage">95%</span></div>
                <div className="skill-item">VS code/IntelliJ/Eclipse<span className="percentage">85%</span></div>
                <div className="skill-item">UML<span className="percentage">95%</span></div>
                <div className="skill-item">Virtualbox/Marionnet<span className="percentage">70%</span></div>
            </div>
            </div>
        </div>
        </section>



        <section className="diplomes" id="diplomes">
            <h2>Formations</h2>
            <div className="timeline">
             
                <div className="timeline-item left">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <h3>Deuxième année de BUT Informatique (Première année validée)</h3>
                    <span>2023 - en cours</span>
                    <p>Université Sorbonne Paris Nord – IUT de Villetaneuse</p>
                </div>
                </div>

                
                <div className="timeline-item right">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <h3>Baccalauréat Scientifique</h3>
                    <span>2022</span>
                    <p>Mention Très-Bien (16.78) – Lycée Les trois frères SI-BACHIR</p>
                </div>
                </div>

            
                <div className="timeline-item left">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <h3>Brevet</h3>
                    <span>2020</span>
                    <p>Mention Très Bien (18.01) – collège YOUCEF OUALI Mohand Larbi</p>
                </div>
                </div>
            </div>
        </section>

        <section id="projets" className="projets">
  <div className="content">
    <h2>Mes Projets</h2>
    <div className="project-grid">
      {/* Projet 1 : Application Vélib */}
      <div className="project-card">
        <div className="card-front">
          <img src="/images/velib.jpg" alt="Application Vélib" />
          <h3>Développement de l'application Vélib'</h3>
        </div>
        <div className="card-back">
          <p>Dans le cadre d’un projet universitaire, j’ai développé une application de gestion des stations Vélib’ avec mon équipe permettant de localiser en temps réel les stations disponibles, consulter les vélos et emplacements libres, simuler des réservations et suivre l’historique des utilisations. Le projet s’appuie sur des données open data et une API REST. J’ai appliqué la modélisation UML et la méthode TDD (Test Driven Development) pour garantir la qualité et la fiabilité du code.</p>
          <a href="https://github.com/KenzaHalil/Velib" target="_blank" rel="noopener noreferrer" className="btn">Voir sur GitHub</a>
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

      {/* Expérience 1 : Enseignement particulier */}
      <div className="experience-card">
        <div className="card-front">
          <img src="/images/teaching.jpg" alt="Enseignement" />
          <h3>Enseignement Particulier</h3>
        </div>
        <div className="card-back">
          <h3>Enseignement Particulier</h3>
          <span>2022 - Présent</span>
          <p>Donner des cours particuliers en mathématiques, anglais, français et programmation à des collégiens et des lycéens.</p>
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
          </div>
          <div className={`tab-content ${activeTab === "soft-skills" ? "active" : "hidden"}`} id="soft-skills">
            <h3>Soft Skills</h3>
            <ul>
              <li>Créativité — Je suis capable de trouver rapidement des solutions aux problèmes</li>
              <li>Ambition — Je suis ambitieuse, motivée par la recherche de défis et d'opportunités. Ma détermination à réussir guide mes actions et me pousse à constamment repousser mes limites</li>
              <li>Esprit d’équipe — Je suis capable de collaborer efficacement, à communiquer clairement et à être flexible et adaptable dans mon approche de travail en équipe.</li>
              <li>Sérieux — Je suis sérieuse et engagée dans mes efforts, travaillant avec rigueur pour atteindre mes objectifs. Ma fiabilité et ma responsabilité font partie intégrante de ma personnalité.</li>
              <li>Organisation — Je suis reconnue pour ma capacité à être méthodique et organisée, ce qui se traduit par une gestion efficace des tâches et des projets, ainsi qu'une attention particulière portée aux détails.</li>
              <li>Adaptabilité — Je suis capable de m’ajuster rapidement aux changements et de m’adapter à de nouvelles situations, ce qui me permet de m’épanouir dans des environnements variés.</li>
              <li>Curiosité — Je suis avide de connaissances et j’aime explorer de nouveaux domaines, ce qui me permet d'élargir constamment mes compétences.</li>
              <li>Autonomie — Je suis capable de travailler de manière indépendante, en prenant des initiatives et en assumant la responsabilité de mes actions.</li>
            </ul>
          </div>
          <div className={`tab-content ${activeTab === "passions" ? "active" : "hidden"}`} id="passions">
            <h3>Passions</h3>
            <ul>
            <li>Développement informatique — une passion pour la création de solutions techniques et d’interfaces utiles.</li>
            <li>Médecine — un fort intérêt pour le domaine de la santé et des sciences médicales.</li>
            <li>Équitation — pratique et amour du lien avec les chevaux.</li>
            <li>Cinéma (science-fiction) — fascination pour les univers futuristes, les récits visionnaires et les technologies imaginées.</li>
            <li>Lecture — plaisir de découvrir de nouveaux univers à travers les livres et les romans.</li>
            <li>Voyages — envie de découvrir d'autres cultures et d'explorer le monde.</li>
            <li>Musique — écoute variée et inspiration dans la créativité musicale.</li>
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
    </div>
  </div>
</section>

      <section id="cv" className="cv">
        <div className="content">
            <h2>Mon CV</h2>
            <p>Je suis à la recherche d’une alternance en informatique pour une durée de 12 mois, avec un rythme de deux semaines en entreprise et deux semaines à l’IUT afin de mettre en pratique mes compétences et intégrer un monde professionnel tôt et en parallèle avec les études. Je souhaite travailler dans une entreprise qui valorise les compétences des débutants dans ce domaine.</p>
            <p>Téléchargez mon CV</p>
            <div className="cv-links">
            <a href="/pdf/Kenza_HALIL_CV_FR.pdf" download="Mon_CV_France" className="btn">Télécharger le CV (Français)</a>
            <a href="/pdf/Kenza_HALIL_CV_EN.pdf" download="My_CV_English" className="btn">Download CV (English)</a>
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
  grid-column: span 3; /* Étend la dernière carte sur deux colonnes */
  justify-self: center; /* Centre la carte dans la grille */
}

.experience-card:first-child {
  margin-top: 450px; /* Décale la première carte vers le bas */
}

.experience-card:nth-child(3) {
  margin-top: 450px; /* Décale la troisième carte vers le bas */
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


 `}</style>
 </>
  );
}