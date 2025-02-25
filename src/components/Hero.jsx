import React from 'react'
import main from '../assets/Me.png'
import arrow from '../assets/Arrow.png'
import circle from '../assets/herotext.png'
const Hero = () => {
    return (
        <div className='w-full overflow-x-hidden   sm:px-[4rem] lg:px-[10rem] xl:px-[17rem] 2xl:px-[20rem] md:px-[6rem] px-[2rem] lg:gap-[2rem]   relative text-white py-[10rem] flex justify-center  max-[840px]:flex-col flex-row xl:justify-start  gap-[2rem] items-center '>
            <div className='hero-img '>
                <div className='div-bg  h-[20rem] w-[20rem] opacity-60 rounded-full bg-radial from-[#320F85] from-40% blur-2xl to-[#763CAC] -z-0'></div>
                <img src={main} draggable="false" className='z-10 absolute top-40 w-[20rem]' />
            </div>
            <div className='hero-text  md:static relative -mt-[3rem]  py-[5rem] flex flex-col gap-5'>

                <img src={arrow} draggable="false" className=' max-[1525px]:hidden absolute top-15 left-[33rem] w-[8rem] select-none' />
                <p className=' max-[840px]:static absolute   top-20'>Hello! I Am <span className='text-[#7127BA]'> Prateek Rajput</span></p>
                <p className=' underline max-[840px]:mt-[1rem]'>A Designer who</p>
                <div className='2xl:text-[3.75rem] xl:text-[3rem]  lg:text-[2.8rem] md:text-[2.5rem]  sm:text-[2rem] relative @max-[360px]:text-[1.5rem] max-[640px]:text-[1.7rem]  '>Judges a book <br className='max-[830px]:hidden max-[480px]:inline inline'></br>
                    by its <span className='text-[#7127BA] '>cover    </span>
                    <img src={circle} draggable="false" className='absolute lg:block hidden top-[6.5rem] left-[10.7rem]  w-[14rem] ' />

                    ...</div>
                <p className='shrink  '>Because if the cover does not impress you what else can?</p>
            </div>
        </div>
    )
}

export default Hero