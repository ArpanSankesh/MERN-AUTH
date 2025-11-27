import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets';

const EmailVerify = () => {
  const navigate = useNavigate();
  
  return (
    <div className='flex items-center justify-center min-h-screen  bg-gradient-to-br from-blue-200 to-purple-400'>
      <img onClick={() => navigate('/')} src={assets.logo} alt="" className='absolute left-5 sm:left-20 top-5 sm:w-32 cursor-pointer' />
    </div>
  )
}

export default EmailVerify