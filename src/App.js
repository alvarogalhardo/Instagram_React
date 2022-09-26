import { useEffect, useState } from "react";
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
const states = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
let m = 0;

function Letter(props) {
  return (
    <div
      className={props.className}
      data-identifier="letter"
      onClick={props.onClick}
    >
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
  const [guessed, setGuessed] = useState([]);
  const [result, setResult] = useState("");
  const [started, setStarted] = useState(false);
  const [stateLetter, setStateLetter] = useState("unusable");
  const [gameState, setGameState] = useState(states[m]);
  const [word, setWord] = useState("");
  const wordArray = word.split("");
  const [shownWord, setShownWord] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    setShownWord(wordArray.map((l) => "_ "));
  }, [word]);

  function startGame() {
    setWord(chooseWord);
    setStarted(true);
    setStateLetter("usable");
    m=0;
    setGameState(states[0]);
    setResult("");
    setGuessed([]);
  }

  function won() {
      setResult("word won");
      setStarted(false);
      setStateLetter("unusable");
      setShownWord(wordArray);
  }

  function lost() {
      setResult("word lost");
      setStarted(false);
      setStateLetter("unusable");
      setShownWord(wordArray);
      setGameState(states[6]);
  }

  function guess(){
    if (input === word){
      won()
    } else {
      lost();
    }
  }

  function verifyLetter(i) {
    let normalizedWord = wordArray.toString();
    normalizedWord = normalizedWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    normalizedWord = normalizedWord.replaceAll(',','');
    if (normalizedWord.includes(alphabet[i])) {
      for (let cont = 0; cont < normalizedWord.length; cont++) {
        if (normalizedWord[cont] == alphabet[i]) {
          shownWord[cont] = alphabet[i];
          setShownWord(shownWord);
        }
      }
    } else {
      m++;
    }
  }

  function guessLetter(i) {
    setGuessed([...guessed, i]);
    verifyLetter(i);
    for (let i=0;i<word.length;i++){
      word.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    }
    if (JSON.stringify(shownWord) === JSON.stringify(word.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(""))) {
      won();
    }
    if (m === 6) {
      lost();
    }
    setGameState(states[m]);
  }

  return (
    <div className="content">
      <div className="hangman">
        <img src={gameState} alt="hangman" data-identifier="game-image"></img>

        {started ? (
          <>
            <button data-identifier="choose-word" className="choose-word">
              Escolher Palavra
            </button>
            <div className="word">{shownWord}</div>
          </>
        ) : (
          <>
            <button
              data-identifier="choose-word"
              className="choose-word"
              onClick={startGame}
            >
              Escolher Palavra
            </button>
            <div className={result}>{shownWord}</div>
          </>
        )}
      </div>
      <div className="letters">
        {started
          ? alphabet.map((l, index) => (
              <Letter
                key={index}
                letter={l.toUpperCase()}
                className={guessed.includes(index) ? "unusable" : stateLetter}
                onClick={() => guessLetter(index)}
              />
            ))
          : alphabet.map((l, index) => (
              <Letter
                key={index}
                letter={l.toUpperCase()}
                className={stateLetter}
                onClick={null}
              />
            ))}
      </div>
      <div className="guessarea">
        <p>Já sei a palavra!</p>
        {started ? (
          <input
            className="guess-box"
            type="text"
            data-identifier="type-guess"
            onChange={(e)=>setInput(e.target.value)}
          ></input>
        ) : (
          <div className="guess-box"></div>
        )}
        <button className="guess-button" data-identifier="guess-button" onClick={guess}> 
          Chutar
        </button>
      </div>
    </div>
  );
}
