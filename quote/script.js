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
  authorText.textContent = quote.author;
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
// on load
getQuotes();
