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

    // let { name, value } = ev.target;

    // this.setState({
    //   [name]: value,
    // });
  };

  render() {
    return (
      <>
        <div className="navbar">
          {/* changes the global state to toCatalogPage */}
          <button onClick={this.props.catalogButton}>Catalog</button>
          <form>
            {/* <label> Search: </label> */}
            <input
              id="searchbar"
              type="text"
              name="searchterm"
              value={this.state.searchterm}
              onChange={this.handleTextChange}
            />
          </form>
          <button>Saved Items</button>
          {/* <img className="logo" src=null/> */}
        </div>
      </>
    );
  }
}
