import React from 'react'

export default function Users({users}) {
    console.log(users);
  return (
    <div className='row'>
        <h1> Users </h1>
        {
            users.map((item,index)=> <div className='col-4' key={index}>
                <div className="card text-center">
                    <div className="card-body">
                        <img width={250} height={250} src={item.image} alt="" />
                        <h1> {item.name} </h1>
                        <h2>{item.job}</h2>
                        <p>
                            {item.description}
                        </p>
                    </div>
                </div>

            </div> )
        }

    </div>
  )
}
