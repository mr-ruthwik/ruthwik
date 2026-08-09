import Icon from "./Icon";
import FadeIn from "./FadeIn";
import { aboutStats, aboutInfo } from "../data/portfolioData";

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <h2 className="section-title">
          About <span className="accent">Me</span>
        </h2>

        <div className="about-grid">
          <FadeIn as="div" className="about-text" delay={0}>
            <p>
              I'm a <strong>B.Tech </strong> graduate from Andhra Loyola Institute of Engineering
              and Technology (JNTUK), passionate about creating responsive, user-friendly web
              applications.
            </p>
            <p>
              My journey is across{" "}
              <strong>Frontend development, API integrations and full-stack projects</strong>. I
              enjoy turning ideas into live websites.
            </p>

            <FadeIn as="div" className="about-stats" delay={80}>
              {aboutStats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </FadeIn>
          </FadeIn>

          <FadeIn as="div" className="about-card" delay={160}>
            <div className="info-list">
              {aboutInfo.map((item) => (
                <div className="info-item" key={item.label}>
                  <span className="info-icon">
                    <Icon name={item.icon} />
                  </span>
                  <div>
                    <p className="info-label">{item.label}</p>
                    <p className={`info-value${item.highlight ? " available" : ""}`}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
