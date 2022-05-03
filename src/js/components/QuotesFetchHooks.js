import { useEffect, useState } from "react";
import QuoteBox from "./QuoteBox";

//React function components don't have state but with Hooks it can manage state in functional compoments
function QuotesFetchHooks(){
//Hooks are functions that let you “hook into” React state and lifecycle features from function components. 
//React will preserve this state between re-renders.
//https://reactjs.org/docs/hooks-overview.html

//useState is a Hook that lets you add React state to function components.
//It declares “state variables”
//The only argument to the useState() Hook is the initial state. 
// It returns the current state and a function that updates it. 
//https://reactjs.org/docs/hooks-state.html
    const [quoteDB, setQuoteDB] = useState({
        error: null,
        isLoaded: false,
        quotes: []
    });


//The Effect Hook lets you perform side effects in function components
//Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.
//https://reactjs.org/docs/hooks-effect.html    
    //https://reactjs.org/docs/faq-ajax.html
    //You should populate data with AJAX calls in the componentDidMount lifecycle method or useEffect Hook
    useEffect(() => {
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

export default QuotesFetchHooks;