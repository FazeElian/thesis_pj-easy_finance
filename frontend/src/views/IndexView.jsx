import React from 'react'

import { useDocumentTitle } from '../hooks/useDocumentTitle'

const IndexView = () => {
  // custom hook for tabs title
  useDocumentTitle("Página Principal");

  return (
    <main className="content">
      <h1>Index company View</h1>
      <br />
      <h2>Welcome user !</h2>
    </main>
  )
}

export default IndexView