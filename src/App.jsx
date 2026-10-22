
import './App.css'
import ganeshPhoto from './assets/ganesh.jpeg'
import signLanguageImage from './assets/sign-language.jpg'
import nearestHospitalImage from './assets/nearest-hospital.jpg'
import hateSpeechImage from './assets/hate-speech.jpg'
import bakeryOrderImage from './assets/bakery-order.jpg'
function App() {
  return (
    <main className="portfolio">
      <nav className="navbar">
        <a className="brand" href="#home">
          GM<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-cta" href="#contact">
          Let's talk <span>↗</span>
        </a>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="status-dot"></span>
            SOFTWARE ENGINEERING INTERN · BENGALURU
          </p>

          <h1>
            Building ideas
            <br />
            into <span className="highlight">digital</span>
            <br />
            experiences<span className="period">.</span>
          </h1>

          <p className="hero-description">
            Python Full-Stack Developer | Software Engineering Intern | Exploring AI & Data Engineering
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              Explore my work <span>↗</span>
            </a>

            <a className="secondary-button" href="#contact">
              Get in touch
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <span className="meta-label">CORE STACK</span>
              <span className="meta-value">Python · Django · React</span>
            </div>

            <div>
              <span className="meta-label">CURRENTLY LEARNING</span>
              <span className="meta-value">C# · ASP.NET Core</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow"></div>

          <div className="visual-card">
            <div className="card-top">
              <span>DEVELOPER PROFILE</span>
              <span className="card-indicator">● AVAILABLE TO CONNECT</span>
            </div>

            <div className="profile-photo">
              <img src={ganeshPhoto} alt="Ganesh M. - Software Engineer" />
            </div>

            <div className="visual-divider"></div>

            <p className="visual-name">Ganesh M.</p>
            <p className="visual-role">Full-Stack Foundations / Backend Growth</p>

            <div className="tech-tags">
              <span>Python</span>
              <span>Django</span>
              <span>React</span>
              <span>.NET</span>
              <span>SQL</span>
            </div>

            <div className="card-bottom">
              <span>CURIOUS BY NATURE</span>
              <span>BUILT TO LEARN ↗</span>
            </div>
          </div>

          <div className="floating-note note-top">
            <span className="note-icon">{"</>"}</span>
            <span>Clean code. Useful products.</span>
          </div>

          <div className="floating-note note-bottom">
            <span className="note-dot"></span>
            Learning. Building. Improving.
          </div>
        </div>
      </section>

      
<section className="intro-strip" id="about">
  <p>FROM PYTHON FULL-STACK DEVELOPMENT</p>
  <span>✳</span>
  <p>TO PROFESSIONAL BACKEND ENGINEERING</p>
</section>

<section className="about-section">
  <div className="about-content">
    <p className="section-eyebrow">A LITTLE ABOUT ME</p>

    <h2>
      Developer by foundation.
      <br />
      <span>Curious by nature.</span>
    </h2>

    <p className="about-description">
      I'm a Python Full-Stack Developer with training in Python,
      Django, Django REST Framework, and React.js. Currently, I'm
      working as a Software Engineering Intern, learning C# and
      .NET backend development. Beyond software development, I'm
      passionate about exploring Artificial Intelligence and
      currently upskilling in Data Engineering to expand my
      knowledge of data processing, pipelines, and modern data
      platforms.
    </p>
  </div>
</section>

      <section className="skills-section" id="skills">
  <div className="section-heading">
    <p className="section-label">MY TOOLKIT</p>
    <h2>Skills that turn ideas <span>into reality.</span></h2>
    <p className="section-description">
      Technologies I use today and the backend skills I'm developing
      to build reliable, useful applications.
    </p>
  </div>

  <div className="skills-grid">
    <article className="skill-card">
      <span className="skill-number">01 / CORE SKILLS</span>
      <h3>Python Full-Stack</h3>
      <p>
        My foundation for developing web applications, APIs,
        and database-driven solutions.
      </p>
      <div className="skill-tags">
        <span>Python</span>
        <span>Django</span>
        <span>Django REST Framework</span>
        <span>React.js</span>
        <span>JavaScript</span>
        <span>HTML & CSS</span>
        <span>REST APIs</span>
      </div>
    </article>

    <article className="skill-card">
      <span className="skill-number">02 / DATABASES</span>
      <h3>Data & SQL</h3>
      <p>
        Working with relational databases, queries, and
        structured application data.
      </p>
      <div className="skill-tags">
        <span>PostgreSQL</span>
        <span>MySQL</span>
        <span>SQL Server</span>
        <span>Joins</span>
        <span>Subqueries</span>
        <span>Aggregations</span>
      </div>
    </article>

    <article className="skill-card">
      <span className="skill-number">03 / CURRENT GROWTH</span>
      <h3>.NET Backend</h3>
      <p>
        Building practical backend development experience
        through my software engineering internship and projects.
      </p>
      <div className="skill-tags">
        <span>C#</span>
        <span>ASP.NET Core Web API</span>
        <span>Entity Framework Core</span>
        <span>LINQ</span>
        <span>Dependency Injection</span>
        <span>JWT Basics</span>
      </div>
    </article>
  </div>
</section>

{/* Projects Section */}
<section className="projects-section" id="projects">
  <div className="projects-heading">
    <p className="section-eyebrow">MY WORK</p>

    <h2>
      Featured <span>Projects.</span>
    </h2>

    <p className="projects-intro">
      A selection of projects showcasing my work in
      full-stack development, machine learning, and problem-solving.
    </p>
  </div>

  
<div className="projects-grid">
  {/* Project 1: Sign Language Conversion */}
  <article className="project-card">
    <div className="project-image sign-language-image">
      <img
      src={signLanguageImage}
      alt="Illustration of sign language recognition using hand landmarks"
      loading="lazy"
      />
      <span className="project-number">01</span>
    </div>

    <div className="project-content">
      <p className="project-category">MACHINE LEARNING · COMPUTER VISION</p>

      <h3>Sign Language Conversion into Text and Speech</h3>

      <p className="project-description">
        A Python-based application that recognizes hand gestures and
        converts sign language into text and spoken output using
        computer vision and machine learning.
      </p>

      <div className="project-tags">
        <span>Python</span>
        <span>OpenCV</span>
        <span>MediaPipe</span>
        <span>TensorFlow</span>
        <span>pyttsx3</span>
      </div>

      <div className="project-footer">
        <span>80+ signs · 11 categories</span>
        <span className="project-arrow">↗</span>
      </div>
    </div>
  </article>
  
{/* Project 2: Nearest Hospital Finder */}
<article className="project-card">
  <div className="project-image">
    
  <img
    src={nearestHospitalImage}
    alt="Illustration of a hospital locator with a map pin"
    loading="lazy"
  />

    <span className="project-number">02</span>
  </div>

  <div className="project-content">
    <p className="project-category">WEB DEVELOPMENT · LOCATION SERVICES</p>

    <h3>Nearest Hospital Finder</h3>

    <p className="project-description">
      A web application designed to help users locate nearby hospitals
      and find useful information to make healthcare services easier
      to access.
    </p>

    <div className="project-tags">
      <span>Python</span>
      <span>Django</span>
      <span>JavaScript</span>
      <span>Maps / Location</span>
    </div>

    <div className="project-footer">
      <span>Location-based hospital discovery</span>
      <span className="project-arrow">↗</span>
    </div>
  </div>
</article>

{/* Project 3: Hate Speech Detection */}
<article className="project-card">
  <div className="project-image">
    
    <img
      src={hateSpeechImage}
      alt="Illustration of a hate speech detection and text moderation system"
      loading="lazy"
    />

    <span className="project-number">03</span>
  </div>

  <div className="project-content">
    <p className="project-category">NLP · MACHINE LEARNING</p>

    <h3>Hate Speech Detection</h3>

    <p className="project-description">
      A machine learning project that analyzes text using natural
      language processing techniques to identify potentially hateful
      content and support safer online communication.
    </p>

    <div className="project-tags">
      <span>Python</span>
      <span>NLP</span>
      <span>TF-IDF</span>
      <span>Machine Learning</span>
    </div>

    <div className="project-footer">
      <span>Text classification</span>
      <span className="project-arrow">↗</span>
    </div>
  </div>
</article>

{/* Project 4: Bakery Order Management System */}
<article className="project-card">
  <div className="project-image">
    
<img
  src={bakeryOrderImage}
  alt="Illustration of a bakery ordering website on a mobile device"
  loading="lazy"
/>

    <span className="project-number">04</span>
  </div>

  <div className="project-content">
    <p className="project-category">FULL-STACK WEB DEVELOPMENT</p>

    <h3>Bakery Order Management System</h3>

    <p className="project-description">
      A Django-based web application for browsing bakery products,
      managing customer orders, and tracking order status, with
      authentication and role-based access.
    </p>

    <div className="project-tags">
      <span>Python</span>
      <span>Django</span>
      <span>SQLite</span>
      <span>HTML &amp; CSS</span>
      <span>Bootstrap</span>
    </div>

    <div className="project-footer">
      <span>Product and order management</span>
      <span className="project-arrow">↗</span>
    </div>
  </div>
</article>
</div>
</section>

{/* Contact Section */}
<section className="contact-section" id="contact">
  
<p className="section-eyebrow">GET IN TOUCH</p>

<h2>
  Have a project in <span>mind?</span>
</h2>

<p className="contact-description">
  I'm open to connecting with recruiters, collaborating on
  interesting projects, and exploring freelance opportunities.
  Let's build something useful together.
</p>

<div className="contact-details">
  <a
    className="contact-detail"
    href="mailto:ganesh.m0717@gmail.com"
  >
    <span className="contact-detail-label">EMAIL ME</span>
    <span className="contact-detail-value">
      ganesh.m0717@gmail.com
    </span>
  </a>

  <a
    className="contact-detail"
    href="tel:+919036243055"
  >
    <span className="contact-detail-label">CALL ME</span>
    <span className="contact-detail-value">
      +91 9036243055
    </span>
  </a>
</div>

<p className="contact-note">
  Always learning. Always building. Open to new opportunities.
</p>

</section>
<footer className="site-footer">
  <p>Designed & Built by <span>Ganesh M.</span></p>
  <p>Built with React.js</p>
</footer>


    </main>
  )
}


export default App
