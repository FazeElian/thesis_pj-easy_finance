import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';

// Styles for this component
import "../../../../assets/css/views/Games/MemoryConcepts/MemoryConcepts.css";

// Memory Items
import MemoryItems from "./MemoryItems";

import { useGameDocumentTitle } from '../../../../hooks/useGameDocumentTitle';

const MemoryConceptsGallery = () => {
    // custom hook for games tabs title
    useGameDocumentTitle("Conecta y Aprende");

    const [shuffledCards, setShuffledCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [clickable, setClickable] = useState(true);
    const [points, setPoints] = useState(0);

    useEffect(() => {
        shuffleCards();
    }, []);

    const shuffleCards = () => {
        const shuffled = [...MemoryItems].sort(() => Math.random() - 0.5);
        setShuffledCards(shuffled);
    };

    const handleClick = (index) => {
        if (!clickable || flippedCards.includes(index) || matchedCards.includes(index)) return;

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
            }

            setTimeout(() => {
                setFlippedCards([]);
                setClickable(true);
            }, 1000);
        }
    };

    const resetGame = () => {
        setFlippedCards([]);
        setMatchedCards([]);
        setPoints(0);
        setClickable(true);
        shuffleCards();
    };

    return (
        <main className="content-game">
            <section className="cont-content--memory-concepts">
                <div className="top--memory-concepts">
                    <h1>Conecta y Aprende</h1>
                    <div className="cont-points--memory-concepts">
                        <h2>Puntos: </h2><h3>{points}</h3>
                    </div>
                    <div className="cont-btn-reset--memory-concepts">
                        <button className="btn-reset--memory-concepts" onClick={resetGame}>
                            Reiniciar
                        </button>
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
                            </div>
                            <div
                                className="cont-back-item-gallery---memory-concepts"
                                style={{ backgroundColor: card.content.color }}
                                onClick={() => handleClick(index)}
                            >
                                {/* Contenido del reverso de la carta */}
                                {card.content.type === 'text' ? (
                                    <h2 style={{ color: card.content.textColor }}>{card.content.value}</h2>
                                ) : (
                                    <div className="back-content-item-gallery--memory-concepts"> 
                                        <img src={card.content.src} alt="Back" />
                                        {/* <h2>{card.content.concept}</h2> */}
                                    </div>
                                )}
                            </div>
                        </ReactCardFlip>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default MemoryConceptsGallery;
