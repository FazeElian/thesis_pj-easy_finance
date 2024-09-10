import React from 'react'
import { Link } from 'react-router-dom';

// Styles for this component
import "../assets/sass/components/PopUps.scss";

// Images - icons
  // Trophy Lesson
  import TrophyLesson from "../assets/img/TrophyLesson.webp";

const LessonCompletedPopUp = (props) => {
  return (
    <div className={props.className} style={{ border: `3px solid ${props.color}` }}>
      <img src={TrophyLesson} alt="" />
      <h2>Has completado la Sección de: <h3 style={{ color: `${props.color}` }}>{props.lesson}</h3></h2>
      <Link
        to={props.nextLessonUrl}
        className="btn-next-lesson--glosary" 
        style={{ 
          backgroundColor: `${props.color}`, 
          color: `${props.btnTextColor}` 
        }}
      >
        Ir a la siguiente lección
        <img src={props.img} alt="" />
      </Link>
    </div>
  )
}

export default LessonCompletedPopUp