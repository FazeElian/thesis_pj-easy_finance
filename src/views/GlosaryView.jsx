import React from 'react'
import { Link } from 'react-router-dom';

// Header component
import Header from '../components/Header';

// Left Arrow Icon
import LeftArrowComeBackIcon from "../assets/img/icons/left-arrow-come-back.webp";

// Styles for this view
import "../assets/sass/views/GlosaryView.scss";
import "../assets/sass/views/ItemGlosaryView.scss";

// Images - Icons
  // Basic Concepts
  import BasicConcepts from "../assets/img/GlosaryView/BasicConcepts.webp";

  // Financial Entities
  import FinancialEntities from "../assets/img/GlosaryView/FinancialEntities.webp";

  // Financial Attitudes
  import FinancialAttitudes from "../assets/img/GlosaryView/FinancialAttitudes.webp";

// Custom hook for document title
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const GlosaryView = () => {
  // Custom title
  useDocumentTitle("Glosario");

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
            <div className="title-section--glosary bg-red">Glosario</div>
          </div>
          <div className="gallery--glosary">
            <Link to="/glosario/conceptos-basicos" className="item-gallery--glosary bg-yellow-medium-opacity">
              <img src={BasicConcepts} alt="" />
              Conceptos Básicos
            </Link>
            <Link to="/glosario/entidades-financieras" className="item-gallery--glosary bg-orange-medium-opacity">
              <img src={FinancialEntities} alt="" />
              Entidades Financieras
            </Link>
            <Link to="/glosario/actitudes-financieras" className="item-gallery--glosary bg-red-medium-opacity">
              <img src={FinancialAttitudes} alt="" />
              Actitudes Financieras
            </Link>
          </div>
        </main>

        <Link to="/" className="btn-come-back--glosary">
          <img src={LeftArrowComeBackIcon} alt="" />
        </Link>
      </main>
    </>
  )
}

export default GlosaryView