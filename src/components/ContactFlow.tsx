import { contact } from "../data/portfolio";

export function ContactFlow() {
  return (
    <section className="contact-flow" id="contact">
      <div className="contact-line" aria-hidden="true" />
      <div className="contact-node" aria-hidden="true" />
      <p className="section-label">Contact</p>
      <h2>{contact.title}</h2>
      <p>{contact.description}</p>
      <div className="contact-links">
        {contact.links.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
