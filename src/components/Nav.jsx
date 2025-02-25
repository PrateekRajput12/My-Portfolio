import React from 'react'
import logo from '../assets/Logo.png'
const Nav = () => {
    return (
        <div className='max-w-full  overflow-x-hidden sm:px-[4rem] lg:px-[10rem] xl:px-[15rem] md:px-[6rem] px-[2rem] lg:gap-[2rem]    bg-[var(--nav-color)] py-[1.6rem] text-[1.1rem]  m-auto text-white flex justify-between items-center '>
            <div className=''>
                <img src={logo} className='custom-nav' />
            </div>

            <ul className='flex justify-between items-center gap-[1rem] sm:gap-[10rem]'>
                <li><a href="#" className=''>Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Labs</a></li>

            </ul>

        </div>
    )
}

export default Nav