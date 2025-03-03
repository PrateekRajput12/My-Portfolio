import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { gmail } from '../utils/constant'

const Footer = () => {
    return (
        <div id='footer' className='w-full sm:px-[4rem] lg:px-[10rem] xl:px-[17rem] 2xl:px-[20rem] md:px-[6rem] px-[2rem]    relative text-white mt-[8rem] py-[5rem]'>

            <h2 className='text-2xl text-white'>Contact</h2>
            <div className='flex text-[1.2rem] mt-[5rem] text-start max-[1080px]:min-w-[90%] max-w-[70%] flex-col gap-[2rem]'>
                <p>{`I'm currently looking to join a cross-functional team that values improving people's lives
                    through accessible design. or have a project in mind? Let's connect.`}</p>
                <a href=""> <p>{gmail} </p></a>
            </div>
            <div className='flex gap-5 mt-5'>
                {/* <a href="" target='_blank' ><FaInstagram className='size-7 cursor-pointer fill-white' /></a> */}
                <a href="https://www.linkedin.com/in/prateek-rajput-13b97b294" target='_blank'><FaLinkedin className='size-7 cursor-pointer fill-white' /></a>
                <a href="https://github.com/PrateekRajput12" target='_blank'><FaGithub className='size-7 cursor-pointer fill-white' /></a>

            </div>
        </div>
    )
}

export default Footer