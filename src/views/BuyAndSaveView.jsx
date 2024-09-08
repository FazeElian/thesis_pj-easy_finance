import React, { useEffect, useState } from 'react'

// Header component
import Header from '../components/Header'

// Styles for this component
import "../assets/sass/views/BuyAndSaveView.scss";
import "../assets/sass/views/ConnectAndLearnView.scss";

// Images - icons
  // People
  import People from "../assets/img/BuyAndSaveView/people.webp";
  
  // Logo
  import Logo from "../assets/img/Logo (v.02).webp";

  // Sandwich
  import SandWich from "../assets/img/BuyAndSaveView/sandwich.png";

  // Close Pop up icon
  import ClosePopUpIcon from "../assets/img/icons/close-popup.webp";

  // Cart icon
  import CartIcon from "../assets/img/icons/cart.webp";

  // Opposite Horizontal Arrows icon
  import SaveIcon from "../assets/img/icons/save.webp";

  // Medal icon
  import MedalIcon from "../assets/img/icons/medal.webp";

// Items
import Items from '../assets/js/BuyAndSaveItems';

// Custom hook for game document title
import { useGameDocumentTitle } from "../hooks/useGameDocumentTitle";

const BuyAndSaveView = () => {
  // Custom title
  useGameDocumentTitle("Compra y Ahorra");

  // Pop ups states
  const [ welcomePopUp, setWelcomePopUp ] = useState(false);
  const [ instructionsPopUp, setInstructionsPopUp ] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  // Close welcome pop up function
  const closeWelcomePopUp = () => {
    setAnimationClass("bounce-out");
    setTimeout(() => {
      setWelcomePopUp(false);

      setTimeout(() => {
        setInstructionsPopUp(true);
        setAnimationClass("bounce-in");

        const instructionsAutoCloseTimerId = setTimeout(() => {
          setAnimationClass("bounce-out");
          setTimeout(() => {
            setInstructionsPopUp(false);
          }, 1000);
        }, 8000);

        return () => clearTimeout(instructionsAutoCloseTimerId);
      }, 2000);
    }, 1000);
  }

  useEffect(() => {
    // Mostrar el popup de bienvenida al montar el componente
    setWelcomePopUp(true);
    setAnimationClass("bounce-in");
  
    const welcomeTimerId = setTimeout(() => {
      setAnimationClass("bounce-out");
      const hideWelcomeTimerId = setTimeout(() => {
        setWelcomePopUp(false);
        setTimeout(() => {
          setInstructionsPopUp(true);
          setAnimationClass("bounce-in");

          const instructionsAutoCloseTimerId = setTimeout(() => {
            setAnimationClass("bounce-out");
            setTimeout(() => {
              setInstructionsPopUp(false);
            }, 1000);
          }, 8000);

          return () => clearTimeout(instructionsAutoCloseTimerId);
        }, 1000);
      }, 1000);
      return () => clearTimeout(hideWelcomeTimerId);
    }, 20000);

    return () => {
      clearTimeout(welcomeTimerId);
    };
  }, []);
  
  const closeInstructionsPopUp = () => {
    setAnimationClass("bounce-out");
    setTimeout(() => {
      setInstructionsPopUp(false);
    }, 1000);
  };

  return (
    <>
      {/* Header */}
      <Header 
        bgColor="bg-blue-low-opacity" 
        btnColor="bg-blue"
        bderColor="bder-blue-3"
      />
      
      <main className="py-top">
        <section className="bg--buy-and-save">
          <div className="cont-img--buy-and-save">
            <img src={People} alt="" />
          </div>
          <div className="cont-list-prods--buy-and-save">
            <div className="list-prods--buy-and-save flex-column">
              <div className="title-list-prods--buy-and-save">
                <h1>Lista de <br /> Compras</h1>
              </div>
              <table className="table-prods--buy-and-save flex-column">
                <thead className="th-table-prods--buy-and-save">
                  <tr className="table-prods-w-75">Producto</tr>
                  <tr className="table-prods-w-25">Precio</tr>
                </thead>

                {/* Items */}
                {Items.map ((item) => (
                  <tbody className="tb-table-prods--buy-and-save" key={item.id}>
                    <td className="tb-item-table-prods--buy-and-save">
                      <div className="table-prods-w-75">
                        <input type="checkbox" name={item.id} id="slct-prod" />
                        {item.name} 
                      </div>
                      <div className="table-prods-w-25">
                        {item.price}
                      </div>
                    </td>
                  </tbody>
                ))}
              </table>

              <div className="balance--buy-and-save">
                <h2>Presupuesto: <h3>10.000 $</h3></h2>
              </div>

              <div className="cont-btn-pay--buy-and-save">
                <button className="btn-pay--buy-and-save">Pagar</button>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome pop up */}
        {welcomePopUp && (
          <div className={`popup-welcome--connect-and-learn ${animationClass}`}>
            <div className="close-popup-welcome--connect-and-learn">
              <button className="btn-close-popup-welcome--connect-and-learn" onClick={closeWelcomePopUp}>
                <img src={ClosePopUpIcon} alt="Cerrar" loading="lazy" />
              </button>
            </div>
            <div className="top-popup-welcome--connect-and-learn">
              <img src={Logo} alt="Logo" loading="lazy" />
              <h2>Bievenido a</h2>
              <h3>Supervivencia Financiera!</h3>
            </div>
            <div className="bottom-popup-welcome--connect-and-learn">
              <h2>Aquí hay algunas instrucciones antes de empezar el juego:</h2>
              <ul className="items-bottom-popup-welcome--connect-and-learn">
                <li className="item-bottom-popup-welcome--connect-and-learn">
                  <img src={CartIcon} alt='' loading="lazy" />
                  Selecciona solo lo necesario para preparar un sándwich.
                </li>
                <li className="item-bottom-popup-welcome--connect-and-learn">
                  <img src={SaveIcon} alt='' loading="lazy" />
                  No gastes más de tu presupuesto y ahorra lo máximo posible.                
                </li>
                <li className="item-bottom-popup-welcome--connect-and-learn">
                  <img src={MedalIcon} alt='' loading="lazy" />
                  Antes de finalizar tu compra, revisa si has ahorrado la cantidad necesaria. Si lo logras, ¡felicidades! Si no, vuelve a ajustar.                
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Instructions pop up */}
        {instructionsPopUp && (
          <div className={`popup-instructions--buy-and-save ${animationClass}`}>
            <div className="close-popup-instructions--buy-and-save">
              <button className="btn-close-popup-instructions--buy-and-save" onClick={closeInstructionsPopUp}>
                <img src={ClosePopUpIcon} alt="Cerrar" loading="lazy" />
              </button>
            </div>
            <div className="bottom-popup-instructions--buy-and-save">
              <h1>Misión: <h2>Preparar un Sándwich:</h2></h1>
              <img src={SandWich} alt="" />
              <p>Elige los productos necesarios de acuerdo a tu Presupuesto. Solo puedes elegir <b>(5)</b></p>
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default BuyAndSaveView