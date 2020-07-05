import React from "react";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [], total: 0 };
  }

  async componentWillReceiveProps(props) {
    this.setState({
      list: [...this.state.list, props.poke],
      total: this.state.total + (props?.poke?.price ?? 0),
    });
  }

  remove = (obj) => {
    let aux = this.state.list;
    aux.splice(aux.indexOf(obj), 1);

    this.setState({
      list: aux,
      total: this.state.total - (obj?.price ?? 0),
    });
  };

  render() {
    return (
      <div>
        <div className='container-fluid cart'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='row'>
                <div className='col-md-12 carrinho'>
                  <h3>Carrinho</h3>
                </div>
              </div>
              {this.state.list
                ?.filter((item) => item?.sprites?.front_default ?? false)
                .map((it, index) => (
                  <div className='row' key={`div_${index}`}>
                    <div key={`img_${index}`} className='col-md-4'>
                      <img
                        alt='Bootstrap Preview'
                        className='pokemon-cart-image'
                        src={it.sprites.front_default}
                      />
                    </div>
                    {/* <div
                        className={`col-md-4 pokemon-name`}
                        style={{ textAlign: "center" }}>
                        <h3>{it.name}</h3>
                      </div> */}

                    <div key={`price_${index}`} className={`col-md-4 price`}>
                      <h3>R$ {it.price ?? 0}</h3>
                    </div>
                    <div
                      key={`remove_${index}`}
                      className={`col-md-4 pokemon-name`}
                      style={{ textAlign: "center" }}>
                      <button type='button' onClick={() => this.remove(it)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              <div className='row'>
                <div className='col-md-6 total'>
                  <h3>Total</h3>
                </div>
                <div className='col-md-6 price'>
                  <h3>R$ {this.state.total.toFixed(2)}</h3>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <button
                    type='button'
                    className='btn btn-outline-secondary btn-lg btn-block finalizar'>
                    Finalizar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
