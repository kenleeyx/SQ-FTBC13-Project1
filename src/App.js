import React from "react";
import "./App.css";

import LandingPage from "./Pages/LandingPage.js";
import LogInPage from "./Pages/LogInPage.js";
import CatalogPage from "./Pages/CatalogPage.js";
import NavBar from "./Components/NavBar/NavBar.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "LANDING",

      searchmode: "SORTED",
    };
  }

  toLogInPage = () => {
    this.setState({
      page: "LOG-IN",
    });
  };

  componentDidMount = () => {
    // Q: Why does it console log TWICE?
    setTimeout(() => {
      // console.log("Test")
      // this.setState({
      //   page: "LOG-IN",
      // });
      this.toLogInPage();
    }, 1500);
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

  render() {
    // const { digit } = this.state;

    const fruitListMain = [
      "apple",
      "strawberry",
      "pineapple",
      "avocado",
      "banana",
      "cherry",
    ];

    return (
      <>
        <div>
          {this.state.page !== "LANDING" && (
            <NavBar catalogButton={this.toCatalogPage} />
          )}
        </div>

        {/* {this.state.page === "LANDING" && <LandingPage />} */}
        <div className="mainScreenContainer">
          <button
            onClick={() => {
              this.changePageDummy();
            }}
          >
            CLICK ME
          </button>
          {this.state.page === "LANDING" && <LandingPage />}
          {/* {this.state.page === "LANDING" && (
            <LandingPage toLogIn={this.toLogInPage} />
          )} */}
          {this.state.page === "LOG-IN" && <LogInPage />}
          {this.state.page === "CATALOG" && (
            <CatalogPage
              fruitList={fruitListMain}
              searchMode={this.state.searchmode}
            />
          )}
        </div>
      </>
    );
  }
}

export default App;
