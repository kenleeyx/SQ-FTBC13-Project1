import React from "react";
import "../../App.css";
import "./FoodCard.css";

import FoodModal from "../FoodModal/FoodModal.js";

export default class FoodCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false,

      buttonText: "ADD",
      isClicked: false,
    };
  }

  //Function for Child: To toggle the pop-up modal window
  openModal = () => {
    this.setState({
      modalState: !this.state.modalState,
    });
  };

  handleClick = () => {
    // PASS THE PROP TO PARENT
    // this.props.addItemButton(this.props.fruitIndex);

    // PASS PROP TO PARENTS: prop is: [ fruitIndex , boolean]
    this.props.addItemButton(this.props.fruitIndex);

    console.log("HANDLE", this.state.isClicked);
    this.setState(
      {
        isClicked: !this.state.isClicked,
      },
      () => {
        // console.log("changed state is: ", this.state.isClicked);
        if (this.state.isClicked === true) {
          // console.log("first branch");'
          localStorage.setItem(this.props.fruitName, this.state.isClicked);

          this.setState({
            buttonText: "ADDED!",
          });
        } else if (this.state.isClicked === false) {
          // console.log("second branch");
          localStorage.setItem(this.props.fruitName, this.state.isClicked);

          this.setState({
            buttonText: "ADD",
          });
        }
      }
    );

    // // if isclicked is true, button text ADDED
    // if (this.state.isClicked === false) {
    //   console.log("first branch");
    //   this.setState({
    //     buttonText: "type 1",
    //   });
    // } else if (this.state.isClicked === true) {
    //   console.log("second branch");
    //   this.setState({
    //     buttonText: "type 2!",
    //   });
    // }

    // if isclicked is false, button text is ADD

    console.log("FoodCard handleClick - added index: ", this.props.fruitIndex);
  };

  componentDidMount = () => {
    if (localStorage.getItem(this.props.fruitName) != null) {
      // console.log("First instance of: ", this.props.fruitName);
      console.log(
        "initalised old state of: ",
        localStorage.getItem(this.props.fruitName)
      );

      this.setState(
        {
          isClicked: localStorage.getItem(this.props.fruitName),
        },
        () => {
          console.log("the changed state is: ", this.state.isClicked);
        }
      );
    } else {
      console.log("Else branch");
    }
  };

  render() {
    // Locks the scroll for document.body if the this.state.modalState: true
    // Not sure what is classList for though.
    //Dont actually need this because the modalwindow.css has sth similar
    if (this.state.modalState === true) {
      document.body.classList.add("lockedScroll");
    } else {
      document.body.classList.remove("lockedScroll");
    }

    return (
      <>
        {/* Child Component. Pop-Up on click */}
        <FoodModal
          toggleModalState={this.state.modalState}
          toggleModalAction={this.openModal}
          fruitName={this.props.fruitName}
          fruitIndex={this.props.fruitIndex}
          fruitVisual={this.props.fruitVisual}
          fruitFeel={this.props.fruitFeel}
        />

        {/*Q  why cant i apply the onClick at the parent, if i used map? */}
        <div className="foodCardWrapper">
          <div className="foodCard" onClick={this.openModal}>
            <div className="foodCardImgWrapper">
              <img
                src={`../../Images/${this.props.fruitName}.jpg`}
                alt={this.props.fruitName}
                className="foodCardImg"
              />
            </div>

            {/* {this.state.modalState.toString()} */}
            {/* <button onClick={this.openModal}>{this.props.fruitName}</button> */}
            <div className="foodCardText">
              <h2>{this.props.fruitName.toUpperCase()}</h2>
              <p className="secondary">In Season</p>
            </div>
          </div>

          <div className="addbutton-alignment">
            <button
              className={
                this.state.isClicked === true
                  ? "btn btn-outline btn-error active:btn-error btn-xs addButton md:btn-md"
                  : "btn btn-outline btn-success active:btn-accent btn-xs addButton md:btn-md"
              }
              onClick={this.handleClick}
            >
              {this.state.buttonText}
            </button>
          </div>
        </div>
        {/* 
        <div className="addbuttonalignment">
          <button
            className="btn btn-outline btn-success active:btn-warning btn-xs addButton"
            onClick={this.handleClick}
          >
            Add
          </button>
        </div> */}
      </>
    );
  }
}
