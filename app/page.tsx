"use client";

import { useEffect, useState } from "react";

const experiences = [
  {
    role: "Android Developer",
    company: "LAPO Microfinance Bank",
    period: "Jun 2026 — Present",
    bullets: [
      "Led the product design, development and launch of the LAPO Mobile 2.0 Android app using Kotlin and Jetpack Compose.",
      "Built scalable Android features and integrated RESTful APIs for authentication, transactions and real-time data.",
      "Collaborated with backend, QA, product and design teams in an Agile environment.",
      "Drove QA and release readiness for stable production rollouts.",
    ],
  },
  {
    role: "Android Developer",
    company: "AppCoy Softwares Limited",
    period: "Jan 2024 — Apr 2026",
    bullets: [
      "Developed and maintained Android applications using Kotlin and Jetpack Compose.",
      "Improved app stability, startup performance and UI rendering.",
      "Integrated RESTful APIs and resolved critical production bugs.",
      "Contributed to code reviews and mentored junior developers on Android best practices.",
    ],
  },
  {
    role: "Frontend Web Developer",
    company: "Noir Limited",
    period: "Feb 2022 — Dec 2023",
    bullets: [
      "Built responsive web applications using Next.js, JavaScript and Tailwind CSS.",
      "Translated Figma designs into production-ready interfaces and reusable components.",
      "Integrated APIs and improved web performance, accessibility and responsiveness.",
    ],
  },
];

const projects = [
  {
    title: "LAPO Mobile App 2.0",
    type: "Android · Fintech",
    description:
      "A modern Android banking experience built with Kotlin and Jetpack Compose, including API-driven authentication, transaction flows and production-ready mobile interfaces.",
    stack: ["Kotlin", "Jetpack Compose", "Android SDK", "REST APIs"],
  },
  {
    title: "Prodile",
    type: "Product Design · Web",
    description:
      "Product design and web experience focused on clean user journeys, responsive interfaces and scalable frontend implementation.",
    stack: ["Next.js", "Figma", "Responsive UI"],
  },
  {
    title: "Vendile AI Agent App",
    type: "Product Design · Web",
    description:
      "An AI-focused product experience combining interface design, prototyping and frontend thinking.",
    stack: ["Next.js", "Figma", "Product Design"],
  },
];

const skills = [
  "Kotlin",
  "Jetpack Compose",
  "Android SDK",
  "RESTful APIs",
  "Git",
  "Next.js",
  "JavaScript",
  "Tailwind CSS",
  "Figma",
  "Agile / Scrum",
];

const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=akinoluwatimilehin1@gmail.com";
const MAILTO_URL = "mailto:akinoluwatimilehin1@gmail.com";

