import React, { Component } from "react";
import "./GnomeCard.css";
import Modal from "react-bootstrap/Modal";

class GnomeCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.item,
      show: false
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const {
      name,
      thumbnail,
      id,
      age,
      hair_color,
      height,
      weight,
      friends,
      professions
    } = this.state.items;

    return (
      <div style={{ gridRowEnd: `span 50` }} key={id}>
        <div className="card">
          <img
            className="card-img-top"
            style={{ height: `250px`, width: `250px` }}
            alt={name}
            src={thumbnail}
          />
          <div className="card-body">
            <h5 className="card-title">
              <strong>{name}</strong>
            </h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Age: {age} | Hair Color: {hair_color}
              </li>
              <li className="list-group-item">
                Height: {Math.round(height)} | Weight: {Math.round(weight)}
              </li>
              <li className="list-group-item">
                Friends:{" "}
                <span className="badge badge-primary badge-pill frnd-color">
                  {friends.length}
                </span>{" "}
                | Professions:{" "}
                <span className="badge badge-primary badge-pill pro-color">
                  {professions.length}
                </span>{" "}
              </li>
            </ul>
            <Modal show={this.state.show} handleClose={this.hideModal}>
              <div className="card">
                <img
                  class="card-img-top"
                  style={{ height: `250px`, width: `250px` }}
                  alt={name}
                  src={thumbnail}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>{name}</strong>
                  </h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      Age: {age} | Hair Color: {hair_color}
                    </li>
                    <li class="list-group-item">
                      Height: {Math.round(height)} | Weight:{" "}
                      {Math.round(weight)}
                    </li>

                    <li class="list-group-item list-group-item-primary">
                      Friends: {friends.map((item, index) => " - " + item)}
                    </li>

                    <li class="list-group-item list-group-item-secondary">
                      Professions:{" "}
                      {professions.map((item, index) => " - " + item)}
                    </li>
                  </ul>
                </div>
              </div>

              <button
                className="btn btn-primary btn-close"
                onClick={this.hideModal}
              >
                Close
              </button>
            </Modal>
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.showModal}
            >
              open
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GnomeCard;
