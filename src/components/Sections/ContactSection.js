import React from 'react';

export class ContactSection extends React.Component {
    render = () => (
        <div className="contact-section__main">
            <p>Você pode me achar no LinkedIn ou via email:</p>
            <address>
                <strong>LinkedIn</strong> <br />
                <a href="https://www.linkedin.com/in/filipe-alexandre-groh-889b1b98/">Filipe Groh</a>
            </address>
            <address>
                <strong>Filipe Alexandre Groh</strong><br />
                <a href="mailto:#">filipegroh@gmail.com</a>
            </address>
            <address>
                <strong>Steam</strong> <br />
                <a href="http://steamcommunity.com/id/filipegroh/">Cass</a>
            </address>
        </div>
    )
}