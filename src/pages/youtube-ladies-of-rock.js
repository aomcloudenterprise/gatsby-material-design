
import React, { Component } from "react";
import Helmet from "react-helmet";
import YouTube-Ladies-Of-Rock from "../components/YouTube-Ladies-Of-Rock/YouTube-Ladies-Of-Rock";
import config from "../../data/SiteConfig";

class YouTube-Ladies-Of-RockPage extends Component {
  render() {
    return (
      <div className="YouTube-Ladies-Of-Rock-container">
        <Helmet>
          <title>{`YouTube-Ladies-Of-Rock | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/YouTube-Ladies-Of-Rock/`} />
        </Helmet>
        <YouTube-Ladies-Of-Rock />
      </div>
    );
  }
}

export default YouTube-Ladies-Of-RockPage;
