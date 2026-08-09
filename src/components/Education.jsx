import Icon from "./Icon";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <h2 className="section-title">
          Edu<span className="accent">cation</span>
        </h2>

        <div className="education-timeline">
          {education.map((edu) => (
            <div className="edu-card" key={edu.degree}>
              <div className="edu-icon">
                <Icon name={edu.icon} />
              </div>
              <div className="edu-body">
                <div className="edu-top">
                  <div>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <p className="edu-institute">{edu.institute}</p>
                  </div>
                  <span className="edu-year">{edu.year}</span>
                </div>
                <div className="edu-tags">
                  {edu.tags.map((tag, i) => (
                    <span className="etag" key={tag}>
                      {i === 1 && <Icon name="map-pin" />}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
