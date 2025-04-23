import { useParams, useNavigate } from 'react-router-dom'
import { useMappedInvoices } from '../hooks/mappedInvoices'
import Dashboard from '../layouts/Dashboard'
const ViewInvoice = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { invoiceById } = useMappedInvoices(id)


    return (
        <>
            <Dashboard />
            <main className='container'>
                {!invoiceById || invoiceById.length === 0 ? (
                    <div>Cargando...</div>
                ) : (
                    <div>
                        <h1>View Invoice</h1>
                        <p>Invoice ID: {invoiceById[0].idInvoice}</p>
                        <p>Invoice Amount: {invoiceById[0].amount}</p>
                        <p>Invoice Status: {invoiceById[0].status}</p>
                    </div>
                )}

                <button onClick={() => navigate(-1)}>Back</button>
            </main>
        </>
    )
}

export default ViewInvoice