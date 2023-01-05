import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'
import Logout from './Logout'

function Home() {

    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const userLogin = useRef()
    const userData = localStorage.getItem("userData")

    localStorage.removeItem("Ans")

    const handleClick = () => {
        auth.login(user)
        navigate('/', {replace: true})
        if (userLogin.current.value === auth.user) {
          localStorage.setItem("userData", auth.user)
        }
    }

  return (
    <div>
        { userData ? 
        <Logout/> :
        <><label>User Name: {''}<input type='text' ref={userLogin} onChange={(e) => setUser(e.target.value)} /></label><button onClick={handleClick}>Login</button></>
        }
    </div>
  )
}

export default Home