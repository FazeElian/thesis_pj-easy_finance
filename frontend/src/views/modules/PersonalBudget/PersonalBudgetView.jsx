import React from 'react'

import { useDocumentTitle } from '../../../hooks/useDocumentTitle'

const PersonalBudgetView = () => {
  // custom hook for tabs title
  useDocumentTitle("Mi Presupuesto");

  return (
    <div>PersonalBudgetView</div>
  )
}

export default PersonalBudgetView