import React from 'react'

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
        <div className="close-popup-welcome--connect-and-learn">
            <button className="btn-close-popup-welcome--connect-and-learn" onClick={props.closeFunction}>
                <img src={ClosePopUpIcon} alt="Cerrar" loading="lazy" />
            </button>
        </div>
        <div className="top-popup-welcome--connect-and-learn">
            <img src={Logo} alt="Logo" loading="lazy" />
            <h2>Bievenido a</h2>
            <h3 style={{ color: props.txtColor }}>{props.nameGame}</h3>
        </div>
        <div className="bottom-popup-welcome--connect-and-learn">
            <h2>Aquí hay algunas instrucciones antes de empezar el juego:</h2>
            <ul className="items-bottom-popup-welcome--connect-and-learn">
                <li className="item-bottom-popup-welcome--connect-and-learn">
                    <img src={props.imgInstruction1} alt='' loading="lazy" />
                    {/* Selecciona solo lo necesario para preparar un sándwich. */}
                    {props.txtInstruction1}
                </li>
                <li className="item-bottom-popup-welcome--connect-and-learn">
                    <img src={props.imgInstruction2} alt='' loading="lazy" />
                    {/* No gastes más de tu presupuesto y ahorra lo máximo posible. */}
                    {props.txtInstruction2}                
                </li>
                <li className="item-bottom-popup-welcome--connect-and-learn">
                    <img src={MedalIcon} alt='' loading="lazy" />
                    {/* Antes de finalizar tu compra, revisa si has ahorrado la cantidad necesaria. Si lo logras, ¡felicidades! Si no, vuelve a ajustar.     */}
                    {props.txtInstruction3}            
                </li>
            </ul>
        </div>
    </div>
  )
}

export default WelcomePopUp