import React from "react";
import Modal from "@material-ui/core/Modal";
import gif from "../assets/giphy.gif";

export default class SimpleModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.clear();
  };

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={this.handleOpen}
          className="btn btn-outline-secondary btn-lg btn-block finalizar "
        >
          Finalizar
        </button>

        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div id="modal-card">
            {/* <img id="sucess-gif" src={gif} alt="sucess gif" /> */}
            <h4 id="simple-modal-title">Compra finalizada com sucesso !</h4>
            <button
              type="button"
              onClick={this.handleClose}
              className="btn btn-outline-secondary btn-lg  fechar "
            >
              Fechar
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}
