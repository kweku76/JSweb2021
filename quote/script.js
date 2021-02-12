const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
//each of the contsants above will target the html elements in our index page
let apiQuotes = []; //we set the apiquotes variable as an empty array. we are using let because the value of apiQuotes changes.
// show new quote
function newQuote() {
  // pick a random quote from api
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);

  //we use Math.floor and random to get a random quote and round the number to a whole number and not decimal.
  // to check if author field is blank and replace with 'unknown'
  if (!quote.author) {
    //..if there is no author
    authorText.textContent = "Unknown Author"; //..then show 'unknown author'
  } else {
    //...or
    authorText.textContent = quote.author; //...show author
  }
  // check quote length to determine styling
  if (quote.text.length > 50) {
    //if quote text is greater than number then change css to long-quote
    quoteText.classList.add("long-quote");
  } else {
    //..otherwise...
    quoteText.classList.remove("long-quote"); //..dont use long-text class
  }
  quoteText.textContent = quote.text;
  //this sets the value of text content to be shown in the html element.
}

// Get quote fROM API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json(); //we turn the response into a json object
    console.log(apiQuotes);
    newQuote();
  } catch (error) {
    // catch error here
  }
  //the try catch statement allows us to attempt to complete a fetch request, if it doesnt work we can catch the error info and do something with it.
}

//Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_bank"); //allows us to open a new browser window to twitter url
}
// Event Listeners

twitterBtn.addEventListener("click", tweetQuote);
newQuoteBtn.addEventListener("click", newQuote);
// on load
getQuotes();
