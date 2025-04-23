import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/auth.store'
import { getUserByEmail } from '../services/users.service'
import { useState } from 'react'
import { toastify } from '../helper/toastify'
const Login = () => {
    const navigate = useNavigate()
    const { setAuth, setUser } = useAuthStore()
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        try {
            const fields = Object.fromEntries(new FormData(e.target))
            
            if (!fields.email || !fields.password) {
                throw new Error('Por favor complete todos los campos')
            }

            const userData = await getUserByEmail(fields.email)           

            if (userData.length === 0) {
                throw new Error('Usuario no encontrado')
            }

            // Aquí deberías usar una función de hash para comparar contraseñas
            if (fields.password !== userData[0].password) {
                throw new Error('Usuario y/o contraseña incorrecta')
            }

            setAuth(true)
            setUser(userData[0])
            toastify('Inicio de sesión exitoso', 'success')
            userData[0].role === 'admin'? navigate('/invoices') : navigate('/')

        } catch (err) {
            toastify(err.message || 'Error al iniciar sesión', 'error')
            setError(err.message || 'Error al iniciar sesión')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="login-container">
            <h1>Iniciar Sesión</h1>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        type="email" 
                        placeholder="Correo electrónico" 
                        name='email' 
                        required 
                        disabled={isLoading}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        placeholder="Contraseña" 
                        name='password' 
                        required 
                        disabled={isLoading}
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
                </button>
            </form>
        </div>
    )
}

export default Login