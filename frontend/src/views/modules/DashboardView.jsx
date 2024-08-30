import React from 'react'

// User authentication check custom hook
// import useAuthCheck from "../../hooks/useAuthCheck";

import { useGameDocumentTitle } from '../../hooks/useGameDocumentTitle';
import GamesGalleryView from '../../components/GamesGallery';

const DashboardView = () => {
  // custom hook for tabs title
  useGameDocumentTitle("Galería de Juegos");

  // User authentication function
  // useAuthCheck();

  return (
    <>
      <GamesGalleryView />
    </>
  );
}

export default DashboardView