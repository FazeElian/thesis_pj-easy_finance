import React, { useEffect, useState } from 'react'

// Header component
import Header from '../components/Header'

// Welcome Pop up component
import WelcomePopUp from '../components/WelcomePopUp';

// Results Pop up component
import ResultsPopUp from '../components/ResultsPopUp';

// Styles for this component
import "../assets/sass/views/BuyAndSaveView.scss";
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

const BuyAndSaveView = () => {
  // Custom title
  useGameDocumentTitle("Compra y Ahorra");

  // Pop ups states
  const [ welcomePopUp, setWelcomePopUp ] = useState(false);
  const [ instructionsPopUp, setInstructionsPopUp ] = useState(false);
  const [ productsListPopUp, setProductsListPopUp ] = useState(false);
  const [ animationClass, setAnimationClass ] = useState("");
  const [animationResultsClass, setAnimationResultsClass] = useState("");

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

  // Total price states
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCheckboxChange = (id) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedItems = {
        ...prevSelectedItems,
        [id]: !prevSelectedItems[id],
      };
  
      const newTotalPrice = Object.keys(updatedItems)
        .filter(key => updatedItems[key])
        .reduce((sum, key) => {
          const selectedItem = Items.find(item => item.id === key);
          return sum + (selectedItem.price ? selectedItem.price : 0);
        }, 0);
  
        setTotalPrice(newTotalPrice.toLocaleString('en-US'));
  
      return updatedItems;
    });
  };

  // Pre seleted items to enable products list pop up
  const preSelectedItems = Object.keys(selectedItems).filter(id => selectedItems[id]);

  useEffect(() => {
    if (preSelectedItems.length > 0) {
      setProductsListPopUp(true);
    } else {
      setProductsListPopUp(false);
    }
  }, [preSelectedItems])

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
        setAnimationResultsClass("bounce-in");
      } else {
        alert(`Has seleccionado estos productos innecesarios: ${incorrectItemsNames}.`);
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
                <h1>Lista de <br /> Productos</h1>
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
                        {item.price.toLocaleString('en-US')} $
                      </div>
                    </td>
                  </tbody>
                ))}
              </table>

              <div className="balance--buy-and-save">
                <h2>Presupuesto: <h3>6,500 $</h3></h2>
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
            className={`popup-welcome--pop-up bg-yellow-low-opacity bder-yellow-3 ${animationClass}`}
            nameGame="Compra y Ahorra"
            txtColor="#F2BB16"
            closeFunction={closeWelcomePopUp}
            imgInstruction1={CartIcon}
            txtInstruction1="Selecciona solo lo necesario para preparar un sándwich."
            imgInstruction2={SaveIcon}
            txtInstruction2="No gastes más de tu presupuesto y ahorra lo máximo posible."
            txtInstruction3="Antes de finalizar tu compra, revisa si has seleccionado los productos correctos. Si lo logras, ¡felicidades! Si no, cámbialos por los adecuados"
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
              <p>Elige los productos necesarios de acuerdo a tu Presupuesto. Solo puedes elegir cinco <b>(5)</b></p>
            </div>
          </div>
        )}

        {/* Products Table */}
        {productsListPopUp && (
          <table className="popup-table-products-list--pop-up">
            <div className="top-table-products-list--pop-up">
              Lista de Compra
            </div>

            {/* Head */}
            <thead className="th-table-products-list--pop-up">
              <tr className="table-prods-w-75">Producto</tr>
              <tr className="table-prods-w-25">Precio</tr>
            </thead>

            {/* Body */}
            {preSelectedItems.map(id => {
              const item = Items.find(item => item.id === id);
              return (
                <tbody className="tb-table-products-list--pop-up" key={item.id}>
                  <td className="table-prods-w-75">{item.name}</td>
                  <td className="table-prods-w-25">{item.price.toLocaleString('en-US')} $</td>
                </tbody>
              )
            })}

            {/* Footer */}
            <tfoot className="tf-table-products-list--pop-up">
              <tr className="title-total-tf-table-products-list--pop-up item-total-tf-table-products-list--pop-up">
                Total:
              </tr>
              <tr className="amount-total-tf-table-products-list--pop-up item-total-tf-table-products-list--pop-up">
                {totalPrice} $
              </tr>
            </tfoot>
          </table>
        )}

        {resultsPopUp && (
          <ResultsPopUp 
            className={`popup-results--pop-up ${animationResultsClass}`}
            message="Has seleccionado correctamente los productos!"
            formLink="https://forms.gle/57mQ32uRK4t4gPFg9"
          />
        )}
      </main>
    </>
  )
}

export default BuyAndSaveView