import React, { Component } from "react";
import "./GnomeCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

class GnomeCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.item
    };
  }

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
    console.log(this.state.items);

    // age, hair-color, height, weight
    // friends, professions (Arrays)

    return (
      <div style={{ gridRowEnd: `span 50` }} key={id}>
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
                Height: {Math.round(height)} | Weight: {Math.round(weight)}
              </li>
              <li class="list-group-item">
                Friends: {friends.length} | Professions: {professions.length}
              </li>
            </ul>
            <a href="#" className="btn btn-primary">
              Open
            </a>
          </div>
        </div>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default GnomeCard;
