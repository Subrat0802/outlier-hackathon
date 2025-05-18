import React, { useState } from 'react'
import Logo from '../../assets/svgs/Logo'
import Button from '../../ui/Button'
import { Link, useParams } from 'react-router-dom'
import { GithubIcon, HomeIcon, User } from 'lucide-react'
import { toast } from 'sonner'

const Header = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const handleClick = () => {
    localStorage.setItem("token", "123");
    setToken("123");
    toast.success("You are logged in")
  }


  const {profile} = useParams();
  console.log("profile", profile);
  return (
    <div className='w-full border-b border-b-white/20 py-2 fixed top-0 backdrop-blur-3xl z-20'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
            <Link to={"/"}><Logo /></Link>
            <div className='flex justify-center items-center gap-6 text-white/50'>
              <Link to={"/"}><HomeIcon /></Link>
              <a href="https://github.com/Subrat0802/outlier-hackathon" target="_blank"><GithubIcon /></a>
              {
                token === "" && <Link to={"/profile/1"}><Button onClick={handleClick} text={"Join Now"} /></Link>
              }
              {
                token && <Link to={"/profile/1"}><User /></Link>
              }
              
            </div>
        </div>
    </div>  
  )
}

export default Header