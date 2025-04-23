const baseUrl = 'http://localhost:3000'

export const apiRoutes = {
    invoices: {
        create: `${baseUrl}/invoices`,
        get: `${baseUrl}/invoices`,
        getById: (id) => `${baseUrl}/invoices?idInvoice=${id}`,
    },
    users: {
        create: `${baseUrl}/users`,
        get: `${baseUrl}/users`,
        getByEmail: (email) => `${baseUrl}/users?email=${email}`,
    },

}

