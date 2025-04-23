

import { useAuthStore } from '../store/auth.store'
import { Navigate } from 'react-router-dom'


const HasPermission = () => {
    return <>
        <h1>No tienes permisos para acceder a esta página</h1>
    </>
}

const ProtectedRoute = ({ children, allowRoles }) => {


    const { isAuthenticated, user } = useAuthStore()
    console.log(allowRoles.includes(user.role))



    return (
        <>
            {allowRoles && !allowRoles.includes(user.role) ? <HasPermission/>: isAuthenticated ? children : <Navigate to="/login" />}
        </>
    )
}

export default ProtectedRoute