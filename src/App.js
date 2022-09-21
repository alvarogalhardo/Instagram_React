import { useState } from "react";
import words from "./words";
import alphabet from "./alphabet";
import forca0 from "./assets/img/forca0.png";
import forca1 from "./assets/img/forca1.png";
import forca2 from "./assets/img/forca2.png";
import forca3 from "./assets/img/forca3.png";
import forca4 from "./assets/img/forca4.png";
import forca5 from "./assets/img/forca5.png";
import forca6 from "./assets/img/forca6.png";
import "./css/reset.css";
import "./css/style.css";

function Letter(props) {
  return (
    <div className={props.className} data-identifier="letter">
      {props.letter}
    </div>
  );
}

function chooseWord() {
  const i = Math.floor(Math.random() * words.length);
  const word = words[i];
  return word;
}

export default function App() {
  let m = 0; //m counts the mistakes;
  const [won, setWon] = useState(false);
  const [usable, setUsable] = useState(false);
  const [gameState, setGameState] = useState(forca0);
  const [word, setWord] = useState("");
  let shownWord = word.split("");
  console.log(shownWord);

  function enableGame() {
    setWord(chooseWord);
    setUsable(true);
  }

  return (
    <div className="content">
      <div className="hangman">
        <img src={gameState} alt="hangman" data-identifier="game-image"></img>
        
        {usable ? (
          <>
          <button data-identifier="choose-word" className="choose-word">
            Escolher Palavra
          </button>
          <div className="word">
            {shownWord.map(()=>"_  ")}
          </div>
          </>
        ) : (
          <button
            data-identifier="choose-word"
            className="choose-word"
            onClick={enableGame}
          >
            Escolher Palavra
          </button>
        )}
      </div>
      <div className="letters">
        {usable
          ? alphabet.map((l, index) => (
              <Letter key={index} letter={l.toUpperCase()} className={"usable"} onClick={()=>null}/>
            ))
          : alphabet.map((l, index) => (
              <Letter key={index} letter={l.toUpperCase()} className={"unusable"} /*onClick={(l)=>chooseLetter(l)}*//>
            ))}
      </div>
      <div className="guessarea">
        <p>Já sei a palavra!</p>
        {usable ? (
          <input className="guess-box" type="text" data-identifier="type-guess"></input>
        ) : (
          <div className="guess-box"></div>
        )}
        <button className="guess-button" data-identifier="guess-button">
          Chutar
        </button>
      </div>
    </div>
  );
}
