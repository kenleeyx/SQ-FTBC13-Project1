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

  handleTextChange = (ev) => {
    // console.log(ev);
    // I don't see name and value in event
    let { name, value } = ev.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <div className="halfLogIn">
          <div className="loginImgWrapper">
            <img src="./Images/loginfruit2.jpg" className="loginBG " />
          </div>
          {/* <div className="loginBG"></div> */}
          <div className="loginWrapper ">
            <div className="text-desc ">
              <form>
                {/* <label> Username: </label> */}
                {/* <br /> */}
                <input
                  id="logIn-username"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleTextChange}
                  autoComplete="off"
                  placeholder="Username"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </form>
              <br />
              <form>
                {/* <label> Password: </label> */}
                {/* <br /> */}
                <input
                  id="logIn-password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleTextChange}
                  autoComplete="off"
                  placeholder="Password"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </form>
              <br />
              <button
                onClick={this.props.catalogButton}
                className="btn btn-warning"
              >
                LOG IN
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
