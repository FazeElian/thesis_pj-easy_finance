import React, { useState, useEffect, useRef } from 'react'

// Header component
import Header from '../components/Header';

import ReactCardFlip from 'react-card-flip';

// Styles for this component
import "../assets/sass/views/ConnectAndLearnView.scss";
import "../assets/sass/components/PopUps.scss";

// Items
import Items from "../assets/js/ConnectAndLearnItems";

// Images - Icons
  // Logo
  import Logo from "../assets/img/Logo (v.02).webp";

  // Close Pop Up Icon
  import ClosePopUpIcon from "../assets/img/icons/close-popup.webp";

  // Cards Icon
  import CardsIcon from "../assets/img/icons/cards.webp";

  // Spin Icon
  import SpinIcon from "../assets/img/icons/spin.webp";

// Custom hook for game document title
import { useGameDocumentTitle } from "../hooks/useGameDocumentTitle";

// Welcome Pop up component
import WelcomePopUp from '../components/WelcomePopUp';
import ResultsPopUp from '../components/ResultsPopUp';

const ConnectAndLearnView = () => {
  // Custom title
  useGameDocumentTitle("Conecta y Aprende");

  const [shuffledCards, setShuffledCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [hasFirstMatch, setHasFirstMatch] = useState(false);
  const [clickable, setClickable] = useState(true);
  const [points, setPoints] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  // Pop up states
  const [popUpCardsMatched, setPopUpCardsMatched] = useState(false);
  const [matchedConcept, setMatchedConcept] = useState("");
  const [animationClass, setAnimationClass] = useState("");
  const [animationResultsClass, setAnimationResultsClass] = useState("");

  // Hook useEffect to close the popup auto after 1.5 sec
  useEffect(() => {
    if (popUpCardsMatched) {
      const timer = setTimeout(() => {
        setAnimationClass("fade-out");
        const closeTimer = setTimeout(() => {
          setPopUpCardsMatched(false);
        }, 10000);
        return () => clearTimeout(closeTimer);
      }, 4000);
      return () => clearTimeout(timer);
    }
    setPopUpCardsMatched(false);
  }, [popUpCardsMatched]);
  
  // Correct answer effect sound
  const matchSound = useRef(null);
  const shuffleSound = useRef(null);

  useEffect(() => {
    matchSound.current = new Audio("/sounds/MatchSound.mp3");
    shuffleSound.current = new Audio("/sounds/ShufflingSound.mp3");
  }, []);

  const shuffleCards = () => {
    const shuffled = [...Items].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const handleClick = (index) => {
    if (!clickable || flippedCards.includes(index) || matchedCards.includes(index)) return;
    
    if (shuffleSound.current) {
      shuffleSound.current.play();
    }

    // Start timer when user clicks
    if (!isRunning) {
      setIsRunning(true);
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setClickable(false);
      const [firstIndex, secondIndex] = newFlippedCards;
      const firstCard = shuffledCards[firstIndex];
      const secondCard = shuffledCards[secondIndex];
      
      // Check if the cards match
      const match = (
        firstCard.content.concept === secondCard.content.concept && 
        secondCard.content.linkedTextId === firstCard.content.imageId
      );

      if (match) {
        setMatchedCards(prev => [...prev, firstIndex, secondIndex]);
        setPoints(prevPoints => prevPoints + 100);

        // Set the first match flag to true if this is the first match
        if (!hasFirstMatch) {
          setHasFirstMatch(true); // Cambia a true en el primer acierto
        }


        // Play sound when user match
        matchSound.current.play();

        // Show the pop up with the concept
        const concept = firstCard.content.concept || secondCard.content.concept;
        setMatchedConcept(concept);
        setPopUpCardsMatched(true);

        setMatchedConcept(concept);
      } else {
        // Subtract points only if there was already a first correct answer
        if (hasFirstMatch) {
          setPoints(prevPoints => prevPoints - 10);
        }
      }
      setTimeout(() => {
        setFlippedCards([]);
        setClickable(true);
      }, 1000);
    }
  };

  // Hook useEffect for timer
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonta o cuando se detiene el cronómetro
  }, [isRunning]);

  // Set the time as mm:ss
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  // Results pop up states
  const [ resultsPopUp, setResultsPopUp ] = useState(false);

  // When user finish to match all cards
  useEffect(() => {
    if (matchedCards.length === shuffledCards.length && shuffledCards.length > 0) {
      // Stop timer
      setIsRunning(false);

      // Show alert
      setResultsPopUp(true);
      setAnimationResultsClass("bounce-in")
    }
  }, [matchedCards, shuffledCards.length]);

  // Welcome pop up states
  const [ welcomePopUp, setWelcomePopUp ] = useState(false);

  const closeWelcomePopUp = () => {
    setAnimationClass("bounce-out");
    setTimeout(() => {
      setWelcomePopUp(false);
    }, 1000);
  }

  useEffect(() => {
    setWelcomePopUp(true);
    setAnimationClass("bounce-in");

    const showTimerId = setTimeout(() => {
      setAnimationClass("bounce-out");
      const hideTimerId = setTimeout(() => {
        setWelcomePopUp(false);
      }, 1000);
      return () => clearTimeout(hideTimerId);
    }, 15000);

    return () => {
      clearTimeout(showTimerId);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <Header 
        bgColor="bg-yellow-low-opacity" 
        btnColor="bg-yellow"
        bderColor="bder-yellow-3"
        btnState="true"
      />

      <main className="content-cards bg-blue-low-opacity">
        <div className="score-time--connect-and-learn">
          <div className="item-score-time--connect-and-learn time--connect-and-learn"><b>Tiempo:</b>{formatTime(time)}</div>
          <div className="item-score-time--connect-and-learn score--connect-and-learn" onClick={() => setResultsPopUp(true)}><b>Puntos:</b> {points}</div>
        </div>
        <section className="cards-gallery--connect-and-learn">
          {shuffledCards.map((card, index) => (
            <ReactCardFlip
              key={card.id}
              isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
              flipDirection="horizontal"
            >
              <div
                className="cont-front-card--connect-and-learn"
                onClick={() => handleClick(index)}
              >
                <img src={Logo} alt="" loading="lazy" />
              </div>
              <div
                className="cont-back-card--connect-and-learn"
                onClick={() => handleClick(index)}
              >
                <div className="back-content-item-gallery--memory-concepts"> 
                  <img src={card.content.src} alt="Back" loading="lazy" />
                </div>
              </div>
            </ReactCardFlip>
          ))}

          {/* Welcome pop up */}
          {welcomePopUp && (
            <WelcomePopUp 
              className={`popup-welcome--pop-up bg-yellow-low-opacity bder-yellow-3 ${animationClass}`}
              nameGame="Conecta y Aprende"
              txtColor="#F2BB16"
              closeFunction={closeWelcomePopUp}
              imgInstruction1={CardsIcon}
              txtInstruction1="Busca la tarjeta que tenga la imagen que mejor represente el concepto financiero de la otra tarjeta."
              imgInstruction2={SpinIcon}
              txtInstruction2="Haz clic en las tarjetas para voltearlas y ver qué hay debajo. ¡Intenta recordar lo que ves!"
              txtInstruction3="Cada vez que emparejas correctamente una imagen con su descripción, ganas puntos. ¡Trata de conseguir tantos puntos como puedas!"
            />
          )}

          {/* Matched cards pop up */}
          {popUpCardsMatched && (
            <div className={`popup-cards-matched--pop-up ${animationClass}`}>
              <div className="close-popup-cards-matched--pop-up">
                <button className="btn-close-popup-cards-matched--pop-up" onClick={() => setPopUpCardsMatched(false)}>
                  <img src={ClosePopUpIcon} alt="Cerrar" loading="lazy" />
                </button>
              </div>
              <div className="text-popup-cards-matched--pop-up">
                <h1 className="rainbow-text">Buen trabajo!</h1>
                <h2>Has emparejado el concepto: <br /><p>{matchedConcept}</p></h2>
              </div>
            </div>
          )}

          {resultsPopUp && (
            <ResultsPopUp 
              className={`popup-results--pop-up ${animationResultsClass}`}
              message="Has emparejado correctamente todas las cartas!"
              formLink="https://forms.gle/kx1tbuTDoHhYeBPz8"
            />
          )}
        </section>
      </main>
    </>
  )
}

export default ConnectAndLearnView
