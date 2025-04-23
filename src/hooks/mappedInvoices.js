import { useEffect, useState } from 'react'
import { getInvoices, getInvoiceById } from '../services/invoices.service'
import { mappedInvoices } from '../helper/mappedInvoices'


export const useMappedInvoices = (id) => {
    const [invoices, setInvoices] = useState([])
    const [invoiceById, setInvoiceById] = useState([])
    
    const fetchInvoices = async () => {
        try {
            const response = await getInvoices()
            setInvoices(mappedInvoices(response))
            return response
        } catch (error) {
            console.log(error)
        }
    }

    const fetchInvoiceById = async (id) => {
        try {
            const response = await getInvoiceById(id)
            setInvoiceById(mappedInvoices(response))
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(id) {
            fetchInvoiceById(id)
        } else {
            fetchInvoices()
        }
    }, [id])

   

    return {invoices, invoiceById}
}
