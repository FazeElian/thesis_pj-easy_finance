import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

// Header component
import Header from '../components/Header'

// Styles for this component
import "../assets/sass/views/BuyAndSaveView.scss";
import "../assets/sass/views/ConnectAndLearnView.scss";
import "../assets/sass/components/PopUps.scss";

// Images - icons
  // People
  import People from "../assets/img/BuyAndSaveView/people.webp";

  // Sandwich
  import SandWich from "../assets/img/BuyAndSaveView/sandwich.webp";

  // Close Pop up icon
  import ClosePopUpIcon from "../assets/img/icons/close-popup.webp";

  // Cart icon
  import CartIcon from "../assets/img/icons/cart.webp";

  // Opposite Horizontal Arrows icon
  import SaveIcon from "../assets/img/icons/save.webp";

// Items
import Items from '../assets/js/BuyAndSaveItems';

// Custom hook for game document title
import { useGameDocumentTitle } from "../hooks/useGameDocumentTitle";

// Welcome Pop up component
import WelcomePopUp from '../components/WelcomePopUp';

const BuyAndSaveView = () => {
  // Custom title
  useGameDocumentTitle("Compra y Ahorra");

  // Pop ups states
  const [ welcomePopUp, setWelcomePopUp ] = useState(false);
  const [ instructionsPopUp, setInstructionsPopUp ] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  // Pop up results states
  const [ resultsPopUp, setResultsPopUp ] = useState(false);

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

  // Selected items states
  const [selectedItems, setSelectedItems] = useState({});

  const handleCheckboxChange = (id) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [id]: !prevSelectedItems[id]
    }));
  };

  // Pay function
  const handlePay = () => {
    // Filter the correct items that the user selected
    const selectedItemsIds = Object.keys(selectedItems).filter(id => selectedItems[id]);
    const correctItems = Items.filter(item => item.correct && selectedItems[item.id]);
    const incorrectItems = Items.filter(item => !item.correct && selectedItems[item.id]);

    // If the user select more than 5 items
    if (selectedItemsIds.length > 5) {
      alert('Puedes seleccionar un máximo de 5 productos.');
      return;
    }
      
    // If the user select less than 5 items
    if (selectedItemsIds.length < 5) {
      alert("Debes seleccionar al menos 5 productos")
      return;
    }

    // Names of the products selected
    // eslint-disable-next-line no-unused-vars
    const correctItemsNames = correctItems.map(item => item.name).join(', ');
    const incorrectItemsNames = incorrectItems.map(item => item.name).join(', ');

    // Mensaje de confirmación
    let message = `Has seleccionado estos productos: ${selectedItemsIds.map(id => Items.find(item => item.id === id).name).join(', ')}. ¿Deseas continuar?`;

    // Show confirmation message
    // eslint-disable-next-line no-restricted-globals
    const userConfirmed = confirm(message);

    if (userConfirmed) {
      if (correctItems.length === Items.filter(item => item.correct).length) {
        setResultsPopUp(true);
        setAnimationClass("bounce-in");
      } else {
        alert(`Has seleccionado estos productos innesesarios: ${incorrectItemsNames}.`);
        alert(`Has seleccionado estos productos innesesarios: ${incorrectItemsNames}.`);
      }
    } else {
      alert('Acción cancelada.');
    }
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
                        <input
                          type="checkbox"
                          name={item.id}
                          id="slct-prod"
                          checked={!!selectedItems[item.id]}
                          onChange={() => handleCheckboxChange(item.id)}
                        />
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
                <button className="btn-pay--buy-and-save" onClick={handlePay}>Pagar</button>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome pop up */}
        {welcomePopUp && (
          <WelcomePopUp 
            className={`popup-welcome--connect-and-learn bg-yellow-low-opacity bder-yellow-3 ${animationClass}`}
            nameGame="Supervicencia Financiera"
            txtColor="#F2BB16"
            closeFunction={closeWelcomePopUp}
            imgInstruction1={CartIcon}
            txtInstruction1="Selecciona solo lo necesario para preparar un sándwich."
            imgInstruction2={SaveIcon}
            txtInstruction2="No gastes más de tu presupuesto y ahorra la cantidad indicada."
            txtInstruction3="Antes de finalizar tu compra, revisa si has ahorrado la cantidad necesaria. Si lo logras, ¡felicidades! Si no, vuelve a ajustar."
          />
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

        {resultsPopUp && (
          <div className={`popup-results--connect-and-learn ${animationClass}`}>
            <div className="content-popup-results--connect-and-learn">
              <div className="top-popup-results--connect-and-learn">
                <h1 className="rainbow-text">Felicitaciones !</h1>
                <h2>Has seleccionado correctamente los productos!</h2>
                <Link to="https://forms.gle/57mQ32uRK4t4gPFg9" className="btn-continue--connect-and-learn" target='_blank'>
                  Continuar
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default BuyAndSaveView