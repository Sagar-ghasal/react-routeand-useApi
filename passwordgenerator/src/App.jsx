import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const ref = useRef();
  const [length, setLength] = useState(15);
  const [password, setPassword] = useState("");
  const [isNumber, setIsNumber] =useState(false);
  const [isChar, setIsChar] = useState(false)

  const passwordGenerator = ()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(isNumber) str+="0123456789";
    if(isChar) str+= "~!@#$%^&*{}[]"
    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length +1)
      // console.log(char)
      pass+= str.charAt(char)
    }
    console.log(pass)

    setPassword(pass)
  }
  
 
  const copyToClipboard = () =>{
    ref.current?.select();
    ref.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password);
  }

  useEffect(()=>{
    passwordGenerator()
  },[length])

  return (
    <>
      <div className='w-full h-screen bg-black flex items-center justify-center'>
        <div className=''>
          <div className='flex'>
            <input type='text' className='outline-none w-full py-1 px-3 rounded-full' readOnly value={password} ref={ref} />
            <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-full ms-3' onClick={copyToClipboard} >Copy</button>
          </div>
          <div className='flex gap-5 items-center mt-6'>
            <div>
              <input type='range' value={length} onChange={(e) => setLength(e.target.value)} />
              <label className='text-white ms-3'>Length: {length}</label>
            </div>
            <div>
              <input type='checkbox' id='number' defaultChecked={isNumber} onChange={()=>setIsNumber(prev=>!prev)} />
              <label htmlFor='number' className='text-white ms-3'>Numbers</label>
            </div>
            <div>
              <input type='checkbox' id='characters' defaultChecked={isChar} onChange={()=>setIsChar(prev=>!prev)} />
              <label htmlFor='characters' className='text-white ms-3'>Characters</label>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
