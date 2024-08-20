// Styles for this component
import "../../assets/css/views/DashboardView.css";

// User authentication check custom hook
import useAuthCheck from "../../hooks/useAuthCheck";

import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const DashboardView = () => {
  // custom hook for tabs title
  useDocumentTitle("Inicio");

  // User authentication function
  useAuthCheck();

  return (
    <main className="content">
      <h1>Bienvenido Usuario !</h1>
    </main>
  );
};

export default DashboardView;
