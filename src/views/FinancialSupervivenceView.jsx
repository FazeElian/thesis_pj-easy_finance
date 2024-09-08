import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

// Header component
import Header from '../components/Header';

// Styles for this component
import "../assets/sass/views/FinancialSupervivenceView.scss";
import "../assets/sass/views/ConnectAndLearnView.scss";

// React beautiful dnd components
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Items
import items from '../assets/js/FinancialSupervivenceItems';

// Images - Icons
  // Logo
  import Logo from "../assets/img/Logo (v.02).webp";

  // Close Pop up icon
  import ClosePopUpIcon from "../assets/img/icons/close-popup.webp";

  // View icon
  import ViewIcon from "../assets/img/icons/view.webp";

  // Opposite Horizontal Arrows icon
  import OppositeHorizontalArrowsIcon from "../assets/img/icons/oppposite-horizontal-arrows.webp";

  // Medal icon
  import MedalIcon from "../assets/img/icons/medal.webp";

// Custom hook for game document title
import { useGameDocumentTitle } from "../hooks/useGameDocumentTitle";

const FinancialSupervivenceView = () => {
  // Custom title
  useGameDocumentTitle("Supervivencia Financiera");

  const [shuffledItems, setShuffledItems] = useState([]);
  const [currentIndexItem ,setCurrentItemIndex] = useState(0);
  const [columns, setColumns] = useState({
    nonClasified: {
      items: []
    },
    expenses: {
      items: []
    },
    needs: {
      items: []
    },
  });

  // Correct answer effect sound
  const matchSound = useRef(null);
  const shuffleSound = useRef(null);

  useEffect(() => {
    matchSound.current = new Audio("/sounds/MatchSound.mp3");
    shuffleSound.current = new Audio("/sounds/ShufflingSound.mp3");
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const shuffled = shuffleArray([...items]);
    setShuffledItems(shuffled);
    setColumns({
      nonClasified: {
        items: shuffled.length > 0 ? [shuffled[0]] : []
      },
      expenses: {
        items: []
      },
      needs: {
        items: []
      }
    });
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const sourceColumn = columns[source.droppableId];
    const [movedItem] = sourceColumn.items.splice(source.index, 1);

    if (source.droppableId !== destination.droppableId) {
      if (
        (destination.droppableId === "expenses" && movedItem.section === "expenses") ||
        (destination.droppableId === "needs" && movedItem.section === "needs")
      ) {
        if (matchSound.current) {
          matchSound.current.play();
        }

        // Show pop up
        setPopUpVisible(true);
        setAnimationClass('fade-in');

        setColumns((prevColumns) => ({
          nonClasified: {
            items: prevColumns.nonClasified.items.filter(item => item.id !== movedItem.id)
          },
          expenses: destination.droppableId === "expenses" ? {
            items: [...prevColumns.expenses.items, movedItem]
          } : prevColumns.expenses,
          needs: destination.droppableId === "needs" ? {
            items: [...prevColumns.needs.items, movedItem]
          } : prevColumns.needs
        }));

        setCurrentItemIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex < shuffledItems.length) {
            setColumns((prevColumns) => ({
              nonClasified: {
                items: [shuffledItems[nextIndex]] // Show the next item
              },
              expenses: prevColumns.expenses,
              needs: prevColumns.needs
            }));
            return nextIndex;
          } else {
            // Show results pop up
            setResultsPopUp(true);
            return prevIndex;
          }
        });
      } else {
        setColumns((prevColumns) => ({
          nonClasified: {
            items: [movedItem, ...prevColumns.nonClasified.items]
          },
          expenses: source.droppableId === "expenses" ? {
            items: prevColumns.expenses.items
          } : prevColumns.expenses,
          needs: source.droppableId === "needs" ? {
            items: prevColumns.needs.items
          } : prevColumns.needs
        }));
      }
    } else {
      const copiedItems = [...sourceColumn.items];
      const [movedItem] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, movedItem);

      setColumns((prevColumns) => ({
        ...prevColumns,
        [source.droppableId]: {
          items: copiedItems
        }
      }));
    }
  };

  const filteredItems = columns.nonClasified.items;

  // Pop up states
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [ resultsPopUp, setResultsPopUp ] = useState(false);
  const [ welcomePopUp, setWelcomePopUp ] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  // Hook useEffect to close the popup auto after 1.5 sec
  useEffect(() => {
    if (popUpVisible) {
      const timer = setTimeout(() => {
        setAnimationClass("fade-out");
        const closeTimer = setTimeout(() => {
          setPopUpVisible(false);
        }, 10000);
        return () => clearTimeout(closeTimer);
      }, 4000);
      return () => clearTimeout(timer);
    }
    setPopUpVisible(false);
  }, [popUpVisible]);

  // Close welcome pop up function
  const closeWelcomePopUp = () => {
    setAnimationClass("bounce-out");
    setTimeout(() => {
      setWelcomePopUp(false);
    }, 1000);
  }

  useEffect(() => {
    setWelcomePopUp(true);
    setAnimationClass("bounce-in");
  
    const showTimerId = setTimeout(() => {
      setAnimationClass("bounce-out");
      const hideTimerId = setTimeout(() => {
        setWelcomePopUp(false);
      }, 1000);
      return () => clearTimeout(hideTimerId);
    }, 4000);
  
    return () => {
      clearTimeout(showTimerId);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <Header 
        bgColor="bg-yellow" 
        btnColor="bg-red"
        bderColor="bder-black-2"
      />

      <main className="py-top bg-blue-red">
        <section className="cont-expense-or-need">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="needs">
              {(provided) => (
                <div
                  className="cont-item--expense-or-need cont-needs--expense-or-need"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div className="title-item--expense-or-need">Necesidad</div>
                  <div className="cont-options-option-expense-or-need cont-options-option-expense-expense-or-need">
                    {columns.needs.items.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="item--expense-or-need"
                          >
                            <img src={item.img} alt="" />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>

            <Droppable droppableId="nonClasified">
              {(provided) => (
                <div
                  className="cont-objects--expense-or-need"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {filteredItems.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="item--expense-or-need"
                        >
                          <img src={item.img} alt="" />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <Droppable droppableId="expenses">
              {(provided) => (
                <div
                  className="cont-item--expense-or-need cont-expenses--expense-or-need"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div className="title-item--expense-or-need">Gasto</div>
                  <div className="cont-options-option-expense-or-need cont-options-option-need-expense-or-need">
                    {columns.expenses.items.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="item--expense-or-need"
                          >
                            <img src={item.img} alt="" />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          </DragDropContext>

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
                    <img src={ViewIcon} alt='' loading="lazy" />
                    Mira el objeto en el centro de la pantalla. Decide si lo necesitas o es un gasto extra.
                  </li>
                  <li className="item-bottom-popup-welcome--connect-and-learn">
                    <img src={OppositeHorizontalArrowsIcon} alt='' loading="lazy" />
                    Usa el mouse para arrastrar el objeto hacia el lado correcto: 'Gasto' o 'Necesidad'.                 
                  </li>
                  <li className="item-bottom-popup-welcome--connect-and-learn">
                    <img src={MedalIcon} alt='' loading="lazy" />
                    ¡Ganas puntos cada vez que clasificas correctamente! Si te equivocas, no te preocupes, intenta de nuevo y sigue practicando.                 
                  </li>
                </ul>
              </div>
            </div>
          )}

          {popUpVisible && (
            <div className={`popup-cards-matched--connect-and-learn ${animationClass}`}>
              <div className="close-popup-cards-matched--connect-and-learn">
                <button className="btn-close-popup-cards-matched--connect-and-learn" onClick={() => setPopUpVisible(false)}>
                  <img src={ClosePopUpIcon} alt="Cerrar" loading="lazy" />
                </button>
              </div>
              <div className="text-popup-cards-matched--connect-and-learn">
                <h1 className="rainbow-text">Buen trabajo!</h1>
                <h2>Has clasificado correctamente el objeto ! </h2>
              </div>
            </div>
          )}

          {resultsPopUp && (
            <div className={`popup-results--connect-and-learn ${animationClass}`}>
              <div className="content-popup-results--connect-and-learn">
                <div className="top-popup-results--connect-and-learn">
                  <h1 className="rainbow-text">Felicitaciones !</h1>
                  <h2>Has clasificado correctamente todos los objetos!</h2>
                  <Link to="https://forms.gle/Mr2rjfEvS8KvmTcb8" className="btn-continue--connect-and-learn" target='_blank'>
                    Continuar
                  </Link>
                </div>
              </div>
            </div>
          )}
        </section>

        <div style={{ display: 'none' }}>
          {currentIndexItem + 1}
        </div>
      </main>
    </>
  );
}

export default FinancialSupervivenceView