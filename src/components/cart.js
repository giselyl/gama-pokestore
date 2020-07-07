import React from "react";
import SimpleModal from "./modal";
import trashIcon from "../assets/delete-24px.svg";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [], total: 0, groups: {} };
  }

  async componentWillReceiveProps(props) {
    if (props?.poke !== this.props?.poke) {
      if (this.state.list.find((it) => it.poke.name === props.poke.name))
        return;

      this.setState({
        list: [...this.state.list, { poke: props.poke, count: 1 }],
        total: this.state.total + (props?.poke?.price ?? 0),
      });
    }
  }
  cleanCart = () => {
    this.setState({ list: [], total: 0, groups: {} });
  };

  remove = (obj) => {
    const val = this.state.list.find((it) => it.poke.name === obj.poke.name);
    let aux = this.state.list;
    aux.splice(aux.indexOf(val), 1);

    this.setState({
      list: aux,
      total: this.state.total - (obj?.poke.price ?? 0),
    });
  };

  render() {
    return (
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
                  <div className="row space-between-items" key={`div_${index}`}>
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

                    <div key={`price_${index}`} className={`col-md-4 price`}>
                      <h5 className={`poke-price`}>
                        R$ {it.poke.price ?? 0} - {it.count}
                      </h5>
                    </div>
                    <div
                      key={`remove_${index}`}
                      className={`col-md-4 pokemon-name`}
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
                  <h3>R$ {this.state.total.toFixed(2)}</h3>
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
    );
  }
}
