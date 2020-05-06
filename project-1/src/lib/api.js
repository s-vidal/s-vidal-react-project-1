import Axios from "axios";

let apiUrl = "https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet";

export async function getTweets() {
  let response = await Axios.get(apiUrl);
  return response;
}

export async function addTweet(tweet) {
  let response = await Axios.post(apiUrl, {tweet});
  return response;
}
