import { useState } from 'react'
import { Icon } from '@iconify/react'
import { filterOptions } from '../../contants'
import Filter from '../Filter'
import { useMemo } from 'react'
import Button from '../Button/Button'
import InvoiceForm from '../InvoiceForm/InvoiceForm'

const Header = ({ filteredInvoices, selected, handleSelected }) => {
  
  const [showFilter, setShowFilter] = useState(false)
  const [showForm, setShowForm] = useState(false)
 

  const icon = useMemo(() => {
    return showFilter ? 'mingcute:down-line' : 'mingcute:up-line'
  }, [showFilter])

  const handleForm = () => {
    setShowForm(!showForm)
  }



  return (

    <>
      <header className='header'>

        <div className='header-title'>
          <h1>Invoices</h1>
          <p>there are total {filteredInvoices.length} invoices</p>
        </div>

        <div className='filter'>
          <div className='filter-title'>
            <p>Filter by status</p>
            <Icon icon={icon} width="24" height="24" className='icon' onClick={() => setShowFilter(!showFilter)} />
          </div>
          {
            showFilter &&
            <div className='filter-options'>
              {filterOptions.map((option) => (
                <Filter key={option.name} {...option} handleSelected={handleSelected} slected={selected} />
              ))}
            </div>
          }


        </div>
        <Button type='primary' text='New Invoice' icon='gridicons:add' onClick={handleForm} />
     

      </header>

      {showForm &&

        <InvoiceForm handleForm={handleForm} isOpen={showForm} />
      }
    </>
  )
}

export default Header