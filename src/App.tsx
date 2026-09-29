import heroImg from "./assets/foto_cara.jpeg";
import feedMattImg from "./assets/feed_matt.png";
import libraryMattImg from "./assets/library_matt.png";
import "./App.css";

const projects = [
  {
    title: "MATT — Music all the time",
    category: "Streaming musical / producto",
    description:
      "Plataforma de música pensada para dar visibilidad a artistas con pocos recursos, facilitando el descubrimiento, la escucha rápida y el apoyo directo a nuevos talentos.",
    image: feedMattImg,
    label: "Feed principal",
  },
  {
    title: "MATT — Music all the time",
    category: "Experiencia de usuario / escucha",
    description:
      "Diseño centrado en la navegación, la biblioteca personal y la conexión entre el usuario y el artista, con una experiencia clara, moderna y cercana.",
    image: libraryMattImg,
    label: "Biblioteca y escucha",
  },
];

function App() {
  return (
    <div className="portfolio-shell">
      <header className="topbar">
        <div className="brand">Matt</div>
        <nav className="nav">
          <a href="#proyectos">Proyectos</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main className="page">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio personal</p>
            <h1>Diseño cálido, funcional y con personalidad.</h1>
            <p className="lead">
              Creo interfaces que equilibran estética, claridad y experiencia de
              usuario para proyectos con identidad propia.
            </p>
            <div className="hero-actions">
              <a href="#proyectos" className="primary-btn">
                Ver proyectos
              </a>
              <a href="#contacto" className="secondary-btn">
                Hablemos
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-frame">
              <img src={heroImg} alt="Retrato de Matt" />
            </div>
          </div>
        </section>

        <section className="stats" aria-label="Resumen profesional">
          <div>
            <strong>CFGS</strong>
            <span>DAW</span>
          </div>
          <div>
            <strong>+10</strong>
            <span>proyectos y entregas</span>
          </div>
          <div>
            <strong>Aprendo</strong>
            <span>cada día para crecer</span>
          </div>
        </section>

        <section id="proyectos" className="projects">
          <div className="section-heading">
            <p className="eyebrow">Proyectos destacados</p>
            <h2>Un proyecto con propósito real.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                key={`${project.title}-${project.label}`}
                className="project-card"
              >
                <img src={project.image} alt={project.title} />
                <div className="project-body">
                  <span className="project-tag">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p className="project-label">{project.label}</p>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="sobre-mi" className="about">
          <div className="section-heading left">
            <p className="eyebrow">Sobre mí</p>
            <h2>Construyo experiencias con carácter.</h2>
          </div>
          <div className="about-copy">
            <p>
              Soy estudiante de Desarrollo de Aplicaciones Web y estoy buscando
              mi primera oportunidad para entrar en el sector. He trabajado en
              proyectos reales que me han permitido desarrollar tanto la parte
              visual como la técnica, y cada día sigo aprendiendo con ganas para
              mejorar, resolver problemas y aportar valor a un equipo.
            </p>
            <p>
              Me interesa formar parte de un proyecto donde pueda seguir
              creciendo, colaborar, aprender de profesionales del sector y
              contribuir con mi motivación, curiosidad y compromiso para crear
              productos útiles y bien hechos.
            </p>
          </div>
        </section>

        <section id="contacto" className="contact-box">
          <p className="eyebrow">Contacto</p>
          <h2>¿Quieres colaborar en tu siguiente proyecto?</h2>
          <a href="mailto:arbarcel@gmail.com">arbarcel@gmail.com</a>
        </section>
      </main>
    </div>
  );
}

export default App;
