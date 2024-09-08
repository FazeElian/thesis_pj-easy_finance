import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
  
// Items 
import Items from '../../assets/js/Glosary/FinancialAttitudes';

// Custom hook for glosary document title
import { useGlosaryDocumentTitle } from '../../hooks/useGlosaryDocumentTitle';

const FinancialAttitudesView = () => {
  // Custom title
  useGlosaryDocumentTitle("Actitudes Financieras");

  // Routes redirection
  const navigate = useNavigate();

  // States for handling items and the current item index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextBtn, setNextBtn] = useState(false);
  const [animationClass, setAnimationClass] = useState(false);

  // Array of items with paragraphs and names

  // Voice Audio
  const AudioVoice = useRef(new Audio(Items[0].audio));

  useEffect(() => {
    AudioVoice.current.src = Items[currentIndex].audio;
  }, [currentIndex]);

  const handleSound = () => {
    AudioVoice.current.play();

    // Time to set next button after audio
    setTimeout(() => {
      setNextBtn(true);
      setAnimationClass("right-bounce");
    }, 5500);
  }

  // Function to show the next item
  const handleNextItem = () => {
    if (currentIndex === Items.length - 1) {
      // Show alert when reaching the last item
      alert("Has llegado al final de las Actitudes Financieras!");
      navigate("/glosario");
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
            <div className="title-section--glosary bg-red">Actitudes Financieras</div>
          </div>
          <div className="body--glosary flex-column">
            <img src={Items[currentIndex].img} alt="" />
            <div className="body-group--glosary">
              <div className="content-body-group--glosary">
                <button className="btn-audio--glosary bg-red" onClick={handleSound}>
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
          <button className={`btn-next--glosary bg-red ${animationClass}`} onClick={handleNextItem}>
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

export default FinancialAttitudesView;