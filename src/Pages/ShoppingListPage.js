import React from "react";
import "../App.css";

import FoodCardAdded from "../Components/FoodCardAdded/FoodCardAdded.js";

export default class ShoppingListPage extends React.Component {
  constructor(props) {
    super(props);
  }

  addedFruitsMenu = this.props.addedItems.map((fruit) => {
    console.log("SHOPPINGLIST CHECK: ", fruit[0]);
    console.log("localStorage CHECK: ", localStorage.getItem(fruit[0]));

    if (localStorage.getItem(fruit[0]) == true) {
      console.log("entered loop for: ", fruit[0]);
      return (
        <FoodCardAdded
          fruitName={fruit[0]}
          fruitIndex={fruit[1]}
          fruitVisual={fruit[2]}
          fruitFeel={fruit[3]}
        />
      );
    } else {
      return null;
    }
  });

  // addedFruitsMenu = this.props.addedItems.map((fruit) => {
  //   return (
  //     <FoodCardAdded
  //       fruitName={fruit[0]}
  //       fruitIndex={fruit[1]}
  //       fruitVisual={fruit[2]}
  //       fruitFeel={fruit[3]}
  //     />
  //   );
  // });

  render() {
    // console.log(this.props.addedItems);
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
