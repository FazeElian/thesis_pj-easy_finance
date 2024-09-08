import React, { useEffect } from 'react'

const NotFoundView = (title) => {
  useEffect(() => {
    document.title = `Error 404 | Página no encontrada`;
  }, [title]);

  return (
    <div>Página no Encontrada</div>
  )
}

export default NotFoundView