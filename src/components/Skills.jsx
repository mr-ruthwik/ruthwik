import Icon from "./Icon";
import FadeIn from "./FadeIn";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">
          Technical <span className="accent">Skills</span>
        </h2>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <FadeIn
              as="div"
              key={skill.title}
              className="skill-category"
              delay={(i % 4) * 80}
            >
              <h3 className="skill-cat-title">
                <span className="cat-icon">
                  <Icon name={skill.icon} />
                </span>
                {skill.title}
              </h3>
              <div className="skill-tags">
                {skill.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
