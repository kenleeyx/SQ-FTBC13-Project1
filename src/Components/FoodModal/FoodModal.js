/* eslint-disable no-useless-constructor */
import React from "react";
import "./FruitModal.css";

export default class FoodModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={
          this.props.toggleModalState
            ? `modalWindow modalWindowActive`
            : `modalWindow `
        }
      >
        <div className="modalText">
          This is a {this.props.fruitName} modal.
          <br />
          <br /> <button onClick={this.props.toggleModalAction}>Close</button>
        </div>
      </div>
    );
  }
}
