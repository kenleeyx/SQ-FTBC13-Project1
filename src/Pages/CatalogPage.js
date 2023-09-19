import React from "react";
import "../App.css";

import FoodCard from "../Components/FoodCard/FoodCard.js";
// import FRUITDATA from "../fruitdata.json";

export default class CatalogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addedList: [],
      addedFruit: "",
    };
  }

  // By default, the fruits are sorted Alphabetically
  // fullFruitsMenuSorted = this.props.fruitList
  //   .sort()
  //   .map((fruit) => <FoodCard fruitName={fruit} />);

  // fullFruitsMenu = this.props.fruitList.map((item) => {
  //   return item[0];
  // });

  // fullFruitsIndex = this.props.fruitList.map((item) => {
  //   return item[1];
  // });

  addToAddedList = (fruit) => {
    // let updatedList = this.state.addedList.push(fruit);
    // this.setState(
    //   {
    //     addedList: [...this.state.addedList, fruit],
    //   },
    //   // The console.log here still doesnt update for some reason, even though it's within the setstate.
    //   console.log("the added list: ", this.state.addedList)
    // );

    ///////
    // this.setState(
    //   {
    //     addedFruit: fruit,
    //   },
    //   this.props.addItemToList(this.state.addedFruit)
    // );
    // console.log("passed down:", fruit);
    this.props.addItemToList(fruit);
  };

  // componentDidUpdate = () => {
  //   // This one will!
  //   console.log("component did update:", this.state.addedFruit);
  //   // this.props.addItemToList
  //   this.props.addItemToList(this.state.addedFruit);
  // };

  fullFruitsMenuSorted = this.props.fruitList.map((fruit) => {
    // console.log(fruit);
    // let fruitid = fruit[0];
    return (
      <FoodCard
        fruitName={fruit[0]}
        fruitIndex={fruit[1]}
        fruitVisual={fruit[2]}
        fruitFeel={fruit[3]}
        addItemButton={this.addToAddedList}
      />
    );
  });

  // fullFruitsMenuSorted = this.fullFruitsMenu.map((fruit) => {
  //   return <FoodCard fruitName={fruit} />;
  // });

  //Originally I sorted here. But cant make it work..
  // fullFruitsMenuSorted = this.fullFruitsMenu.sort().map((fruit) => {
  //   return <FoodCard fruitName={fruit} />;
  // });

  render() {
    return (
      <>
        <div id="catalogWrapper">
          {/* Can change the props.searchMode based on what kind of sorting I want. */}
          {/* {this.props.searchMode === "SORTED" && this.fullFruitsMenuSorted} */}
          {this.fullFruitsMenuSorted}
          {/* <FoodCard fruitName={this.props.fruit} />
        <FoodCard fruitName={this.props.fruit} /> */}
        </div>
      </>
    );
  }
}
