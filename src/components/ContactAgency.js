import React from 'react'

const ContactAgency = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form name="contact-agency" id="contact-agency" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field" >
                    <input type="hidden" name="bot-field" />
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" required/>
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required/>
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" form="contact-agency" rows="6" placeholder="Describe your product... or we could email about it."></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
        </div>
    </section>
)

export default ContactAgency
