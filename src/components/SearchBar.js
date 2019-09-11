import React, { Component } from "react";
// import "./SearchBar.css";

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
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={this.state.value}
            onChange={this.onFieldChange}
            placeholder="Search for you favorite Gnomes here.."
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
