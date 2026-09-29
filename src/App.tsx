import heroImg from "./assets/foto_cara.jpeg";
import feedMattImg from "./assets/feed_matt.png";
import libraryMattImg from "./assets/library_matt.png";
import "./App.css";

const projects = [
  {
    title: "Matt Feed",
    category: "Red social / experiencia",
    description:
      "Diseño centrado en contenido visual, comunidad y navegación fluida para una experiencia más cercana y auténtica.",
    image: feedMattImg,
  },
  {
    title: "Matt Library",
    category: "Biblioteca digital / producto",
    description:
      "Plataforma para explorar colecciones, organizar referencias y ofrecer una lectura más cómoda y expresiva.",
    image: libraryMattImg,
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
            <strong>+2</strong>
            <span>años de trabajo</span>
          </div>
          <div>
            <strong>12</strong>
            <span>proyectos</span>
          </div>
          <div>
            <strong>UX</strong>
            <span>orientado a personas</span>
          </div>
        </section>

        <section id="proyectos" className="projects">
          <div className="section-heading">
            <p className="eyebrow">Proyectos destacados</p>
            <h2>Ideas visuales con un enfoque real.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <img src={project.image} alt={project.title} />
                <div className="project-body">
                  <span className="project-tag">{project.category}</span>
                  <h3>{project.title}</h3>
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
          <p>
            Me interesa crear productos digitales con identidad, claridad
            narrativa y un trato cercano para la gente que los usa. La mezcla
            entre diseño, creatividad y funcionalidad es lo que más me motiva.
          </p>
        </section>

        <section id="contacto" className="contact-box">
          <p className="eyebrow">Contacto</p>
          <h2>¿Quieres colaborar en tu siguiente proyecto?</h2>
          <a href="mailto:matt@example.com">matt@example.com</a>
        </section>
      </main>
    </div>
  );
}

export default App;
