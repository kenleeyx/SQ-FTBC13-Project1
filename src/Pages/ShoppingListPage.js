import React from "react";
import "../App.css";

import FoodCardAdded from "../Components/FoodCardAdded/FoodCardAdded.js";

export default class ShoppingListPage extends React.Component {
  constructor(props) {
    super(props);
  }

  addedFruitsMenu = this.props.addedItems.map((fruit) => {
    return (
      <FoodCardAdded
        fruitName={fruit[0]}
        fruitIndex={fruit[1]}
        fruitVisual={fruit[2]}
        fruitFeel={fruit[3]}
      />
    );
  });

  render() {
    console.log(this.props.addedItems);
    return (
      <>
        <div id="catalogWrapper">
          {this.addedFruitsMenu}
          {/* {this.props.searchMode === "SORTED" && this.fullFruitsMenuSorted} */}
        </div>
      </>
    );
  }
}
