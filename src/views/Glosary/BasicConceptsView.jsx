import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

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
  // Next button states
  const [ nextBtn, setNextBtn ] = useState(false);

  // Animation
  const [ animationClass, setAnimationClass ] = useState(false);
    
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

  return (
    <>
      <main className="py-top">
        <main className="content-centered flex-column">
          <div className="top--glosary">
            <div className="title-section--glosary bg-yellow">Conceptos Básicos</div>
          </div>
          <div className="body--glosary flex-column">
            <img src={Saving} alt="" />
            <div className="body-group--glosary body-group-big--glosary">
              <button className="btn-audio--glosary bg-yellow" onClick={handleSound}>
                <img src={ListenAudioIcon} alt="" />
              </button>
              <h2>Ahorrar</h2>
            </div>
            <div className="body-group--glosary body-group-small--glosary">
              <button className="btn-audio--glosary bg-yellow">
                <img src={ListenAudioIcon} alt="" />
              </button>
              <h2>Es guardar parte del dinero para usarlo en el futuro. Ayuda a alcanzar metas importantes en lugar de gastarlo todo de inmediato.</h2>
            </div>
          </div>
        </main>

        {nextBtn && (
          <button className={`btn-next--glosary bg-yellow ${animationClass}`}>
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

export default BasicConceptsView