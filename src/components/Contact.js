import React from 'react';

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <form
          name="contact-ms"
          id="contact-ms"
          method="POST"
          action="/success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              form="contact-ms"
              rows="6"
              placeholder="Describe your product... or we could email about it."
            />
          </div>
          <ul className="actions">
            <li>
              <input
                type="submit"
                value="Send Message"
                form="contact-ms"
                className="special"
              />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope" />
            <h3>Email</h3>
            <a href="#">info[@]measuredstudios[.]com</a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-slack" />
            <h3>Slack</h3>
            <span>measuredstudios.slack.com</span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home" />
            <h3>Address</h3>
            <span>St Cloud, Florida</span>
          </div>
        </section>
      </section>
    </div>
  </section>
);

export default Contact;
