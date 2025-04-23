import { Routes, Route, Link } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import './App.css'

import { useAuthStore } from './store/auth.store'
import ProtectedRoute from './components/ProtectedRoute'


const InvoicesPage = lazy(() => import('./pages/invoicesPage'))
const ViewInvoice = lazy(() => import('./pages/viewInovice'))
const NotFound = lazy(() => import('./pages/NotFound'))


function App() {
  const { isAuthenticated } = useAuthStore()


  return (
    <>

      {
        !isAuthenticated &&
        <nav>
          <ul style={{ display: 'flex', gap: '10px', padding: '10px', justifyContent: 'space-between', alignItems: 'center', width: '80%', margin: '0 auto' }}>
            <li style={{ listStyle: 'none' }}>
              <Link to="/">
                Home
              </Link>
            </li>
            <li style={{ listStyle: 'none' }}>
              <Link to="/about">About</Link>
            </li>
            <li style={{ listStyle: 'none' }}>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      }



      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/invoices' element={
            <ProtectedRoute allowRoles={['admin']}>
              <InvoicesPage />
            </ProtectedRoute>
          } />
          <Route path='/invoices/:id' element={
            <ProtectedRoute allowRoles={['admin']}>
              <ViewInvoice />
            </ProtectedRoute>
          } />

          <Route path='*' element={<NotFound />} />
        </Routes>



      </Suspense>
      <ToastContainer position='top-center' autoClose={3000} />
    </>
  )
}

export default App