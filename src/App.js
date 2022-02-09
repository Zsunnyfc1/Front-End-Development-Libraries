import React, {useState} from 'react';
import './App.css';
import allQuotes from './Quotebox.js';
import Colors from './Colorsarray.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faTwitter} from "@fortawesome/free-brands-svg-icons"

function App() {
//const [state, setstate] = useState(initialState)
const [quote, setQuote] = useState()
const [author, setAuthor] = useState()
const [colorAccent, setColorAccent] = useState()

const getRandomQuote = () => {
  let randomInteger=Math.floor (Math.random()*(allQuotes.length-1)) 
  setColorAccent(Colors[randomInteger])
  setQuote(allQuotes[randomInteger].quote)
  setAuthor(allQuotes[randomInteger].author)
}

  return (
    <div className="App" >
      <header className="App-header" style={{backgroundImage: `url("https://www.transparenttextures.com/patterns/brick-wall-dark.png")`}}>
      <div id ="twittericon" style={{color:colorAccent}}><FontAwesomeIcon icon={faTwitter} /></div>
      <div id = "quote-box"style={{color:colorAccent}}>

        <p id ="text"> "{quote}" </p>
        <p id ="author"> -{author} </p>

        <button id ="new-quote" style={{backgroundColor:colorAccent}}onClick ={()=> getRandomQuote()}>New Quote</button>
        
        <a 
        id ="tweet-quote" style={{backgroundColor:colorAccent}}
        href={encodeURI( `https://www.twitter.com/intent/tweet?text=${quote} -${author}` )}
        target = "_blank" rel="noreferrer" >
          Tweet
        </a>

      </div>
      </header>
    </div>
  );
}

export default App;
