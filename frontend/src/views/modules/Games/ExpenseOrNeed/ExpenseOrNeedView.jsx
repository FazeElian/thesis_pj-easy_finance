import React from "react"

// User authentication check custom hook
import useAuthCheck from "../../../../hooks/useAuthCheck";

// Styles for this component
import "../../../../assets/css/views/Games/ExpenseOrNeed/ExpenseOrNeedView.css";

const ExpenseOrNeedView = () => {
  // User authentication function
  useAuthCheck();

  return (
    <main className="content-game content-game-horizontal">
      <section className="cont-option--expense-or-need cont-expenses--expense-or-need">
        <div className="title-option--expense-or-need">
          Gastos
        </div>
      </section>
      <section className="cont-option--expense-or-need cont-needs--expense-or-need">
        <div className="title-option--expense-or-need">
          Necesidades
        </div>
      </section>
      <section className="cont-options---expense-or-need">
        
      </section>
    </main>
  )
}

export default ExpenseOrNeedView