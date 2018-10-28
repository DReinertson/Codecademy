// Page Elements

const engadget = document.getElementById('engadget');
const recode = document.getElementById('recode');
const nextWeb = document.getElementById('nextWeb');
const main = document.getElementsByTagName('main')[0];

// News API Data

const apiKey = 'a2807597ceae4f17b0f2e4fe85667365';
const engadgetUrl = 'https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=a2807597ceae4f17b0f2e4fe85667365';
const recodeUrl = 'https://newsapi.org/v2/top-headlines?sources=recode&apiKey=a2807597ceae4f17b0f2e4fe85667365';
const nextWebUrl = 'https://newsapi.org/v2/top-headlines?sources=the-next-web&apiKey=a2807597ceae4f17b0f2e4fe85667365';


// Request News Function
const getNews = async(url) => {
  let response = await fetch(url)
  let jsonResponse = await response.json();
  const articlesArray = jsonResponse.articles.slice(0,5);
  console.log(articlesArray);
  return articlesArray;
}
// Render Function

function renderNews(articles) {
  articles.map((article, index) => {
    let articleRow =
      '<div class="articlerow">' +
      ' <div class="article">' +
      '   <h2 class="title">' + article.title + '</h2>' +
      '   <h3>By ' + article.author + '</h3>' +
      '   <p> ' + article.description + '</p>' +
      '   <a href="' + article.url + '" target="_blank" class="readmore"><p>Read More</p></a>' +
      ' </div>' +
      ' <div class="share">' +
      '   <img class="storyimage" src="' + article.urlToImage + '" />' +
      '   <a href="https://twitter.com/koreanjak" target="_blank"><button type="button" class="tweet" id="tweet ' + index + '">' +
      '   <i class="fa fa-twitter" aria-hidden="true"></i>Tweet This</button></a>' +
      ' </div>' +
      '</div>';

    main.innerHTML += articleRow;
  });
  return articles;
}

// Post Tweet Function

function sendTweets(newsObjects) {
  let tweetButtons = document.getElementsByClassName('tweet');
  for (let i = 0; i < tweetButtons.length; i++) {
    tweetButtons[i].addEventListener('click', function() {
      Twitter.postStatus(newsObjects[i].url);
      tweetButtons[i].innerHTML = "Tweeted";
    }, false);
  }
}

// Button Event Listeners

engadget.addEventListener('click', function() {
  main.innerHTML = ' ';
  // Call getNews() here
  getNews(engadgetUrl).then(articlesArray =>
    renderNews(articlesArray));
}, false).then(articles => {
  sendTweets(articles);
});

recode.addEventListener('click', function() {
  main.innerHTML = ' ';
  // Call getNews() here
  getNews(recodeUrl).then(articlesArray => 
    renderNews(articlesArray));
}, false).then(articles => {
  sendTweets(articles);
});

nextWeb.addEventListener('click', function() {
  main.innerHTML = ' ';
  // Call getNews() here
  getNews(nextWebUrl).then(articlesArray =>
    renderNews(articlesArray));
}, false).then(articles => {
  sendTweets(articles);
});
