import React from 'react'
import Logo from '../../assets/svgs/Logo'
import Button from '../../ui/Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full border-b border-b-white/20 py-2 fixed top-0 backdrop-blur-3xl z-20'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
            <Link to={"/"}><Logo /></Link>
            <div className='flex justify-center items-center gap-6 text-white/50'>
              <p>Home</p>
              <p>About us</p>
              <p>Contact us</p>
              <Link to={"/profile"}><Button text={"Join Now"} /></Link>
            </div>
        </div>
    </div>  
  )
}

export default Header