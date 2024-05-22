import React, { useState } from 'react'
import Foto1 from './assets/cute-boy-avatar-png.webp'
import Foto2 from './assets/man-avatar-clipart-illustration-free-png.webp'
import Foto3 from './assets/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'
import Users from './pages/users'

export default function Main() {
    const [users, setUsers] = useState([
        {id:1, image: Foto1, name: "Tomas Scheer", job: "Digital MArketing", description: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        {id:2, image: Foto2, name: "Amanda Green", job: "UI Ux Designer", description: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
        {id:3, image: Foto3, name: "Shane Wright", job: "IT Manager", description: "Lorem ipsum dolor sit, amet consectetur adipisicing." },
    ])
  return (
    <div className='row'>
        <div className="col-10 offset-1">
            <Users users={users} />
        </div>

    </div>
  )
}
