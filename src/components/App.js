import React from "react";
import GnomeList from "./GnomeList";
import SearchBar from "./SearchBar";

const pageSize = 12;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
      amountDisplayed: pageSize
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json.Brastlewark
        });
      });
  }

  render() {
    const { isLoaded, items } = this.state;
    const shownItems = items.slice(0, this.state.amountDisplayed);

    // if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <GnomeList items={this.state.items} />
      </div>
    );
  }
}

// onSearchSubmit = async term => {
//   const response = await unsplash.get("https://api.unsplash.com/search/photos", {
//     params: { query: term }
//   });

//   this.setState({ images: response.data.results });
// };

// render() {
//   return (
//     <div className="ui container" style={{ marginTop: "10px" }}>
//       <SearchBar onSubmit={this.onSearchSubmit} />
//       <ImageList images={this.state.images} />
//     </div>
//   );
// }

export default App;
