import './Button.css'
import { Icon } from '@iconify/react'


const Button = ({  onClick, type, icon, text }) => {


  return (
    <button onClick={onClick} className={`${type} button`} type={type}>
      <Icon icon={icon} width="24" height="24" className='icon icon-button'  />
      {text}
    </button>
  )
}

export default Button