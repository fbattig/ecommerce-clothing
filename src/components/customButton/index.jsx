import React from 'react'
import './styles.scss'

export default function index({children, ...otherProps}) {
  return (
      <button  {...otherProps} className='custom-button'>
        {children}
      </button>
  )
}
