import React from 'react'
import { Link } from 'react-router-dom';

// Styles for this component
import "../../assets/sass/views/GlosaryView.scss";
import "../../assets/sass/views/ItemGlosaryView.scss";

// Images - Icons
  // Bank item
  import Bank from "../../assets/img/GlosaryView/FinancialEntities/Bank.png";
  
  // Listen Audio icon
  import ListenAudioIcon from "../../assets/img/icons/listen-audio.png";

  // Right Arrow icon
  import RightArrowNextIcon from "../../assets/img/icons/arrow-right-next.png";

  // Left Arrow Icon
  import LeftArrowComeBackIcon from "../../assets/img/icons/left-arrow-come-back.png";

const FinancialEntitiesView = () => {
    return (
        <>
            <main className="py-top">
                <main className="content-centered flex-column">
                    <div className="top--glosary">
                        <div className="title-section--glosary bg-orange">Entidades Financieras</div>
                    </div>
                    <div className="body--glosary flex-column">
                        <img src={Bank} alt="" />

                        <div className="body-group--glosary body-group-big--glosary">
                            <button className="btn-audio--glosary bg-orange">
                                <img src={ListenAudioIcon} alt="" />
                            </button>
                            <h2>Banco</h2>
                        </div>
                        <div className="body-group--glosary body-group-small--glosary">
                            <button className="btn-audio--glosary bg-orange">
                                <img src={ListenAudioIcon} alt="" />
                            </button>
                            <h2>Es un lugar donde guardamos dinero de forma segura y nos ayuda a 
                                ahorrar o usarlo cuando lo necesitamos
                            </h2>
                        </div>
                    </div>
                </main>
                <button className="btn-next--glosary bg-orange">
                    <img src={RightArrowNextIcon} alt="" />
                </button>
                <Link to="/glosario" className="btn-come-back--glosary">
                    <img src={LeftArrowComeBackIcon} alt="" />
                </Link>
            </main>
        </>
    )
}

export default FinancialEntitiesView