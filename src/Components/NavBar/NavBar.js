import React from "react";
import "../../App.css";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchterm: "",
    };
  }

  // note that onChange is only fired off during an event, so we definitely have an ev here
  handleTextChange = (ev) => {
    console.log(ev);

    // I don't see name and value in event
    let { name, value } = ev.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <div className="navbar">
          <div> </div>
          <form>
            {/* <label> Search: </label> */}
            <input
              id="searchbar"
              type="text"
              name="searchterm"
              value={this.state.searchterm}
              onChange={this.handleTextChange}
              autoComplete="off"
              placeholder="Search Fruits"
              className="input input-bordered input-sm input-accent w-full max-w-xs"
            />
          </form>
          {/* If this.props.state is CATALOG vs this.props.state is SHOPPINGLIST */}
          {this.props.currState === "CATALOG" && (
            <button
              onClick={this.props.shoppinglistButton}
              className="btn btn-sm btn-neutral sm:btn-sm md:btn-md lg:btn-lg"
            >
              Cart
            </button>
          )}
          {this.props.currState === "SHOPPINGLIST" && (
            <button
              onClick={this.props.catalogButton}
              className="btn btn-sm btn-neutral"
            >
              C
            </button>
          )}
          {/* <button onClick={this.props.catalogButton} value="c">
            C
          </button> */}
          {/* changes the global state to toCatalogPage */}
          {/* <button onClick={this.props.catalogButton}>C</button>
          <button>Cart</button> */}
          {/* <img className="logo" src=null/> */}
        </div>
      </>
    );
  }
}
