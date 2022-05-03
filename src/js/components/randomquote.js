import $ from 'jquery';

let quoteBank;

//https://www.w3schools.com/whatis/whatis_json.asp
/*function getQuotes(){
    return $.ajax(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
      {
          success: function(jsonQuotes){
            if(jsonQuotes==='string'){
                quoteBank=JSON.parse(jsonQuotes);
                console.log(quoteBank);
            }
        }
      });
}*/

function getQuotes() {
    return $.ajax({
      headers: {
        Accept: 'application/json'
      },
      url:
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
      success: function (jsonQuotes) {
        if (typeof jsonQuotes === 'string') {
          quoteBank = JSON.parse(jsonQuotes);
          console.log('quotesData');
          console.log(quoteBank);
        }
      }
    });
}
  

function getRandomeQuote(){
    return getQuotes.quotes[
        Math.floor(Math.random() * getQuotes.quotes.length)
    ];
}

function getQuote(){
    let randomQuote = getRandomeQuote();

    let currentQuote = randomQuote.quote;
    let currentAuthor = randomQuote.author;


    $('#text').text(randomQuote.quote);
    $('#author').text(randomQuote.author);
}

$(document).ready(function(){
    getQuotes();
    $('#new-quote').on('click', getQuote);
});