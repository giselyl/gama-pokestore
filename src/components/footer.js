import React from "react";
import hiringCodersLogo from "../assets/logo-hiring-coders.svg";
import vtexLogo from "../assets/logo-vtex.svg";
import gamaAcademyLogo from "../assets/logo-gama.png";
import linkedinLogo from "../assets/linkedin.svg";
import hackerRankLogo from "../assets/hackerRank.svg";
import github from "../assets/github.svg";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <link href="./header.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Changa:wght@500&display=swap"
          rel="stylesheet"
        />
        <div className="row footer">
          <div className="col-md-6 dev-data">
            <p> Copyright © 2020 | Gisely Lacerda</p>
          </div>
          <div className="col-md-6">
            <div className="col-md-12 redes">
              <a
                href="https://www.linkedin.com/in/gisely-lacerda/"
                title="linkedin"
                rel="redes"
                className="rede"
              >
                <img src={linkedinLogo} alt="Linkedin Logo" />
              </a>
              <a
                href="https://www.hackerrank.com/giselyl"
                title="hackerrank"
                rel="redes"
                className="rede"
              >
                <img src={hackerRankLogo} alt="HackerRank Logo" />
              </a>
              <a
                href="https://github.com/giselyl"
                title="github"
                rel="redes"
                className="rede"
              >
                <img src={github} alt="Github Logo" />
              </a>
            </div>
          </div>
          <div className="col-md-12 logos">
            <div className="companyLogo logo">
              <a
                href="https://hiringcoders.gama.academy/"
                title="hiringCoders"
                rel="noopener noreferrer"
              >
                <img src={hiringCodersLogo} alt="Hiring Coders Logo" />
              </a>
            </div>
            <div className="companyLogo vtex-logo">
              <a
                href="https://www.vtex.com"
                title="Vtex"
                rel="noopener noreferrer"
              >
                <img src={vtexLogo} alt="Vtex logo" />
              </a>
            </div>
            <div className="companyLogo logo">
              <a
                href="https://gama.academy/"
                title="GamaAcademy"
                rel="noopener noreferrer"
              >
                <img src={gamaAcademyLogo} alt="Gama Academy logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
