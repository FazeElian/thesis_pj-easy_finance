import React from 'react'
import { useDocumentTitle } from '../../../hooks/useDocumentTitle'

const HelpView = () => {
  // custom hook for tabs title
  useDocumentTitle("Ayuda");

  return (
    <div>HelpView</div>
  )
}

export default HelpView