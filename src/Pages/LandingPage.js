import React from "react";
import "../App.css";

import videoBG from "../Assets/strawberriesvid.mp4";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overlay: false,
    };
  }

  componentDidMount = () => {
    // console.log("HMMM");
    setTimeout(() => {
      console.log("trigger");
      this.setState({
        overlay: true,
      });
    }, 2000);
  };

  render() {
    return (
      <>
        {/* <div className="bodyCard">This is the landing page</div> */}
        {this.state.overlay === true && <div className="whiteoverlay"></div>}
        {/* <div className="whiteoverlay"></div> */}
        <div className="videoholder">
          <video id="videosrc" src={videoBG} autoPlay loop muted />
          <div className="landingtext">
            <h1 className="openingtext">
              Fruits
              <br />
              Basket
            </h1>
            <p id="tagline">Only the freshest & finest fruits</p>
          </div>
        </div>
      </>
    );
  }
}
