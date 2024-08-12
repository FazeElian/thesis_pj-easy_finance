import React, { useState } from "react"

// User authentication check custom hook
import useAuthCheck from "../../../../hooks/useAuthCheck";

// Styles for this component
import "../../../../assets/css/views/Games/ExpenseOrNeed/ExpenseOrNeedView.css";

// React beautiful dnd components
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ExpenseOrNeedView = () => {
  // User authentication function
  useAuthCheck();

  // const [columns, setColumns] = useState(columnsFromBackend);

  // const onDragEnd = (result, columns, setColumns) => {
  //   if (!result.destination) return;
  //   const { source, destination } = result;
  //   if (source.droppableId !== destination.droppableId) {
  //     const sourceColumn = columns[source.droppableId];
  //     const destColumn = columns[destination.droppableId];
  //     const sourceItems = [...sourceColumn.items];
  //     const destItems = [...destColumn.items];
  //     const [removed] = sourceItems.splice(source.index, 1);
  //     destItems.splice(destination.index, 0, removed);
  //     setColumns({
  //       ...columns,
  //       [source.droppableId]: {
  //         ...sourceColumn,
  //         items: sourceItems,
  //       },
  //       [destination.droppableId]: {
  //         ...destColumn,
  //         items: destItems,
  //       },
  //     });
  //   } else {
  //     const column = columns[source.droppableId];
  //     const copiedItems = [...column.items];
  //     const [removed] = copiedItems.splice(source.index, 1);
  //     copiedItems.splice(destination.index, 0, removed);
  //     setColumns({
  //       ...columns,
  //       [source.droppableId]: {
  //         ...column,
  //         items: copiedItems,
  //       },
  //     });
  //   }
  // };

  return (
    <main className="content-game content-game-horizontal">
      {/* <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <Container>
          <TaskColumnStyles>
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <Droppable key={columnId} droppableId={columnId}>
                  {(provided, snapshot) => (
                    <TaskList
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      <Title>{column.title}</Title>
                      {column.items.map((item, index) => (
                        <TaskCard key={item} item={item} index={index} />
                      ))}
                      {provided.placeholder}
                    </TaskList>
                  )}
                </Droppable>
              );
            })}
          </TaskColumnStyles>
        </Container>
      </DragDropContext> */}
      <section className="cont-option--expense-or-need cont-expenses--expense-or-need">
        <div className="title-option--expense-or-need">
          Gastos
        </div>
      </section>
      <section className="cont-options---expense-or-need">
        Draggable Items
      </section>
      <section className="cont-option--expense-or-need cont-needs--expense-or-need">
        <div className="title-option--expense-or-need">
          Necesidades
        </div>
      </section>
    </main>
  )
}

export default ExpenseOrNeedView