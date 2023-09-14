import React from "react";
import "../App.css";

import FoodCard from "../Components/FoodCard/FoodCard.js";

export default class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
  }

  // By default, the fruits are sorted Alphabetically
  fullFruitsMenuSorted = this.props.fruitList
    .sort()
    .map((fruit) => <FoodCard fruitName={fruit} />);

  render() {
    return (
      <>
        <div id="catalogWrapper">
          {this.props.searchMode === "SORTED" && this.fullFruitsMenuSorted}
          {/* <FoodCard fruitName={this.props.fruit} />
        <FoodCard fruitName={this.props.fruit} /> */}
        </div>
      </>
    );
  }
}
