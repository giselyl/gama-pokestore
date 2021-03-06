import React from "react";
import Mainview from "./mainview";
import Header from "./header";
import Footer from "./footer";
import "./style/style.css";

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 0, searchName: "" };
  }

  previousPage = () =>
    this.setState({
      page: this.state.page - 1,
      searchName: "",
    });

  nextPage = () =>
    this.setState({
      page: this.state.page + 1,
      searchName: "",
    });

  findByName = (searchName) => {
    this.setState({
      searchName,
      page: -1,
    });
  };
  render() {
    return (
      <>
        <Header findByName={this.findByName} />
        <Mainview offset={this.state.page * 21} name={this.state.searchName} />

        <div className="row">
          <div className="col-md-8" style={{ textAlign: "center" }}>
            {this.state.page <= 0 ? (
              ""
            ) : (
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg next-previous"
                onClick={this.previousPage}
              >
                {"<<"}
              </button>
            )}

            {this.state.page === 45 ? (
              ""
            ) : (
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg next-previous"
                onClick={this.nextPage}
              >
                {">>"}
              </button>
            )}
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
