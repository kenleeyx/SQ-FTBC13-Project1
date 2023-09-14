import React from "react";
import "../../App.css";

import FoodModal from "../FoodModal/FoodModal.js";

export default class FoodCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false,
    };
  }

  //Function for Child: To toggle the pop-up modal window
  openModal = () => {
    this.setState({
      modalState: !this.state.modalState,
    });
  };

  render() {
    return (
      <>
        {/* Child Component */}
        <FoodModal
          toggleModalState={this.state.modalState}
          toggleModalAction={this.openModal}
          fruitName={this.props.fruitName}
        />

        {/*Q  why cant i apply the onClick at the parent, if i used map? */}
        <div className="foodCard" onClick={this.openModal}>
          {/* {this.state.modalState.toString()} */}
          {/* <button onClick={this.openModal}>{this.props.fruitName}</button> */}
          This is a {this.props.fruitName} food card
        </div>
      </>
    );
  }
}
