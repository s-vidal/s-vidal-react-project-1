let tweets = [];

export function getTweets() {
  return tweets;
}

export function addTweet(tweet) {
  tweets.unshift(tweet);
}
