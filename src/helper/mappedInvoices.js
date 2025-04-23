export const mappedInvoices = (invoices) => {
    if (!invoices) return []
    
    // Si es un objeto único, lo convertimos en array
    const invoicesArray = Array.isArray(invoices) ? invoices : [invoices]
    
    return invoicesArray.map(invoice => ({
        id: invoice.id,
        idInvoice: invoice.idInvoice,
        dueDate: invoice.invoiceDate,
        client: invoice.CLIENT,
        amount: invoice.AMOUNT,
        status: invoice.STATUS,
        clientEmail: invoice.clientEmail,
        clientStreet: invoice.clientStreet,
        clientCity: invoice.clientCity,
        clientPostalCode: invoice.clientPostalCode,
        clientCountry: invoice.clientCountry,
    }))
}