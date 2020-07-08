import React from "react";
import axios from "axios";

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: undefined };
  }

  fetchData = async (name) => {
    const cachedPokemon = localStorage.getItem(`pokemon_${name}`);

    if (cachedPokemon) {
      this.setState({
        pokemon: JSON.parse(cachedPokemon),
      });
    } else {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => {
          const data = res.data;

          const poke = {
            id: data.id,
            name: data.name,
            price: Math.floor(Math.random() * 100) + 2,
            image: data.sprites.front_default,
            types: [...data.types],
          };

          localStorage.setItem(`pokemon_${name}`, JSON.stringify(poke));

          this.setState({
            pokemon: poke,
          });
        })
        .catch(
          this.setState({
            pokemon: undefined,
          })
        );
    }
  };

  loadImage = () => {
    let img;
    axios
      .get(
        `https://pokeres.bastionbot.org/images/pokemon/${this.state.pokemon?.id}.png`
      )
      .then(
        (img = `https://pokeres.bastionbot.org/images/pokemon/${this.state.pokemon?.id}.png`)
      )
      .catch((img = `{this.state.pokemon?.image}`));
    return img;
  };

  async componentWillReceiveProps(props) {
    if (props?.name !== this.props?.name) await this.fetchData(props.name);
  }

  async componentDidMount() {
    await this.fetchData(this.props.name);
  }

  addToCart = () => this.props.callBack(this.state.pokemon);

  render() {
    if (this.state.pokemon === undefined) return <div></div>;

    return (
      <div id="space-between-cards">
        <div className="container-fluid card">
          <div className="row">
            <div className="col-md-12 unit-card">
              <div className="row ">
                <div className="col-md-12 " id="pokemon-name">
                  <h3>{this.state.pokemon?.name}</h3>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12 div-pokemon-image">
                  <img
                    alt="pokemon"
                    className="pokemon-image"
                    // src={this.loadImage}
                    src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.pokemon?.id}.png`}
                    // src={this.state.pokemon?.image}
                  />
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6" id="pokemon-detailes">
                      <ul id="description">
                        {this.state.pokemon?.types.map((it, index) => (
                          <li key={index}>{it.type.name}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-6" id="add-pokemon">
                      <h5>R$ {(this.state.pokemon?.price ?? 0).toFixed(2)}</h5>
                      <button
                        type="button"
                        className="btn-add btn btn-dark btn-add"
                        onClick={this.addToCart}
                      >
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
