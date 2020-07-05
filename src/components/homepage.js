import React from "react";
import Mainview from "./mainview";
import Header from "./header";
import Footer from "./footer";
import "./style/style.css";

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 0 };
  }

  previousPage = () =>
    this.setState({
      page: this.state.page - 1,
    });

  nextPage = () =>
    this.setState({
      page: this.state.page + 1,
    });

  render() {
    return (
      <>
        <Header />
        <Mainview offset={this.state.page * 21} />

        <div className='row'>
          <div className='col-md-8' style={{ textAlign: "center" }}>
            {this.state.page === 0 ? (
              ""
            ) : (
              <button type='button' onClick={this.previousPage}>
                {"<<"} Previous
              </button>
            )}
            {` ${this.state.page} `}
            {this.state.page === 45 ? (
              ""
            ) : (
              <button type='button' onClick={this.nextPage}>
                Next {">>"}
              </button>
            )}
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
