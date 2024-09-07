import React from 'react'
import { Link } from 'react-router-dom';

// Header component
import Header from '../../components/Header';

// Styles for this component
import "../../assets/sass/views/GlosaryView.scss";
import "../../assets/sass/views/ItemGlosaryView.scss";

// Images - Icons
  // Responsability item
  import Responsability from "../../assets/img/GlosaryView/FinancialAttitudes/Responsability.png";
  
  // Listen Audio icon
  import ListenAudioIcon from "../../assets/img/icons/listen-audio.png";

  // Right Arrow icon
  import RightArrowNextIcon from "../../assets/img/icons/arrow-right-next.png";

  // Left Arrow Icon
  import LeftArrowComeBackIcon from "../../assets/img/icons/left-arrow-come-back.png";

const FinancialAttitudesView = () => {
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
                <img src={Responsability} alt="" />
                <div className="body-group--glosary body-group-big--glosary">
                    <button className="btn-audio--glosary bg-red">
                        <img src={ListenAudioIcon} alt="" />
                    </button>
                    <h2>Banco</h2>
                </div>
                <div className="body-group--glosary body-group-small--glosary">
                    <button className="btn-audio--glosary bg-red">
                        <img src={ListenAudioIcon} alt="" />
                    </button>
                    <h2>Es un lugar donde guardamos dinero de forma segura y nos ayuda a 
                        ahorrar o usarlo cuando lo necesitamos
                    </h2>
                </div>
            </div>
        </main>
        <button className="btn-next--glosary bg-red">
            <img src={RightArrowNextIcon} alt="" />
        </button>
        <Link to="/glosario" className="btn-come-back--glosary">
            <img src={LeftArrowComeBackIcon} alt="" />
        </Link>
      </main>
    </>  
  )
}

export default FinancialAttitudesView