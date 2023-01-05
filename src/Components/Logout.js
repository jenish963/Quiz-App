import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

function Logout() {

    const auth = useAuth()
    const navigate = useNavigate()

    const handleClick = () => {
        auth.logout()
        navigate('/')
        localStorage.removeItem("userData")
        window.location.reload()
    }

  return (
    <div>
        <div>
            <h1>Wel-Come {localStorage.getItem("userData")}</h1>
        </div>
        <button onClick={handleClick}>LogOut</button>
    </div>
  )
}

export default Logout