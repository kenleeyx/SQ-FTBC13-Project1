import React from "react";
import "./App.css";

import FRUITDATA from "./fruitdata.json";

import LandingPage from "./Pages/LandingPage";
import LogInPage from "./Pages/LogInPage.js";
import CatalogPage from "./Pages/CatalogPage.js";
import ShoppingListPage from "./Pages/ShoppingListPage.js";

import NavBar from "./Components/NavBar/NavBar.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "LOG-IN",
      searchmode: "SORTED",

      shoppinglist: [],
    };
  }

  toLogInPage = () => {
    // Can do a transition here
    this.setState({
      page: "LOG-IN",
    });
  };

  componentDidMount = () => {
    // Q: Why does it console log TWICE?
    // setTimeout(() => {
    //   // console.log("Test")
    //   this.setState({
    //     page: "LOG-IN",
    //   });
    //   this.toLogInPage();
    // }, 3000);
  };

  componentDidUpdate = () => {
    // console.log("UPDATED", this.state.shoppinglist);
    // this.shoppingListItems(this.state.shoppinglist);
  };

  changePageDummy = () => {
    if (this.state.page === "CATALOG") {
      this.setState({
        page: "LOG-IN",
      });
    } else {
      this.setState({
        page: "CATALOG",
      });
    }
  };

  toCatalogPage = () => {
    this.setState({
      page: "CATALOG",
    });
  };

  toShoppingListPage = () => {
    this.setState({
      page: "SHOPPINGLIST",
    });
  };

  addToShoppingList = (fruit) => {
    console.log("toShoppingList passing down: ", fruit);
    let checkList = this.state.shoppinglist;

    if (checkList.includes(fruit)) {
      // Possibility of adding a popup if already added? or change the button
      console.log("already the shopping list!");
    } else {
      this.setState(
        {
          shoppinglist: [...this.state.shoppinglist, fruit],
        },
        () => {
          console.log("addToShoppingList state: ", this.state.shoppinglist);
        }
      );
    }
  };

  shoppingListItems = (indexes) => {
    // console.log("the indexes are: ", indexes);
    // let importedList = [];
    let exportedList = [];

    // Directly access this.state.shoppinglist for the order of items added.
    for (let index of this.state.shoppinglist) {
      let temp = [];

      temp.push(FRUITDATA[index].id);
      temp.push(index);
      temp.push(FRUITDATA[index].visual);
      temp.push(FRUITDATA[index].feel);

      exportedList.push(temp);
    }

    return exportedList;
    // const shoppingList = FRUITDATA.map((fruit, index) => [
    //   fruit.id,
    //   index,
    //   fruit.visual,
    //   fruit.feel,
    // ]);
    // return shoppingList;
  };

  render() {
    // const fruitListMain = [];

    // const fruitListMain = FRUITDATA.map((fruit) => {
    //   return fruit.id;
    // });

    const fruitListMain = FRUITDATA.map((fruit, index) => {
      return [fruit.id, index, fruit.visual, fruit.feel];
    });

    // const fruitListShoppingList = console.log(this.shoppingListItems);

    // const fruitIndexMain = FRUITDATA.map((fruit, index) => {
    //   return index;
    // });

    // const fruitVisualMain = FRUITDATA.map((fruit) => {
    //   return fruit.visual;
    // });

    // const fruitFeelMain = FRUITDATA.map((fruit) => {
    //   return fruit.feel;
    // });

    // const fruitData = FRUITDATA.map((fruit) => {
    //   console.log(fruit);
    //   return fruit;
    // });

    // const { fruitListMain fruitIndexMain fruitVisualMain fruitFeelMain } =

    // const fruitListMain = [
    //   "apple",
    //   "strawberry",
    //   "pineapple",
    //   "avocado",
    //   "banana",
    //   "cherry",
    //   "peach",
    //   "mango",
    // ];

    return (
      <>
        <div>
          {(this.state.page === "CATALOG" ||
            this.state.page === "SHOPPINGLIST") && (
            <NavBar
              catalogButton={this.toCatalogPage}
              shoppinglistButton={this.toShoppingListPage}
              currState={this.state.page}
            />
          )}
        </div>

        {/* {this.state.page === "LANDING" && <LandingPage />} */}
        <div className="mainScreenContainer">
          {/* Dummy Button */}
          {/* <button
            onClick={() => {
              this.changePageDummy();
            }}
          >
            CLICK ME
          </button> */}
          {this.state.page === "LANDING" && <LandingPage />}

          {this.state.page === "LOG-IN" && (
            <LogInPage catalogButton={this.toCatalogPage} />
          )}

          {this.state.page === "SHOPPINGLIST" && (
            <ShoppingListPage
              addedItems={this.shoppingListItems(this.state.shoppinglist)}
            />
          )}

          {this.state.page === "CATALOG" && (
            <CatalogPage
              fruitList={fruitListMain}
              searchMode={this.state.searchmode}
              addItemToList={this.addToShoppingList}
            />
          )}
        </div>
      </>
    );
  }
}

export default App;
