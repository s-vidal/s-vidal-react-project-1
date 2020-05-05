import React from "react";

const TweetList = (props) => {
  const {tweetsList} = props;
  let tweetListValues = Object.values(tweetsList);
  let TweetsArray = tweetListValues.map((value) => JSON.parse(value));
  let sortedTweetsArray = TweetsArray.sort((a, b) => b.timeStamp - a.timeStamp);
  let userName = "Yonatan";

  return (
    <div>
      <ul className="list-group">
        {sortedTweetsArray &&
          sortedTweetsArray.map((tweet) => (
            <li className="list-group-item" key={tweet.time}>
              <span className="mr-5">{userName}</span>
              <span>{tweet.inputText}</span>
              <span className="ml-5">{tweet.time}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TweetList;
