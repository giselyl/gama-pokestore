import React from "react";
import Cards from "./cards";
import Cart from "./cart";
import axios from "axios";
import pokeFont from "../assets/pokemon/Pokemon Solid.ttf";

export default class Mainview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: undefined, cart: undefined };
  }

  fetchData = async (name, offset) => {
    if (name) {
      this.setState({
        list: {
          results: [{ name }],
        },
      });
    } else {
      axios
        .get(
          `https://pokeapi.co/api/v2/pokemon/${
            name ?? ""
          }?offset=${offset}&limit=21`
        )
        .then((res) => {
          this.setState({
            list: res.data,
          });
        });
    }
  };

  async componentWillReceiveProps(props) {
    if (props !== this.props) await this.fetchData(props.name, props.offset);
  }

  async componentDidMount() {
    await this.fetchData(this.props.name, this.props.offset);
  }

  addToCart = (pokemon) => {
    let poke = JSON.parse(localStorage.getItem(`pokemon_${pokemon.name}`));
    poke.count = (poke.count ?? 0) + 1;
    localStorage.setItem(`pokemon_${pokemon.name}`, JSON.stringify(poke));

    this.setState({
      ...this.state,
      cart: poke,
    });
  };

  render() {
    return (
      <>
        <div>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous"
          />
          <link href={pokeFont} rel="stylesheet" />

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  {this.state.list?.results.map((it, index) => (
                    <div
                      key={index}
                      className="col-md-4"
                      style={{ textTransform: "capitalize" }}
                    >
                      <Cards name={it.name} callBack={this.addToCart} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-4">
                <Cart poke={this.state.cart} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
