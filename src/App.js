import React, { useState } from 'react'
import './App.css'
import Li from './Li'
const App = () => {
  const [inputlist, setinputlist] = useState('')
  const [list1, setList1] = useState([])
  const InputEvent = (event) => {
    setinputlist(event.target.value)
  }

  const ButtonEvent = () => {
    setList1(oldItems => {
      return [...oldItems, inputlist]
    })
    setinputlist('')
  }
  const deleteItems=(id)=>{
        console.log("deleted")

       setList1((oldItems)=>{
        return oldItems.filter((arrElt,index)=>{
          return index!==id;
        })
       }) 
    }
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>TODO List</h1>
          <br />
          <input
            type='text'
            placeholder='Enter an Item'
            onChange={InputEvent}
            value={inputlist}
          />
          <button onClick={ButtonEvent}>+</button>
          <br />
          <ol>
            {/* <li>{list1}</li> */}
            {list1.map((itemval,index) => {
              return <Li 
              key={index}
              id={index}
              text={itemval}
              onSelect={deleteItems} />
            })}
          </ol>
        </div>
      </div>
    </>
  )
}
export default App
