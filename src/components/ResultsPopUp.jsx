import React from 'react'
import { Link } from 'react-router-dom'

const ResultsPopUp = (props) => {
  return (
    <div className={props.className}>
      <div className="content-popup-results--pop-up">
        <div className="top-popup-results--pop-up">
          <h1 className="rainbow-text">Felicitaciones !</h1>
          <h2>{props.message}</h2>
          <Link to={props.formLink} className="btn-continue--pop-up" target='_blank'>
            Continuar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ResultsPopUp