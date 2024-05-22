import React from 'react'
import Bola from './Bola'

export default function Invoise1({text,setText1, meros}) {
     
    return (
        <div className='row border border-primary p-2'>
            <div className="col-4">
                <div className="card">
                    <div className="card-header bg-danger">
                        <h1> {text} </h1>
                    </div>
                    <div className="card-body">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam explicabo enim error similique quibusdam sequi! Atque facilis aut impedit cum!
                        </p>
                    </div>
                    <button onClick={()=> setText1("BIRINCHI COMPONENT") } className='btn btn-dark'> Change Text </button>
                </div>
            </div>

            <Bola meros={meros} />
        </div>
    )
}
