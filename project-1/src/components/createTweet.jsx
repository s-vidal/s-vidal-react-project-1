import React, {Component} from "react";

class createTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {inputText: "", id: 0, time: null, disabled: false};
  }

  handleOnClick = () => {
    const {inputText, id} = this.state;
    if (inputText.length !== 0) {
      const time = new Date().toGMTString();
      const timeStamp = new Date().valueOf();
      this.props.onClick({inputText, time, id, timeStamp});
      const newId = this.state.id + 1;
      this.setState({inputText: "", id: newId});
    }
  };

  handleOnChange(value) {
    if (value.length > 14) {
      this.setState({disabled: true});
    } else {
      this.setState({inputText: value, disabled: false});
    }
  }

  keyPress = (e) => {
    if (e.keyCode === 13 && e.target.value.length < 14) {
      this.handleOnClick();
    }
  };

  render() {
    const {inputText, disabled} = this.state;
    return (
      <div className="input-group m-3">
        <input
          value={inputText}
          onKeyDown={this.keyPress}
          onChange={(event) => this.handleOnChange(event.target.value)}
          type="text"
          className="form-control input-height"
          placeholder="What's on your mind..."
        ></input>
        <div className="input-group">
          {disabled && (
            <div className="alert alert-danger m-2" role="alert">
              Max characted length exceeded!
            </div>
          )}
          <button
            onClick={this.handleOnClick}
            className="btn btn-primary btn-sm input-btn m-2"
            disabled={disabled}
          >
            Tweet
          </button>
        </div>
      </div>
    );
  }
}

export default createTweet;
