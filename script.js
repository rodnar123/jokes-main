 const quoteContainer = document.getElementById('quote-container');
 const quoteText = document.getElementById('quote');
 const authorText = document.getElementById('author');
 const twitterBtn = document.getElementById('twitter');
 const newQuoteBtn = document.getElementById('new-quote');
 const loader = document.getElementById('loader');

 
 

//  Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
    
}

// Show New Quote
function newPngJoke() {
    loading();
    // Pick a random quote from API array
    const quote = pngJokes[Math.floor(Math.random()   * pngJokes.length)];
    // Check if Author field is blank and replace is with 'Unkown!'
    if (!quote.author) {
        quoteText.textContent = 'Unkown';
    } else{
        authorText.textContent = quote.author;
    }
    // Check the quote lenght to determine the styling
    if(quote.text.length > 120) {
         quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set Quote hide loeader
    quoteText.textContent = quote.text;
    complete();

}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}


// Event Listener

newQuoteBtn.addEventListener('click',newPngJoke);
twitterBtn.addEventListener('click',tweetQuote);

// On laod 

    
    newPngJoke();

