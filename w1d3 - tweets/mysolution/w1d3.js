let jSonUrl = "https://kea-alt-del.dk/twitter/api/?hashtag=word";
let tweets = [];
let display = document.querySelector("#display");
let template = document.querySelector("#temp_tweets");

document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {
  let dataJson = await fetch(jSonUrl);
  tweets = await dataJson.json();
  tweets = tweets.statuses;
  //viser arrayet efter json er hentet ind
  console.log(tweets);
  visTweets();
}

function visTweets() {
  tweets.forEach(tweet => {
    console.log(tweet);
    let klon = template.cloneNode(true).content;
    console.log(klon);
    klon.querySelector("[data-header]").textContent = tweet.user.name;
    klon.querySelector("[data-description]").textContent =
      tweet.user.description;
    display.appendChild(klon);
  });
}
