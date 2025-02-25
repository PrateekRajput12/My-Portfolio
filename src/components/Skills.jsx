import React from 'react'
import sk1 from '../assets/sk1.png'
import line1 from '../assets/line1.png'
import line2 from '../assets/line2.png'
import line3 from '../assets/line3.png'
import line4 from '../assets/line4.png'
import line5 from '../assets/line5.png'
import line6 from '../assets/line6.png'
import line7 from '../assets/line7.png'
import line8 from '../assets/line8.png'
import line9 from '../assets/line8.png'
import line10 from '../assets/line8.png'
import line11 from '../assets/line8.png'
import Logo from '../assets/Logo.png'
import { FaLinkedin, FaGoogle, FaCss3, FaCode, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";

const Skills = () => {
    return (
        <div className='w-full overflow-x-hidden   sm:px-[4rem] lg:px-[10rem] xl:px-[17rem] 2xl:px-[20rem] md:px-[6rem] px-[2rem]   relative text-white py-[10rem]'>
            <h2 className='text-2xl text-center'>
                I m currently looking to join a <span className='font-[#A362FF]'>cross-functional</span> team <br></br>
                <span className='text-[1rem]'> that values improving people s lives through accessible design </span>
            </h2>



            <div className='flex md:flex-col flex-row justify-center items-center'>
                <div className='m-auto mt-[5rem] md:mt-[5rem]'>
                    <div className='flex justify-center md:flex-row flex-col  items-center gap-[1rem]'>
                        <div className='w-[4rem] bg-[#251C31] py-[1rem] px-[0.8rem] rounded-full '>
                            <img src={sk1} className='m-auto' />
                        </div>

                        <div className='w-[4rem] bg-[#251C31] py-[1rem] px-[0.8rem] rounded-full '>
                            <img src={sk1} className='m-auto' />
                        </div>

                        <div className='w-[4rem] bg-[#251C31] py-[1rem] px-[0.8rem] rounded-full '>
                            <img src={sk1} className='m-auto' />
                        </div>

                        <div className='w-[4rem] bg-[#251C31] py-[1rem] px-[0.8rem] rounded-full '>
                            <img src={sk1} className='m-auto' />
                        </div>

                        <div className='w-[4rem] bg-[#251C31] py-[1rem] px-[0.8rem] rounded-full '>
                            <img src={sk1} className='m-auto' />
                        </div>
                        <div className='w-[4rem] bg-[#251C31] py-[1rem] px-[0.8rem] rounded-full '>
                            <img src={sk1} className='m-auto' />
                        </div>

                        <div className='w-[4rem] bg-[#251C31] py-[1rem] px-[0.8rem] rounded-full '>
                            <img src={sk1} className='m-auto' />
                        </div>
                    </div>



                </div>


                <div className='m-auto mt-[5rem] md:mt-[1rem]'>
                    <div className='flex justify-center flex-col md:flex-row  items-center gap-[1rem]'>
                        <div className='w-[4rem] bg-[#251C31] py-[1rem] px-[0.8rem] rounded-full '>
                            <img src={sk1} className='m-auto' />
                        </div>

                        <div className='w-[4rem] bg-[#251C31] py-[1rem] px-[0.8rem] rounded-full '>
                            <img src={sk1} className='m-auto' />
                        </div>

                        <div className='w-[4rem] bg-[#251C31] py-[1rem] px-[0.8rem] rounded-full '>
                            <img src={sk1} className='m-auto' />
                        </div>

                        <div className='w-[4rem] bg-[#251C31] py-[1rem] px-[0.8rem] rounded-full '>
                            <img src={sk1} className='m-auto' />
                        </div>

                        <div className='w-[4rem] bg-[#251C31] py-[1rem] px-[0.8rem] rounded-full '>
                            <img src={sk1} className='m-auto' />
                        </div>
                        <div className='w-[4rem] bg-[#251C31] py-[1rem] px-[0.8rem] rounded-full '>
                            <img src={sk1} className='m-auto' />
                        </div>

                    </div>



                </div>
            </div>



            <div className=' relative mt-[5rem] m-auto flex justify-center items-center'>



                <div className='block'>
                    <img src={line1} className=' 2xl:block hidden      absolute -top-22 left-65' />
                    <img src={line2} className=' 2xl:block hidden     absolute  -top-22 left-85' />
                    <img src={line3} className=' 2xl:block hidden    absolute -top-20 left-100' />
                    <img src={line4} className=' 2xl:block hidden    absolute -top-20 left-110' />
                    <img src={line5} className=' 2xl:block hidden    absolute -top-20 left-120' />
                    <img src={line6} className=' 2xl:block hidden    absolute -top-20 left-130' />
                </div>


                <div className='min-w-[26rem] xl:block hidden h-[16rem] absolute border rounded-full bg-radial from-[#763CAC] 0% to-[#320F85]  top-40  blur-2xl opacity-40'></div>
                <div className='mt-[10rem] xl:block hidden relative w-[10rem] p-[5rem] rounded-full bg-linear-to-b from-[#301080] to-[#7840AD]'>
                    <img src={line7} className=' absolute -top-14 min-w-[18rem] -left-15' />
                    <img src={line8} className=' absolute  top-5 min-w-[18rem] -left-15 ' />
                    <img src={Logo} className='w-[4rem] absolute top-10 left-13' />
                    <img src={line9} className=' min-w-[26rem]  absolute  top-11  -left-30 ' />
                    <img src={line10} className='min-w-[32rem]  absolute  -top-2  -left-40' />
                    <img src={line11} className='min-w-[38rem]  absolute  -top-15  -left-53' />



                    {/* skills logo */}
                    <FaLinkedin className="absolute top-30 -left-[11rem]  fill-[#693B93]" />
                    <FaGoogle className="absolute top-40 -left-[8rem]  fill-[#693B93]" />
                    <FaCss3 className="absolute top-54 -left-[10rem]  fill-[#693B93]" />
                    <FaCode className="absolute top-33 -right-[8.5rem]  fill-[#693B93]" />
                    <FaJs className="absolute top-25 -right-[12rem]  fill-[#693B93]" />
                    <FaReact className="absolute top-35 -right-[14rem]  fill-[#693B93]" />
                    <FaNodeJs className="absolute top-55 -right-[10.5rem]  fill-[#693B93]" />
                    <FaGithub className="absolute top-45 -right-[10.5rem]  fill-[#693B93]" />





                </div>
            </div>
        </div>
    )
}

export default Skills