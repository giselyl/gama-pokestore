import React from "react";
import axios from "axios";

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: undefined };
  }

  fetchData = async (name) =>
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      this.setState({
        pokemon: res.data,
      });
    });

  async componentWillReceiveProps(props) {
    await this.fetchData(props.name);
  }

  async componentDidMount() {
    await this.fetchData(this.props.name);
  }

  addToCart = () => this.props.callBack(this.state.pokemon);

  render() {
    return (
      <div>
        <div className='container-fluid card'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='row'>
                <div className='col-md-12' id='pokemon-name'>
                  <h3>{this.state.pokemon?.name}</h3>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12 pokemon-image'>
                  <img
                    alt='pokemon'
                    className='pokemon-image'
                    src={this.state.pokemon?.sprites.front_default}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='row'>
                    <div className='col-md-6' id='pokemon-detailes'>
                      <h5>Detalhes do pokemon</h5>
                      <ul>
                        {this.state.pokemon?.types.map((it, index) => (
                          <li key={index}>{it.type.name}</li>
                        ))}
                      </ul>
                    </div>
                    <div className='col-md-6' id='total-price'>
                      <h3>Total: R$</h3>
                      <button type='button' onClick={this.addToCart}>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
