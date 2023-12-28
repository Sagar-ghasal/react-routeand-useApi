import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 15;

  // const addValue = () =>{
  //   console.log("value added", counter)
  //   counter = counter+1;
  // }
  const [counter, setCounter] = useState(15);
  // const addValue = ()=>{
  //   // counter = counter+1  //not work
  //   // setCounter(counter)
  //  setCounter(counter+1)
  //  setCounter(counter+1)
  //  setCounter(counter+1)
  //  setCounter(counter+1)
  //  setCounter(counter+1)
  // }

  const addValue = ()=>{
    setCounter(prev=>prev+1)
    setCounter(prev=>prev+1)
    setCounter(prev=>prev+1)
    setCounter(prev=>prev+1)
    setCounter(prev=>prev+1)
  }

  const decValue = () =>{
   if(counter>0){
    setCounter(counter-1)
   }else{
    return
   }
  //  counter>0?setCounter(counter-1) :return  //not work
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <br/>
      <button onClick={decValue} >remove value {counter}</button>
    </>
  )
}

export default App
