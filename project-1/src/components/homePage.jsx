import React, {Component} from "react";
import CreateTweet from "./createTweet";
import TweetList from "./tweetList";

class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = {tweetsList: []};
  }

  handleOnSubmit = async (tweet) => {
    const tweetString = JSON.stringify(tweet);
    const key = tweet.time.toString();
    localStorage.setItem(key, tweetString);
    this.setState({tweetsList: localStorage});
  };

  componentDidMount() {
    this.setState({tweetsList: localStorage});
  }

  render() {
    return (
      <div className="container">
        <span className="badge badge-light">Home Page</span>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => localStorage.clear()}
        >
          clear localStorage
        </button>
        <CreateTweet onClick={this.handleOnSubmit} />
        <TweetList tweetsList={this.state.tweetsList} />
      </div>
    );
  }
}

export default homePage;
