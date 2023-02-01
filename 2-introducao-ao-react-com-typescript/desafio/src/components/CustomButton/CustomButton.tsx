import React, { MouseEventHandler, SyntheticEvent } from 'react'
import './CustomButton.css'

interface ICustomButton {
  onClick: MouseEventHandler
}


const CustomButton = ({ onClick }: ICustomButton) => {

  return (
    <button 
    className='btn'
    type="submit" 
    arial-label="Send user" 
    onClick={onClick}
    >
      submit
    </button>
  )
}

export default CustomButton