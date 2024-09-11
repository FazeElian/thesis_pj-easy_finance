import React from 'react'

// Styles for this component
import "../assets/sass/components/PopUps.scss";

// Images - icons
    // Logo
    import Logo from "../assets/img/Logo (v.02).webp";

    // Close Pop up icon
    import ClosePopUpIcon from "../assets/img/icons/close-popup.webp";

    // Medal icon
    import MedalIcon from "../assets/img/icons/medal.webp";

const WelcomePopUp = (props) => {
  return (
    <div className={props.className}>
        <div className="close-popup-welcome--pop-up">
            <button className="btn-close-popup-welcome--pop-up" onClick={props.closeFunction}>
                <img src={ClosePopUpIcon} alt="Cerrar" loading="lazy" />
            </button>
        </div>
        <div className="top-popup-welcome--pop-up">
            <img src={Logo} alt="Logo" loading="lazy" />
            <h2>Bievenido a</h2>
            <h3 style={{ color: props.txtColor }}>{props.nameGame}</h3>
        </div>
        <div className="bottom-popup-welcome--pop-up">
            <h2>Aquí hay algunas instrucciones antes de empezar el juego:</h2>
            <ul className="items-bottom-popup-welcome--pop-up">
                <li className="item-bottom-popup-welcome--pop-up">
                    <img src={props.imgInstruction1} alt='' loading="lazy" />
                    {props.txtInstruction1}
                </li>
                <li className="item-bottom-popup-welcome--pop-up">
                    <img src={props.imgInstruction2} alt='' loading="lazy" />
                    {props.txtInstruction2}                
                </li>
                <li className="item-bottom-popup-welcome--pop-up">
                    <img src={MedalIcon} alt='' loading="lazy" />
                    {props.txtInstruction3}            
                </li>
            </ul>
        </div>
    </div>
  )
}

export default WelcomePopUp