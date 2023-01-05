import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <NavLink to = '/'>Home</NavLink>
            <NavLink to = '/add-question'>Add Question</NavLink>
            <NavLink to = '/exam-home'>Exam</NavLink>
        </nav><br/>
    </div>
  )
}

export default Navbar