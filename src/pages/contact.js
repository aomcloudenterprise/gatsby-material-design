import React, { Component } from "react";
import Helmet from "react-helmet";
import Contact from "../components/Contact/Contact";
import config from "../../data/SiteConfig";

class ContactPage extends Component {
  render() {
    return (
      <div className="contact-container">
        <Helmet>
          <title>{`Contact | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/contact/`} />
        </Helmet>
        <Contact />
      </div>
    );
  }
}

export default ContactPage;
