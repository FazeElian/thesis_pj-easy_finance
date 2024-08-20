import React from 'react'

import { useDocumentTitle } from '../../../hooks/useDocumentTitle'

const ProfileView = () => {
  // custom hook for tabs title
  useDocumentTitle("Perfil");

  return (
    <div>ProfileView</div>
  )
}

export default ProfileView