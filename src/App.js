import React, { useState } from 'react'
import Invoise1 from './components/Invoise1';
import Invoise2 from './components/invoise2';
import Invoise3 from './components/invoise3';
import Invoise4 from './components/invoise4';

export default function App({meros}) {


  const [invoise, setInvoise] = useState(0)

  const [text1, setText1] = useState("Birinchi Component")
  const [text2, setText2] = useState("Ikkinchi Component")
  const [text3, setText3] = useState("Uchinchi Component")
  const [text4, setText4] = useState("To'rtinchi Component")

  return (
    <div className='border border-danger'>
     
      <button onClick={()=> setInvoise(1) } className='btn btn-dark mx-2'> Invoise 1 </button>
      <button onClick={()=> setInvoise(2) } className='btn btn-dark mx-2'> Invoise 2 </button>
      <button onClick={()=> setInvoise(3) } className='btn btn-dark mx-2'> Invoise 3 </button>
      <button onClick={()=> setInvoise(4) } className='btn btn-dark mx-2'> Invoise 4 </button>
      {
        invoise === 1 ? <Invoise1 text={text1}  setText1={setText1} /> 
        : invoise === 2 ? <Invoise2 text={text2} /> 
        : invoise === 3 ? <Invoise3 text={text3} />  
        : invoise === 4 ? <Invoise4 text={text4} /> : ""
      }
  <Invoise1 meros={meros} />
 
      
      
     
      
    </div>
  )
}
