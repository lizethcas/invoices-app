import { apiRoutes } from './apiRoutes'


export const createInvoice = async (values) => {
    const response = await fetch(apiRoutes.invoices.create, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
    console.log(response)
}


export const getInvoices = async () => {
    try {
        const response = await fetch(apiRoutes.invoices.get)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getInvoiceById = async (id) => {
    const url = apiRoutes.invoices.getById(id)
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const updateInvoice = async (id, values) => {
    const url = apiRoutes.invoices.getById.replace(':id', id)
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
    const data = await response.json()
    return data
}

export const deleteInvoice = async (id) => {
    const url = apiRoutes.invoices.getById.replace(':id', id)
    try {
        const response = await fetch(url, {
            method: 'DELETE'
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

