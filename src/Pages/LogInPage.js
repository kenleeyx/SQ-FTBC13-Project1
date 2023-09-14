import React from "react";
import "../App.css";

export default class LogInPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <>
        <div className="bodyCard">
          <div className="text-desc">
            LOG IN
            <br />
            <br />
            Ut consequat pariatur irure amet et. Veniam aute non pariatur sit
            sunt commodo dolore in. Adipisicing amet aliquip ad exercitation
            nostrud. Est reprehenderit ea ea labore ut pariatur velit.
          </div>
        </div>
      </>
    );
  }
}
