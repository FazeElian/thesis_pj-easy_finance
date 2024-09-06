import React from 'react'

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
  
const BasicConceptsView = () => {
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
              <button className="btn-audio--glosary bg-yellow">
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
        <button className="btn-next--glosary bg-yellow">
          <img src={RightArrowNextIcon} alt="" />
        </button>
      </main>
    </>
  )
}

export default BasicConceptsView