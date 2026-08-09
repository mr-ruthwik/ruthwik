import Icon from "./Icon";
import FadeIn from "./FadeIn";
import { certificates } from "../data/portfolioData";

export default function Certificates() {
  return (
    <section className="section certs-section" id="certificates">
      <div className="container">
        <h2 className="section-title">
          Certifi<span className="accent">cates</span>
        </h2>

        <div className="certs-grid">
          {certificates.map((cert, i) => (
            <FadeIn as="div" key={cert.name} className="cert-card" delay={(i % 4) * 80}>
              <div className="cert-icon">
                <Icon name={cert.icon} />
              </div>
              <p className="cert-name">{cert.name}</p>
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-view-btn">
                View Certificate <Icon name="external-link" />
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
