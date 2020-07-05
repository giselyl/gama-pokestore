import React from "react";
import pokeLogo from "../assets/pokemon-logo-5.png";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokeName: "" };
  }

  render() {
    return (
      <>
        <div>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='row'>
                  <div className='col-md-5'>
                    <img
                      id='img-header'
                      alt='Bootstrap Preview'
                      src={pokeLogo}
                    />
                  </div>
                  <div className='col-md-7 search'>
                    <input
                      className='form-control input'
                      type='search'
                      placeholder='Pokemon name'
                      aria-label='Search'
                    />
                    <button className='btn btn-dark btn-input' type='submit'>
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
