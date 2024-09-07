import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Header component
import Header from '../../components/Header';

// Styles for this component
import "../../assets/sass/views/GlosaryView.scss";
import "../../assets/sass/views/ItemGlosaryView.scss";

// Images - Icons
  // Saving item
  import Saving from "../../assets/img/GlosaryView/BasicConcepts/Saving.png";
  
  // Listen Audio icon
  import ListenAudioIcon from "../../assets/img/icons/listen-audio.png";

  // Right Arrow icon
  import RightArrowNextIcon from "../../assets/img/icons/arrow-right-next.png";

  // Left Arrow Icon
  import LeftArrowComeBackIcon from "../../assets/img/icons/left-arrow-come-back.png";
  
const BasicConceptsView = () => {
  // States for handling items and the current item index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextBtn, setNextBtn] = useState(false);
  const [animationClass, setAnimationClass] = useState(false);

  // Array of items with paragraphs and names
  const items = [
    { title: 'Ahorrar', text: 'Es guardar parte del dinero para usarlo en el futuro. Ayuda a alcanzar metas importantes en lugar de gastarlo todo de inmediato.', img: Saving },
    { title: 'Invertir', text: 'Es utilizar tu dinero para comprar algo que puede aumentar su valor con el tiempo. Ayuda a generar ingresos adicionales.', img: LeftArrowComeBackIcon },
    { title: 'Presupuesto', text: 'Es un plan que te ayuda a gestionar tus ingresos y gastos. Permite controlar y planificar el uso del dinero.', img: Saving },
  ];

  // Voice Audio
  const exampleSound = useRef(null);

  useEffect(() => {
    exampleSound.current = new Audio("/sounds/MatchSound.mp3");
  }, []);

  const handleSound = () => {
    exampleSound.current.play();

    // Time to set next button after audio
    setTimeout(() => {
      setNextBtn(true);
      setAnimationClass("right-bounce");
    }, 2000);
  }

  // Function to show the next item
  const handleNextItem = () => {
    if (currentIndex === items.length - 1) {
      // Show alert when reaching the last item
      alert("Has llegado al final de los conceptos.");
    } else {
      // Move to the next item
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
    setNextBtn(false); // Hide the button until next sound is played
    setAnimationClass(""); // Remove the bounce animation
  }

  return (
    <>
      {/* Header */}
      <Header 
        bgColor="bg-blue-low-opacity" 
        btnColor="bg-blue"
        bderColor="bder-blue-3"
      />

      <main className="py-top">
        <main className="content-centered flex-column">
          <div className="top--glosary">
            <div className="title-section--glosary bg-yellow">Conceptos Básicos</div>
          </div>
          <div className="body--glosary flex-column">
            <img src={items[currentIndex].img} alt="" />
            <div className="body-group--glosary">
              <div className="content-body-group--glosary">
                <button className="btn-audio--glosary bg-yellow" onClick={handleSound}>
                  <img src={ListenAudioIcon} alt="" />
                </button>
                <div className="text-body--glosary">
                  <h2>{items[currentIndex].title}</h2>
                  <p>{items[currentIndex].text}</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {nextBtn && (
          <button className={`btn-next--glosary bg-yellow ${animationClass}`} onClick={handleNextItem}>
            <img src={RightArrowNextIcon} alt="" />
          </button>
        )}

        <Link to="/glosario" className="btn-come-back--glosary">
          <img src={LeftArrowComeBackIcon} alt="" />
        </Link>
      </main>
    </>
  )
}

export default BasicConceptsView;