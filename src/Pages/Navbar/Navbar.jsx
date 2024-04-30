import { Avatar } from '@mui/material'
import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='contain z-10 sticky left-0 right-0 top-0 py-3 px-2 flex justify-between items-center'>
        <p className='font-bold text-lg'>Project Manager</p>
        
        <div className="flex items-center gap-5">
            <p>codewithsteve</p>
            <Avatar src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'></Avatar>
        </div>
    </div>
  )
}

export default Navbar