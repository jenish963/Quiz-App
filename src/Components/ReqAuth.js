import { Navigate } from 'react-router-dom'
import { useAuth } from './Auth'

function ReqAuth({children}) {

    const auth = useAuth()

    if(!auth.user){
        return <Navigate to='/' />
    }

    return children
}

export default ReqAuth