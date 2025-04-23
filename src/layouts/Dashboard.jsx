import './Dashboard.css'
import useTheme from '../hooks/useTheme'
import logoImg from '../assets/logo.png'
import { Icon } from '@iconify/react'
import { useAuthStore } from '../store/auth.store'
import { toastify } from '../helper/toastify'


const DashboardLayout = () => {
    const [ theme, toggleTheme ] = useTheme()

    const { setAuth, setUser } = useAuthStore()

    const themeIcon = theme ? 'mingcute:sun-fill' : 'material-symbols:clear-night'

    const logout = () => {
        setAuth(false)
        setUser({})
        toastify('Cierre de sesión exitoso', 'success')
    }


    return (
        <>

            <div className={`dashboard-layout ${theme ? 'dark' : ''}`}>

                <img src={logoImg} alt="logo" className='logo' />
                <div className='theme-container'>
                    <Icon icon={themeIcon} width="24" height="24" className='icon' onClick={toggleTheme} />
                    <button onClick={logout}>Logout</button>
                    <hr style={{ borderColor: 'var(--divider-color)', height: '0.5px' }} className='divider' />
                </div>


            </div>

      



        </>
    )
}
export default DashboardLayout