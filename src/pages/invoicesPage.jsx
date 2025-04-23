import { useState, useMemo } from 'react'

import Header from '../components/Header/Header'
import Dashboard from '../layouts/Dashboard'
import InvoiceCard from '../components/InvoiceCard'
import useTheme from '../hooks/useTheme'

import { useMappedInvoices } from '../hooks/mappedInvoices'


const InvoicesPage = () => {

    const {invoices} = useMappedInvoices()
    const [selected, setSelected] = useState('All')
    const [theme, handleTheme] = useTheme()
   


    const filteredInvoices = useMemo(() => {
        if(!invoices) return []

        let filtered = invoices

        if(selected !== 'All') {
            filtered = filtered.filter(invoice => invoice.status === selected)
        }

        return filtered
    }, [invoices, selected])

    const handleSelected = (status) => {
        setSelected(status)
    }

    return (
        <>
            <Dashboard />
            <Header
                filteredInvoices={filteredInvoices}
                selected={selected}
                theme={theme}
                handleTheme={handleTheme}
                handleSelected={handleSelected}
            />
            <main className='invoice-container'>
                <InvoiceCard invoices={filteredInvoices} />
            </main>
        </>
    )
}

export default InvoicesPage