import { Link } from 'react-router-dom'


const ListInvoices = ({ invoices }) => {
  console.log(invoices)

  return (
    <>
      {
        invoices.map(({ idInvoice, dueDate, client, amount, status }) => {
          const statusColor = status === 'Paid' ? 'paid' : status === 'Pending' ? 'pending' : 'draft'
          return (
            <Link to={`/invoices/${idInvoice}`} key={idInvoice} style={{ textDecoration: 'none' }}>
              <div className='invoice-card' key={idInvoice}>
                <p># <strong>{idInvoice}</strong></p>
                <p>{dueDate}</p>
                <p>{client}</p>
                <p>£ <strong>{amount}</strong></p>
                <p className={`status ${statusColor}`}>{status}</p>
              </div>
            </Link>
          )
        })
      }
    </>
  )
}


const WhitoutResults = () => {
  return (
    <div className='whitout-results'>
      <p>No results found</p>
    </div>
  )
}

const InvoiceCard = ({ invoices }) => {
  return (
    <>
      {invoices.length > 0 ? <ListInvoices invoices={invoices} /> : <WhitoutResults />}
    </>
  )
}

export default InvoiceCard

