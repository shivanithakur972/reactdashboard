import React from 'react'
import './Cards.css'
export default function Cards(props) {
  return (
    <div>
      <div className='cards_section'>
      <h1>{props.values.heading}</h1>
      <p>{props.values.text}</p>
      </div>
    </div>
  )
}
