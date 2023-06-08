import React from 'react'
import Logo from "../assets/logo/logoGreen.png"

function Header() {
  return (
    <div className='w-screen flex  flex-row justify-between h-[100px] bg-transparent fixed items-center pl-14'>
        <img src={Logo} className='h-[63px] '/> 
        <div className='uppercase text-white flex flex-row justify-center w-1/2 font-nunito text-[13px] font-semibold gap-10 '>
            <p>Loan programs</p>
            <p>Realter portal</p>
            <p>about us</p>
            <p>reviews</p>
            <p>education</p>
        </div>
    </div>
  )
}

export default Header