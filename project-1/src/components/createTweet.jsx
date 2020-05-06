import React, {Component} from "react";
import "./createTweet.css";

class createTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      date: null,
      disabled: false,
    };
  }

  handleOnClick = (e) => {
    e.preventDefault();
    const {content} = this.state;
    const {userName} = this.props;
    if (content.length !== 0) {
      const date = new Date().toISOString();
      this.props.onClick({content, userName, date});
      this.setState({content: ""});
    }
  };

  handleOnChange(value) {
    if (value.length > 140) {
      this.setState({disabled: true});
    } else {
      this.setState({content: value, disabled: false});
    }
  }

  keyPress = (e) => {
    if (e.which === 13 && this.state.content.length < 140) {
      e.preventDefault();
      this.handleOnClick(e);
    }
  };

  render() {
    const {content, disabled} = this.state;
    return (
      <form className=" container custom-form">
        <div className="row">
          <textarea
            value={content}
            onKeyDown={this.keyPress}
            onChange={(event) => this.handleOnChange(event.target.value)}
            type="text"
            className="col custom-textarea"
            placeholder="What's on your mind..."
          ></textarea>
        </div>
        <div className="row">
          <div className="col-9">
            {disabled && (
              <div
                className="alert alert-danger m-2 custom-alert p-1"
                role="alert"
              >
                message exceeds 140 characters
              </div>
            )}
          </div>
          <div className="col-3">
            <button
              onClick={(event) => this.handleOnClick(event)}
              className="btn btn-primary btn-sm m-2 input-btn"
              disabled={this.props.disabled || disabled}
            >
              {this.props.disabled && (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                ></span>
              )}
              {!this.props.disabled && <span>Tweet</span>}
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default createTweet;
