import Icon from "./Icon";
import FadeIn from "./FadeIn";
import { WhatsAppIcon } from "./icons/CustomIcons";
import { contactLinks, whatsappLink } from "../data/portfolioData";

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">
          Get In <span className="accent">Touch</span>
        </h2>

        <div className="contact-grid">
          <div className="contact-links">
            {contactLinks.map((link, i) => {
              const isExternal = link.href.startsWith("http");
              return (
                <FadeIn
                  as="a"
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="contact-item"
                  delay={(i % 4) * 80}
                >
                  <div className="contact-item-icon">
                    <Icon name={link.icon} />
                  </div>
                  <div>
                    <p className="contact-item-label">{link.label}</p>
                    <p className="contact-item-value">{link.value}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn as="div" className="contact-cta-box" delay={0}>
            <div className="cta-box-icon">
              <Icon name="user-check" />
            </div>
            <h3>Ready to hire me?</h3>
            <p>
              I'm actively looking for entry-level Software Developer roles where I can contribute
              and grow.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <WhatsAppIcon width="18" height="18" />
              WhatsApp Me
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
