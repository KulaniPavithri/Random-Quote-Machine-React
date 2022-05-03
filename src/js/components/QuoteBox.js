import React, { Component, useEffect, useState } from 'react';
import '../styles/quotebox.css';


const QuoteBox = (props) => {
//using Hooks to defines states in React function components

    const [tempQuote, setTempQuote] = useState({});

 // useEffect tells React that your component needs to do something after render.
 //https://reactjs.org/docs/hooks-effect.html
 //Here, without this it won't re-render the state value after the asynchronous call executed.
    //Adding second parameter to useEffect indicates when to update the state
    //whenever props get changed, it will set as the state inside useEffect.
    // useEffect is primarily to handle side effects and this is one of those example for using it.
    //otherwise, buttonClick event won't work
    useEffect(() => {
        setTempQuote(props.randomQuote);
    },[props]);

    const handleClick = () => {
        setTempQuote(props.randomQuote);
    }
    
//props have not been updated immediately after the asynchronous API ajax call to fetch data in QuotesFetchHooks useEffect.
//Because it is asynchronus.
//Therefore, it doesn't populate the state - tempQuote immediately
//{tempQuote.author} gives runtime error saying cannot read unassigned value because
//data was not populated at rendering time. {tempQuote && tempQuote.author} will hold 
//rendering until tempQuote is assigned data from asynchronous API call.
//https://stackoverflow.com/questions/57263525/useeffect-not-being-called-and-not-updating-state-when-api-is-fetched

//better solution - https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
//read this for React Suspense for Data Fetching - https://reactjs.org/docs/concurrent-mode-suspense.html
    return(

        <div>
            <head>
                {/*React <Helmet> can be used here to define <head>*/}
                <link rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                crossorigin="anonymous"/>

                <link rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
                       
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js"></script>
                    
            </head>
            
            <body>
                <div className="body">
                    <div id="quote-box">
                        <div className="quote-text">
                            <i className="fa fa-quote-left"></i>
                            <span id='text'>{tempQuote && tempQuote.quote} </span>
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

export default QuoteBox;