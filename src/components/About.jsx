import React from 'react'
import fb from '../assets/aboutfb.png'
const About = () => {
    return (
        <div className='w-full sm:px-[2rem] max-[720px]:flex block flex-col lg:px-[10rem] xl:px-[16rem] 2xl:px-[20rem] md:px-[6rem] px-[2rem] relative text-white py-[5rem] '>
            <div>
                <h2 className='text-[3rem] lg:text-[2.8rem] md:text-[2.2rem] sm:text-[1.8rem] max-[650px]:text-[1.5rem]'>I m a Software Engineer.| </h2>
                <p><span>Currently, I m a Software Engineer at</span>  <span className='text-[#1877F2]'><img src={fb} className=" inline" />   Facebook,</span></p>
            </div>
            <div className=''>
                <p className='max-w-[46rem] max-[820px]:max-w-[40rem] max-[820px]:text-[0.9rem] text-[1.2rem] mt-[5rem] '>
                    A self-taught UI/UX designer, functioning in the industry for 3+ years now.
                    I make meaningful and delightful digital products that create an equilibrium
                    between user needs and business goals.
                </p>
            </div>


        </div>
    )
}

export default About