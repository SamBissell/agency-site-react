import React from 'react';

function Contact() {
    return (
        <section id="contact" class="contact">
            <h1 class="section-title">Contact</h1>
            <div class="hero-grid">
                <p class="hero-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ex
                    recusandae illum accusantium adipisci fuga illo incidunt distinctio
                    unde maxime.
        </p>
                <div class="hero-form">
                    <form
                        action="mailto:someone@example.com"
                        method="post"
                        enctype="text/plain"
                    >
                        Name:<br />
                        <input type="text" name="name" /><br />
            E-mail:<br />
                        <input type="text" name="mail" /><br />
            Comment:<br />
                        <input type="text" name="comment" size="50" /><br /><br />
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;