import React from "react";
import "./tweetList.css";

const TweetList = (props) => {
  const {tweetsList} = props;
  return (
    <div>
      <ul className="custom-list">
        {tweetsList &&
          tweetsList.map((tweet) => (
            <li className="li-item-border" key={tweet.date}>
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <p className="tweet-info-name">{tweet.userName}</p>
                  </div>
                  <div className="col-8">
                    <p className="tweet-info-date">{tweet.date}</p>
                  </div>
                </div>
                <div>
                  <p className="tweet-text">{tweet.content}</p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TweetList;
