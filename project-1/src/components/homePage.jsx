import React, {Component} from "react";
import CreateTweet from "./createTweet";
import TweetList from "./tweetList";
import "./homePage.css";
import {getTweets, addTweet} from "../lib/api";

class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = {tweetsList: [], disabled: false};
  }

  getTweetsList = async () => {
    // add catch error message
    this.setState({disabled: true});
    let tweets = await getTweets();
    let tweetsList = tweets.data.tweets;
    this.setState({tweetsList, disabled: false});
  };

  handleOnSubmit = async (tweet) => {
    this.setState({disabled: true});
    // add catch error message
    await addTweet(tweet);
    this.getTweetsList();
  };

  componentDidMount() {
    this.getTweetsList();
  }

  render() {
    const {tweetsList, disabled} = this.state;
    const {userName} = this.props;
    return (
      <div className="container custom-background">
        <div className="row justify-content-center">
          <div className="col-8">
            <CreateTweet
              onClick={this.handleOnSubmit}
              disabled={disabled}
              userName={userName}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8">
            <TweetList tweetsList={tweetsList} />
          </div>
        </div>
      </div>
    );
  }
}

export default homePage;
