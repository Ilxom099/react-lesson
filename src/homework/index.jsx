import React, { useState } from 'react';


export default function App() {

  const [qadam, setQadam] = useState(0);
  const [qadamKattaligi, setQadamKattaligi] = useState(1);

  function yurish () {
    setQadam(qadam+ qadamKattaligi)
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
            <h2> {qadam} metr </h2>
            <button onClick={yurish} className='btn btn-dark'> yurish </button>
            <hr/>
            <h2> Qadam kattaligi: {qadamKattaligi} metr </h2>
            <button onClick={ ()=> setQadamKattaligi(qadamKattaligi+1) } className='btn btn-dark'> Qadam kattalashtirish </button>
        </div>
      </div>

    </div>
  )
}
