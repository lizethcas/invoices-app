import './InvoiceForm.css'
import { useRef, useEffect } from 'react'
import Dashboard from '../../layouts/Dashboard'
import { generarID } from '../../helper/generateID.JS'
import { formData } from '../../helper/formData.JS'
import { createInvoice } from '../../services/invoices.service'


const InvoiceForm = ({ handleForm, isOpen }) => {
    const formRef = useRef()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                handleForm()
            }
        }


        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                handleForm()
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleKeyDown)
    }, [handleForm])


    const handleSubmit = (e) => {
        e.preventDefault()
        const values = formData(e)
        values.idInvoice = generarID()


        createInvoice(values)
    }



    return (
        <section className={`invoice-form ${isOpen ? 'open' : ''}`}>
            <div className='form-container' ref={formRef}>
                <div className="dashboard-wrapper">
                    <Dashboard />
                </div>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-content'>
                        <h2>New Invoice</h2>

                        <div className='bill-section'>
                            <h4>Bill From</h4>
                            <div className='form-group'>
                                <label htmlFor='street'>Street Address</label>
                                <input type='text' id='street' name='street' placeholder='19 Union Terrace' required />
                            </div>

                            <div className='form-group-container'>
                                <div className='form-group'>
                                    <label htmlFor='city'>City</label>
                                    <input type='text' id='city' name='city' placeholder='London' required />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='postal-code'>Post Code</label>
                                    <input type='text' id='postal-code' name='postalCode' placeholder='E1 3EZ' required />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='country'>Country</label>
                                    <input type='text' id='country' name='country' placeholder='United Kingdom' required />
                                </div>
                            </div>
                        </div>

                        <div className='bill-section'>
                            <h4>Bill To</h4>
                            <div className='form-group'>
                                <label htmlFor='client-name'>Client's Name</label>
                                <input type='text' id='client-name' name='CLIENT' placeholder='Alex Grim' required />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='client-name'>amount</label>
                                <input type='number' id='amount' name='AMOUNT' placeholder='Alex Grim' required />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='client-name'>Status</label>
                                <input type='text' id='status' name='STATUS' placeholder='Alex Grim' required />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='client-email'>Client's Email</label>
                                <input type='email' id='client-email' name='clientEmail' placeholder='alexgrim@mail.com' required />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='client-street'>Street Address</label>
                                <input type='text' id='client-street' name='clientStreet' placeholder='84 Church Way' required />
                            </div>

                            <div className='form-group-container'>
                                <div className='form-group'>
                                    <label htmlFor='client-city'>City</label>
                                    <input type='text' id='client-city' name='clientCity' placeholder='Bradford' required />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='client-postal-code'>Post Code</label>
                                    <input type='number' id='client-postal-code' name='clientPostalCode' placeholder='BD1 9PB' required />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='client-country'>Country</label>
                                    <input type='text' id='client-country' name='clientCountry' placeholder='United Kingdom' required />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='form-button'>Save as Draft</button>
                    <button className='form-button' type='submit'>Save & Send</button>
                </form>
            </div>
        </section>
    )
}

export default InvoiceForm 