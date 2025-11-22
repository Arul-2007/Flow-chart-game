import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-card">
        <p>If you’d like to get in touch, feel free to send a message.</p>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>

          <textarea placeholder="Write your message..." required></textarea>

          <button type="submit" className="contact-btn">Send Message</button>
        </form>

        <div className="contact-socials">
          <a href="mailto:yourmail@gmail.com">Email</a>
          <a href="https://github.com/">GitHub</a>
          <a href="https://linkedin.com/">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
