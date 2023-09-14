import React from "react";
import "../App.css";

// import videoBG from "../assets/strawberriesvid.mp4";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="bodyCard">This is the landing page</div>

        {/* <div className="videoholder">
          <video id="videosrc" src={videoBG} autoPlay loop muted />
        </div> */}
      </>
    );
  }
}
