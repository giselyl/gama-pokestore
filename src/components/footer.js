import React from "react";
import hiringCodersLogo from "../assets/logo-hiring-coders.svg";
import vtexLogo from "../assets/logo-vtex.svg";
import gamaAcademyLogo from "../assets/logo-gama.png";

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
          <div className="col-md-12">
            <p> Copyright © 2020 | Gisely Lacerda</p>
          </div>
          <div className="col-md-12 logos">
            <div className="companyLogo">
              <a
                href="https://hiringcoders.gama.academy/"
                title="hiringCoders"
                target="_blank"
              >
                <img src={hiringCodersLogo} />
              </a>
            </div>
            <div className="companyLogo">
              <a href="https://www.vtex.com" title="Vtex" target="_blank">
                <img src={vtexLogo} />
              </a>
            </div>
            <div className="companyLogo">
              <a
                href="https://gama.academy/"
                title="GamaAcademy"
                target="_blank"
              >
                <img src={gamaAcademyLogo} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
