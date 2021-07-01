import React from 'react'
import './Li.css'
const Li = props => {
  return (
    <div className='to_do_style'>
      <i
        className='fa fa-times'
        aria-hidden='true'
        onClick={() => {
          props.onSelect(props.id)
        }}
      ></i>
      <li style={{ listStyleType: 'none' }}>{props.text}</li>
    </div>
  )
}

export default Li
