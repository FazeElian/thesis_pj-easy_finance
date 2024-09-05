import React, {useState, useEffect } from 'react'

// Styles for this component
import "../assets/sass/views/FinancialSupervivenceView.scss";

// React beautiful dnd components
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Items
import items from '../assets/js/FinancialSupervivenceItems';

const FinancialSupervivenceView = () => {
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
        // alert("¡Correcto! El ítem ha sido clasificado correctamente.");

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
            // alert("¡Todos los ítems han sido clasificados correctamente!");
            return prevIndex;
          }
        });
      } else {
        // alert("Incorrecto. El ítem volverá a la columna de no clasificados.");

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

  return (
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
      </section>
      <div style={{ display: 'none' }}>
        {currentIndexItem + 1}
      </div>
    </main>
  );
}

export default FinancialSupervivenceView