import React from "react";
import GnomeList from "./GnomeList";
import SearchBar from "./SearchBar";
import "./App.css";

const pageSize = 12;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      searchItems: [],
      isLoaded: false,
      amountDisplayed: pageSize,
      term: "",
      showLoadButton: true
    };
  }

  onChange(field, value) {
    const filteredItems = this.state.items.filter(function(str) {
      return str.name.toLowerCase().includes(value.toLowerCase());
    });

    if (this.state.searchItems.length <= 12) {
      this.setState({ showLoadButton: false });
    } else {
      this.setState({ showLoadButton: true });
      console.log(this.state.searchItems.length);
    }

    this.setState({
      term: value,
      searchItems: filteredItems
    });
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json.Brastlewark,
          searchItems: json.Brastlewark,
          isLoaded: true
        });
      });
  }

  render() {
    const {
      isLoaded,
      searchItems,
      showLoadButton,
      amountDisplayed
    } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onChange={this.onChange.bind(this)} />
          <GnomeList
            items={searchItems}
            showLoadButton={showLoadButton}
            amountDisplayed={amountDisplayed}
          />
        </div>
      );
    }
  }
}

export default App;
