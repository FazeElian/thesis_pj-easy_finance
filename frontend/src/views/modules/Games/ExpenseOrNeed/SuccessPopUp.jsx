import React from 'react'

// Styles for this component
import "../../../../assets/css/views/Games/ExpenseOrNeed/ExpenseOrNeedView.css";

const SuccessPopUp = ({ titleMessage, message, visible, onClose }) => {
  return (
    <div className="content-popup-success--expense-or-need">
      <h1>{titleMessage}</h1>
      <h2>{message}</h2>
    </div>
  )
}

export default SuccessPopUp