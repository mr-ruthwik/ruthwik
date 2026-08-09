import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import DownloadButton from "./DownloadButton";
import { typewriterPhrases, resume, socials } from "../data/portfolioData";

export default function Hero() {
  const [text, setText] = useState("");
  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  // Typewriter effect - mirrors typeWrite() from the original script.js
  useEffect(() => {
    let timeoutId;

    function tick() {
      const currentPhrase = typewriterPhrases[phraseIndex.current];

      charIndex.current += isDeleting.current ? -1 : 1;
      setText(currentPhrase.substring(0, charIndex.current));

      let speed = isDeleting.current ? 50 : 80;

      if (!isDeleting.current && charIndex.current === currentPhrase.length) {
        speed = 1800;
        isDeleting.current = true;
      } else if (isDeleting.current && charIndex.current === 0) {
        isDeleting.current = false;
        phraseIndex.current = (phraseIndex.current + 1) % typewriterPhrases.length;
        speed = 400;
      }

      timeoutId = setTimeout(tick, speed);
    }

    tick();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="grid-overlay"></div>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-name">
          <span className="name-line animate-up delay-1">Sai Ruthwik</span>
          <span className="name-line name-gradient animate-up delay-2">Madarapu</span>
        </h1>

        <p className="hero-tagline animate-up delay-3">
          I build <span className="typewriter">{text}</span>
          <span className="cursor">|</span>
        </p>

        <div className="hero-resume animate-up delay-4">
          <DownloadButton
            url={resume.url}
            filename={resume.filename}
            label="Download Resume"
            className="btn btn-resume"
          />
        </div>

        <div className="hero-socials animate-up delay-5">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="social-link"
            >
              <Icon name={s.icon} />
              <span className="social-name">{s.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
