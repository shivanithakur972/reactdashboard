import React, { Fragment, useState } from 'react'
import Cards from '../components/cards/Cards'
import home from '../api/home.json'
export default function Home() {
  // const [data,setData]=useState(0)
  // function updateData()
  // {
  //   setData(data+1)
   
  // }
  const [inputdata , setinputData]=useState()
  function getData()
  {
    setinputData(inputdata)
   
  }
  return (
    <Fragment>
    <div className="cardsection">
      {home.storecards.card.map((value, key) =>
        <Cards key={key} values={value} />
      )}
    </div>
    <div className='recipes'>
    <h2>{home.recipesall.heading}</h2>
    <p>{home.recipesall.text}</p>
   
    <h1>{inputdata}</h1>
    <input type='text'onChange={getData} /> 
    </div>
    <div className='service-sections'>
    <h1>{home.services.heading}</h1>
    <p>{home.services.descrptions}</p>
    </div>


    </Fragment>
  )
}
