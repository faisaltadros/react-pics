import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.onFieldChange = this.onFieldChange.bind(this);
  }

  onFieldChange(event) {
    this.setState({
      value: event.target.value
    });
    const fieldName = event.target.name;
    const fieldValue = this.state.value;
    this.props.onChange(fieldName, fieldValue);
  }

  render() {
    return (
      <div className="ui segment">
        <div className="input-group input-group-lg">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <img
                className="gnome-logo"
                src="https://cdn4.iconfinder.com/data/icons/gardening-planting-1/128/536_gardening-garden-gnome-512.png"
              />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={this.state.value}
            onChange={this.onFieldChange}
            placeholder="Search your favorite Gnomes here.."
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
