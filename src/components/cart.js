import React from "react";
import SimpleModal from "./modal";
import trashIcon from "../assets/delete-24px.svg";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  async componentWillReceiveProps(props) {
    if (props?.poke !== this.props?.poke) {
      if (this.state.list.find((it) => it.poke.name === props.poke.name))
        return;

      this.setState({
        list: [...this.state.list, { poke: props.poke }],
      });
    }
  }
  cleanCart = () => {
    this.setState({ list: [] });
  };

  remove = (obj) => {
    const val = this.state.list.find((it) => it.poke.name === obj.poke.name);
    let aux = this.state.list;
    aux.splice(aux.indexOf(val), 1);

    this.setState({
      list: aux,
    });
  };

  calculateprice = (poke) => (count) => {
    count = count.target.value;
    const cachedPokemon = localStorage.getItem(`pokemon_${poke.poke.name}`);
    const pokemon = JSON.parse(cachedPokemon);
    const indice = this.state.list.indexOf(poke);
    const newPoke = {
      poke: {
        ...pokemon,
        price: count * pokemon.price,
        count: count,
      },
    };

    let lista = this.state.list;
    lista.splice(indice, 1, newPoke);

    this.setState({
      list: lista,
    });
  };

  calcTotal = () => {
    let total = 0;
    if (this.state.list.length !== 0)
      this.state.list.forEach((element) => {
        total += element.poke.price;
      });
    return total;
  };

  render() {
    return (
      <>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <div className="sticky-top">
          <div className="container-fluid cart">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12 carrinho">
                    <h3>Carrinho</h3>
                  </div>
                </div>
                {this.state.list
                  ?.filter((item) => item?.poke.image ?? false)
                  .map((it, index) => (
                    <div
                      className="row space-between-items"
                      key={`div_${index}`}
                    >
                      <div key={`img_${index}`} className="col-md-4 carrinho">
                        <img
                          alt="Bootstrap Preview"
                          className="pokemon-cart-image"
                          // src={it.poke.image}
                          src={`https://pokeres.bastionbot.org/images/pokemon/${it.poke.id}.png`}
                        />
                      </div>
                      {/* <div
                        className={`col-md-4 pokemon-name`}
                        style={{ textAlign: "center" }}>
                        <h3>{it.poke.name}</h3>
                      </div> */}
                      <div className="col-md-3">
                        <div className="row quantifica-pokemons">
                          {/* <div className="col-md-12"> */}
                          <input
                            className="form-control cont-pokemons-input"
                            type="number"
                            aria-label="Search"
                            defaultValue={it.poke.count}
                            min="1"
                            onChange={this.calculateprice(it)}
                          />
                          {/* <CounterInput
                            value={it.poke.count}
                            min={1}
                            max={1000}
                            glyphPlus={{
                              glyph: "fa fa-plus",
                              position: "left",
                            }}
                            glyphMinus={{
                              glyph: "fa fa-minus",
                              position: "right",
                            }}
                            onChange={this.calculateprice(it)}
                          /> */}
                          {/* </div> */}
                        </div>
                      </div>
                      <div key={`price_${index}`} className={`col-md-2 price`}>
                        <div className="row">
                          <h5 className={`poke-price`}>
                            R$ {it.poke.price ?? 0}
                          </h5>
                        </div>
                      </div>
                      <div
                        className="col-md-3 trahs"
                        key={`remove_${index}`}
                        style={{ textAlign: "center" }}
                      >
                        <button
                          type="button"
                          className="remove-pokemon"
                          onClick={() => this.remove(it)}
                        >
                          <img alt="trash" src={trashIcon} />
                        </button>
                      </div>
                    </div>
                  ))}
                <div className="row">
                  <div className="col-md-6 total">
                    <h3>Total</h3>
                  </div>
                  <div className="col-md-6 price">
                    <h3>R$ {this.calcTotal()}</h3>
                  </div>
                </div>
                <div className="row btn-finalizar-row">
                  <div className="col-md-12 btn-finalizar-row">
                    <SimpleModal clear={this.cleanCart} />
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