function TypewriterHeading() {
  const fullText = "I build fast, polished Android experiences.";
  const highlightPhrase = "Android experiences.";
  const splitIndex = fullText.indexOf(highlightPhrase); // 23 ("I build fast, polished ")

  const [charCount, setCharCount] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    const timerDelay = setTimeout(() => {
      let count = 0;
      const interval = setInterval(() => {
        count += 1;
        setCharCount(count);
        if (count >= fullText.length) {
          clearInterval(interval);
          setIsTypingDone(true);
        }
      }, 48);

      return () => clearInterval(interval);
    }, 350);

    return () => clearTimeout(timerDelay);
  }, []);

  const typedText = fullText.slice(0, charCount);
  const basePart = typedText.slice(0, splitIndex);
  const accentPart = charCount > splitIndex ? typedText.slice(splitIndex) : "";

  return (
    <h1 aria-label={fullText} className="hero-heading">
      <span>{basePart}</span>
      {accentPart && <span className="hero-accent">{accentPart}</span>}
      <span
        className={`typewriter-cursor ${isTypingDone ? "is-blinking" : ""}`}
        aria-hidden="true"
      >
        |
      </span>
    </h1>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("akinoluwatimilehin1@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#top">
            OA.
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Support</a>
          </div>
        </nav>
      </header>

      <section id="top" className="hero container">
        <div className="hero-ambient-glow" aria-hidden="true" />

        <div className="eyebrow hero-fade-in-1">
          <span className="status-indicator">
            <span className="status-dot" />
            <span className="status-ping" />
          </span>
          <span>Android Developer · Lagos, Nigeria</span>
        </div>

        <TypewriterHeading />

        <p className="hero-copy hero-fade-in-2">
          I’m Oluwatimilehin Akingbade, a software developer with 4+ years of
          experience across Android, frontend engineering and product design —
          focused on Kotlin, Jetpack Compose and high-quality digital products.
        </p>

        <div className="hero-actions hero-fade-in-3">
          <a className="btn primary" href="#projects">
            <span>View my work</span>
            <svg
              className="btn-arrow"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
          <a
            className="btn secondary"
            href="/Akingbade_Oluwatimilehin_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View résumé</span>
            <svg
              className="btn-arrow"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>

        <div className="socials hero-fade-in-4">
          <a
            href="https://linkedin.com/in/akingbade-oluwatimilehin"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <span>LinkedIn</span>
            <span className="arrow">↗</span>
          </a>
          <a
            href={GMAIL_COMPOSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="Compose and send a Gmail to akinoluwatimilehin1@gmail.com"
          >
            <svg
              className="social-icon"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span>Gmail</span>
            <span className="arrow">↗</span>
          </a>
          <a
            href={MAILTO_URL}
            className="social-link"
            title="Contact Support / Open mail application"
          >
            <span>Contact Support</span>
            <span className="arrow">↗</span>
          </a>
        </div>
      </section>

      <section id="about" className="section container two-col scroll-reveal">
        <div>
          <p className="section-label">01 · About</p>
          <h2>Engineering with product thinking.</h2>
        </div>
        <div className="about-copy">
          <p>
            I specialize in Android development with Kotlin, Jetpack Compose and
            the Android SDK, while bringing a strong UI/UX and frontend
            background to every product I build.
          </p>
          <p>
            My work spans fintech mobile experiences, responsive web
            applications, API integration, debugging, performance optimization
            and cross-functional product delivery.
          </p>
        </div>
      </section>

      <section className="section skills-section scroll-reveal">
        <div className="container">
          <p className="section-label">Core stack</p>
          <div className="skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section container scroll-reveal">
        <p className="section-label">02 · Experience</p>
        <div className="section-head">
          <h2>Experience that ships.</h2>
          <p>
            Android-first, with strong frontend and product design foundations.
          </p>
        </div>
        <div className="timeline">
          {experiences.map((item) => (
            <article
              className="timeline-item"
              key={`${item.company}-${item.period}`}
            >
              <div className="timeline-meta">
                <span>{item.period}</span>
              </div>
              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section project-section scroll-reveal">
        <div className="container">
          <p className="section-label">03 · Selected work</p>
          <div className="section-head">
            <h2>Products I’ve worked on.</h2>
            <p>Selected Android, web and product-design work.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section container contact scroll-reveal">
        <p className="section-label">04 · Contact & Support</p>
        <h2>Have an Android role or product to build?</h2>
        <p className="contact-desc">
          I’m open to Android engineering opportunities, contract roles, and
          technical support. Reach out directly via Gmail or contact support.
        </p>

        <div className="contact-actions">
          <a
            className="btn primary"
            href={GMAIL_COMPOSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Compose a message to akinoluwatimilehin1@gmail.com in Gmail"
          >
            <svg
              className="btn-icon"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span>Send a Gmail</span>
            <span className="arrow">↗</span>
          </a>
          <a
            className="btn secondary"
            href={MAILTO_URL}
            title="Send an email using your default mail app"
          >
            <span>Contact Support (Mailto)</span>
            <span className="arrow">↗</span>
          </a>
        </div>

        <div className="email-card">
          <span className="email-address">akinoluwatimilehin1@gmail.com</span>
          <button
            type="button"
            onClick={handleCopyEmail}
            className={`copy-btn ${copied ? "copied" : ""}`}
            title="Copy email address to clipboard"
          >
            {copied ? (
              <>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <span>© 2026 Oluwatimilehin Akingbade</span>
          <span>Android Developer · Kotlin · Jetpack Compose</span>
        </div>
      </footer>
    </main>
  );
}
