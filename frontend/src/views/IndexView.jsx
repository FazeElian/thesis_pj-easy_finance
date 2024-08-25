import React from 'react'

import { useDocumentTitle } from '../hooks/useDocumentTitle'

const IndexView = () => {
  // custom hook for tabs title
  useDocumentTitle("Página Principal");

  return (
    <main className="content content-index">
    </main>
  )
}

export default IndexView