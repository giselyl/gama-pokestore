import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokeName: "" };
  }
  catchInput = () => {
    this.props.findByName(this.state.pokeName);
  };
  handleChange = (event) => {
    this.setState({ pokeName: event.target.value });
  };

  render() {
    return (
      <>
        <div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-5">
                    <img
                      id="img-header"
                      alt="Bootstrap Preview"
                      src="https://fontmeme.com/permalink/200705/7a056be391bb285b143144a2a8b5a339.png"
                    />
                  </div>
                  <div className="col-md-7 search">
                    <input
                      className="form-control input"
                      type="search"
                      placeholder="Pokemon name"
                      aria-label="Search"
                      onChange={this.handleChange}
                      onSubmit={this.catchInput}
                    />
                    <button
                      className="btn btn-dark btn-input"
                      type="submit"
                      onClick={this.catchInput}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
