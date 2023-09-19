import React from "react";
import "../App.css";

import FoodCard from "../Components/FoodCard/FoodCard.js";

export default class ShoppingListPage extends React.Component {
  constructor(props) {
    super(props);
  }

  // fullFruitsMenuSorted = this.props.fruitList
  //   .sort()
  //   .map((fruit) => <FoodCard fruitName={fruit} />);

  // addedFruits = this.props.addedFruits;

  // Get the index from App.js

  // Output the Card

  render() {
    console.log(this.props.addedItems);
    return (
      <>
        <div id="catalogWrapper">
          {/* {this.props.searchMode === "SORTED" && this.fullFruitsMenuSorted} */}
        </div>
      </>
    );
  }
}
