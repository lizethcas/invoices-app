import { apiRoutes } from './apiRoutes'

export const getUserByEmail = async (email) => {
    try {
        const response = await fetch(apiRoutes.users.getByEmail(email))
        
        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status}`)
        }

        const data = await response.json()
        console.log('Respuesta del servicio:', data)
        return data
    } catch (error) {
        console.error('Error en getUserByEmail:', error)
        throw error
    }
}