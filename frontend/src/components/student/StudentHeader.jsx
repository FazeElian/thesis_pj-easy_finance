import { Outlet } from "react-router-dom"

// Styles for this component
import "../../assets/css/components/student/StudentHeader.css";

const StudentHeader = () => {
  return (
    <>
      <header className="header">
        <h1 className="logo">Logo</h1>
        <h1>Menú de Navegación</h1>
        <h1>Perfil</h1>
      </header>
      <Outlet />
    </>
  )
}

export default StudentHeader