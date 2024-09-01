import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useGameDocumentTitle } from "../../../../hooks/useGameDocumentTitle";
import "../../../../assets/css/views/Games/ExpenseOrNeed/ExpenseOrNeedView.css";

// Items
import items from "./ExpensesAndNeedsInfo";

// Pop Up
import SuccessPopUp from "./SuccessPopUp";

const ExpenseOrNeedView = () => {
  useGameDocumentTitle("¿Gasto o Necesidad?");

  const [shuffledItems, setShuffledItems] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
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
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupTitleMessage, setPopupTitleMessage] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

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
    const destColumn = columns[destination.droppableId];
    const [movedItem] = sourceColumn.items.splice(source.index, 1);

    if (source.droppableId !== destination.droppableId) {
      if (
        (destination.droppableId === "expenses" && movedItem.section === "expenses") ||
        (destination.droppableId === "needs" && movedItem.section === "needs")
      ) {
        setPopupTitleMessage("Felicitaciones");
        setPopupMessage("¡Correcto! El ítem ha sido clasificado correctamente.");
        setPopupVisible(true);

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
            setPopupMessage("¡Todos los ítems han sido clasificados correctamente!");
            setPopupVisible(true);
            return prevIndex;
          }
        });
      } else {
        setPopupMessage("Incorrecto. El ítem volverá a la columna de no clasificados.");
        setPopupVisible(true);

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

  // Function to close the popup
  const closePopup = () => {
    setPopupVisible(false);
  };

  const filteredItems = columns.nonClasified.items;

  return (
    <main className="content-game content-game-horizontal">
      <section className="cont--expense-or-need">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="expenses">
            {(provided) => (
              <div
                className="cont-option--expense-or-need cont-option-expense--expense-or-need"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="cont-title--expense-or-need">Gasto</div>
                <div className="cont-options-option-expense-or-need">
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

          <Droppable droppableId="nonClasified">
            {(provided) => (
              <div
                className="cont-items--expense-or-need"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="content-items--expense-or-need">
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
              </div>
            )}
          </Droppable>

          <Droppable droppableId="needs">
            {(provided) => (
              <div
                className="cont-option--expense-or-need cont-option-need--expense-or-need"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="cont-title--expense-or-need">Necesidad</div>
                <div className="cont-options-option-expense-or-need cont-options-option-need-expense-or-need">
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
        </DragDropContext>
        <SuccessPopUp
          titleMessage={popupTitleMessage}
          message={popupMessage}
          visible={popupVisible}
          onClose={closePopup}
          autoClose={true} // Set autoClose to true
        />
      </section>
    </main>
  );
};

export default ExpenseOrNeedView;
