import React, {Component} from "react";
import "./profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {userName: ""};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {userName} = this.state;
    this.props.onSubmit(userName);
  };

  render() {
    const {userName} = this.state;
    return (
      <div className="background-black full-height color-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <h1 className="mt-5">Profile</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8">
              <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                  <label>User Name</label>
                  <input
                    value={userName}
                    onChange={(event) =>
                      this.setState({userName: event.target.value})
                    }
                    type="text"
                    className="form-control"
                    placeholder="Enter User-name"
                  ></input>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-sm position-right"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
