import { render } from 'react-dom';
import App from './components/App';

render(
    <App />, document.getElementById("root")
);

/* The Codepen Project

//instead of import statements, <link>s and <script>s, we have to add followings to relevant JS and CSS settings in codepen
//And have to use .operator with react elements as follows. - React.Component, React.useEffect, etc.
//add <div id="root"></div> to HTML section in codepen. id="root element name"
//JS - 
//https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
//https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js
//https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js
//https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js

//CSS
//https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.0.2/cerulean/bootstrap.min.css
//https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css


const QuoteBox = (props) => {

    const [tempQuote, setTempQuote] = React.useState({});

     React.useEffect(() => {
        setTempQuote(props.randomQuote);
    },[props]);

    const handleClick = () => {
        setTempQuote(props.randomQuote);
    }
    
    return(

        <div>
            
     <body>
         <div className="body">
            <div id="quote-box">
                        <div className="quote-text">
                            <i className="fa fa-quote-left"></i>
                            <span id="text">{tempQuote && tempQuote.quote} </span>
                            <i className="fa fa-quote-right"></i>
                        </div>

                        <div className="quote-author">- <span id="author">{tempQuote && tempQuote.author}</span></div>

                        <div className="buttons">
                            <a className=" button" id="tweet-quote" title="Tweet this quote" 
                            target="_blank" href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + '"' + (tempQuote && tempQuote.quote) + '" ' + (tempQuote && tempQuote.author)}>
                                <i className="fa fa-twitter"></i>
                            </a>
                            <button className=" button" id="new-quote" onClick={handleClick}>Next Quote</button>
                        </div>
                    </div>
                </div>
            </body>
        </div>);

    
}

function QuotesFetchHooks(){
  
       const [quoteDB, setQuoteDB] = React.useState({
            error: null,
            isLoaded: false,
            quotes: []
        });
    
    

        React.useEffect(() => {
            fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(response => response.json())
            .then(
                (quoteBank) => {
                setQuoteDB({
                    isLoaded: true,
                    quotes: quoteBank.quotes
                });
                console.log(quoteBank.quotes);
            },
            (error) => {
                setQuoteDB({
                    isLoaded: true,
                    error
                });
            })
        },[]);
    
        const getRandomQuote = () => {
            return (quoteDB.quotes[
                    Math.floor(Math.random() * quoteDB.quotes.length)]);
        }
    
        return(
            <QuoteBox randomQuote={getRandomQuote} />
        )
}

function App(){

    return(<QuotesFetchHooks />);
}


ReactDOM.render(<App />, document.getElementById('root'));                                      
*/