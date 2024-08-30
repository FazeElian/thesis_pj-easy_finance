import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import "../../../../assets/css/views/Games/MemoryConcepts/MemoryConcepts.css";
import MemoryItems from "./MemoryItems";
import { useGameDocumentTitle } from '../../../../hooks/useGameDocumentTitle';
import ClosePopUpIcon from "../../../../assets/img/icons/close-popup.webp";
import Logo from "../../../../assets/img/Logo (v.02).webp";

const MemoryConceptsGallery = () => {
    // Custom hook for games tabs title
    useGameDocumentTitle("Conecta y Aprende");

    const [shuffledCards, setShuffledCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [clickable, setClickable] = useState(true);
    const [points, setPoints] = useState(0);
    const [time, setTime] = useState(0); // Tiempo en segundos
    const [isRunning, setIsRunning] = useState(false);

    // Pop up states
    const [popUpVisible, setPopUpVisible] = useState(false);
    const [matchedConcept, setMatchedConcept] = useState("");
    const [animationClass, setAnimationClass] = useState("");

    // Correct answer effect sound
    const matchSound = new Audio(process.env.PUBLIC_URL + "/sounds/MatchSound.mp3");

    const shuffleCards = () => {
        const shuffled = [...MemoryItems].sort(() => Math.random() - 0.5);
        setShuffledCards(shuffled);
    };

    useEffect(() => {
        shuffleCards();
    }, []);

    const handleClick = (index) => {
        if (!clickable || flippedCards.includes(index) || matchedCards.includes(index)) return;

        // Iniciar el cronómetro al primer clic
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
            const match =
                (firstCard.content.type === 'text' && secondCard.content.type === 'image' && secondCard.content.linkedTextId === firstCard.content.imageId) ||
                (firstCard.content.type === 'image' && secondCard.content.type === 'text' && firstCard.content.linkedTextId === secondCard.content.imageId);

            if (match) {
                setMatchedCards(prev => [...prev, firstIndex, secondIndex]);
                setPoints(prevPoints => prevPoints + 100);

                // Shows the pop up with the concept combined
                const concept = firstCard.content.concept || secondCard.content.concept;
                setMatchedConcept(concept);
                setPopUpVisible(true);

                // Play sound when user match
                matchSound.play();
            } else {
                setPoints(prevPoints => prevPoints - 10);
            }

            setTimeout(() => {
                setFlippedCards([]);
                setClickable(true);
            }, 1000);
        }
    };

    // Hook useEffect to close the popup auto after 1.5 sec
    useEffect(() => {
        if (popUpVisible) {
            const timer = setTimeout(() => {
                setAnimationClass("fade-out");
                const closeTimer = setTimeout(() => {
                    setPopUpVisible(false);
                }, 1000);

                return () => clearTimeout(closeTimer);
            }, 2500);

            return () => clearTimeout(timer);
        }
    }, [popUpVisible]);

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

    // Reset game function
    const resetGame = () => {
        setFlippedCards([]);
        setMatchedCards([]);
        setPoints(0);
        setClickable(true);
        setTime(0); // Resetea el cronómetro
        setIsRunning(false); // Detiene el cronómetro
        shuffleCards();
    };

    return (
        <main className="content-game">
            <section className="cont-content--memory-concepts">
                <div className="top--memory-concepts">
                    <div className="content-top--memory-concepts">
                        <div className="cont-time--memory-concepts">
                            <h2>Tiempo: {formatTime(time)}</h2>
                        </div>
                        <div className="cont-points--memory-concepts">
                            <h2>Puntos: </h2><h3>{points}</h3>
                        </div>
                    </div>
                </div>
                <div className="gallery--memory-concepts">
                    {shuffledCards.map((card, index) => (
                        <ReactCardFlip
                            key={card.id}
                            isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
                            flipDirection="horizontal"
                        >
                            <div
                                className="cont-front-item-gallery---memory-concepts"
                                onClick={() => handleClick(index)}
                            >
                                <img src={Logo} alt="" />
                            </div>
                            <div
                                className="cont-back-item-gallery---memory-concepts"
                                style={{ backgroundColor: card.content.color }}
                                onClick={() => handleClick(index)}
                            >
                                {card.content.type === 'text' ? (
                                    <h2 style={{ color: card.content.textColor }}>{card.content.value}</h2>
                                ) : (
                                    <div className="back-content-item-gallery--memory-concepts"> 
                                        <img src={card.content.src} alt="Back" />
                                    </div>
                                )}
                            </div>
                        </ReactCardFlip>
                    ))}
                </div>

                {popUpVisible && (
                    <div className={`cont-popup-matched-cards--memory-concepts ${animationClass}`}>
                        <div className="content-popup-matched-cards--memory-concepts">
                            <div className="text-popup-matched-cards--memory-concepts">
                                <h2>Has emparejado: <p>{matchedConcept}</p></h2>
                            </div>
                            <div className="close-popup-matched-cards--memory-concepts">
                                <button className="btn-close-popup-matched-cards--memory-concepts" onClick={() => setPopUpVisible(false)}>
                                    <img src={ClosePopUpIcon} alt="Cerrar" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
};

export default MemoryConceptsGallery;
