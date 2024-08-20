import React, { useEffect } from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const NotFoundView = () => {
  // React hook for this tab title
  useEffect(() => {
    document.title = `Error 404 | Página no Encontrada`;
  } , []);

  return (
    <div>
      NotFound View
      <h1>Error 404</h1>
    </div>
  )
}

export default NotFoundView