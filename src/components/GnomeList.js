import React from "react";
import GnomeCard from "./GnomeCard";

class GnomeList extends React.Component {
  constructor() {
    super();

    this.state = {
      amountDisplayed: 12
    };

    this.onLoadMore = this.onLoadMore.bind(this);
  }

  onLoadMore() {
    this.setState({
      amountDisplayed: this.state.amountDisplayed + 12
    });
  }

  render(props) {
    const shownGnomes = this.props.items.slice(0, this.state.amountDisplayed);
    const showLoadButton = this.props.showLoadButton;
    console.log(showLoadButton);
    const gnomes = shownGnomes.map(item => {
      return <GnomeCard key={item.id} item={item} />;
    });

    return (
      <div>
        <div className="image-list" key="">
          {gnomes}
        </div>

        {showLoadButton ? (
          <button onClick={this.onLoadMore}>Load More</button>
        ) : null}
      </div>
    );
  }
}

export default GnomeList;
