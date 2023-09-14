import React from "react";
import "../App.css";

import videoBG from "../Assets/strawberriesvid.mp4";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount = () => {
  //   console.log("HMMM");
  //   setTimeout(() => {
  //     this.props.toLogIn();
  //   }, 1500);
  // };

  render() {
    return (
      <>
        {/* <div className="bodyCard">This is the landing page</div> */}
        <div className="videoholder">
          <video id="videosrc" src={videoBG} autoPlay loop muted />
          <div className="landingtext">
            <h1>Fruits Basket</h1>
            <br />
            <p>Making your grandmother's advice obselete</p>
          </div>
        </div>
      </>
    );
  }
}
