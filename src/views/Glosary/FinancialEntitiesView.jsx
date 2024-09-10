import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Header component
import Header from '../../components/Header';

// Styles for this component
import "../../assets/sass/views/GlosaryView.scss";
import "../../assets/sass/views/ItemGlosaryView.scss";

// Images - Icons
  // Listen Audio icon
  import ListenAudioIcon from "../../assets/img/icons/listen-audio.webp";

  // Right Arrow icon
  import RightArrowNextIcon from "../../assets/img/icons/arrow-right-next.webp";

  // Left Arrow Icon
  import LeftArrowComeBackIcon from "../../assets/img/icons/left-arrow-come-back.webp";

  // Right arrow white - pop up
  import RightArrowNextWhiteIcon from "../../assets/img/icons/right-arrow-white.png";

// Items 
import Items from '../../assets/js/Glosary/FinancialEntities';

// Custom hook for glosary document title
import { useGlosaryDocumentTitle } from '../../hooks/useGlosaryDocumentTitle';

// Lesson Completed Pop Up component
import LessonCompletedPopUp from '../../components/LessonCompletedPopUp';

const FinancialEntitiesView = () => {
  // Custom title
  useGlosaryDocumentTitle("Entidades Financieras");

  // States for handling items and the current item index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextBtn, setNextBtn] = useState(false);
  const [animationClass, setAnimationClass] = useState(false);
  const [animationPopUpClass, setAnimationPopUpClass] = useState(false);

  // Voice Audio
  const AudioVoice = useRef(new Audio(Items[0].audio));
  
  // Congratulations Audio
  const CongratulationsSound = useRef(new Audio("/sounds/CongratulationsSound.mp3"));
  
  useEffect(() => {
    AudioVoice.current.src = Items[currentIndex].audio;
  }, [currentIndex]);

  const handleSound = () => {
    AudioVoice.current.play();

    // Time to set next button after audio
    setTimeout(() => {
      setNextBtn(true);
      setAnimationClass("right-bounce");
    }, 6200);
  }

  // Function to show the next item
  const handleNextItem = () => {
    if (currentIndex === Items.length - 1) {
      // Show alert when reaching the last item
      CongratulationsSound.current.play();

      setNextLessonPopUp(true);
      setAnimationPopUpClass("bounce-in");
    } else {
      // Move to the next item
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
    setNextBtn(false); // Hide the button until next sound is played
    setAnimationClass(""); // Remove the bounce animation
  }

  // Next lesson pop up states
  const [ nextLessonPopUp, setNextLessonPopUp ] = useState(false);
  
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
            <div className="title-section--glosary bg-orange">Entidades Financieras</div>
          </div>
          <div className="body--glosary flex-column">
            <img src={Items[currentIndex].img} alt="" />
            <div className="body-group--glosary">
              <div className="content-body-group--glosary">
                <button className="btn-audio--glosary bg-orange" onClick={handleSound}>
                  <img src={ListenAudioIcon} alt="" />
                </button>
                <div className="text-body--glosary">
                  <h2>{Items[currentIndex].title}</h2>
                  <p>{Items[currentIndex].description}</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {nextBtn && (
          <button className={`btn-next--glosary bg-orange ${animationClass}`} onClick={handleNextItem}>
            <img src={RightArrowNextIcon} alt="" />
          </button>
        )}

        {/* Next Lesson pop up */}
        {nextLessonPopUp && (
          <LessonCompletedPopUp 
            color= "#F28D35"
            btnTextColor= "#FFF"
            lesson="Entidades Financieras"
            img={RightArrowNextWhiteIcon}
            nextLessonUrl="/glosario/actitudes-financieras/"
            className={`popup-lesson-completed--glosary flex-column ${animationPopUpClass}`}
          />
        )}

        <Link to="/glosario" className="btn-come-back--glosary">
          <img src={LeftArrowComeBackIcon} alt="" />
        </Link>
      </main>
    </>
  )
}

export default FinancialEntitiesView;