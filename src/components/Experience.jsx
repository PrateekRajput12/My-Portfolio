import React from 'react'
import we1 from '../assets/we1.png'

import we2 from '../assets/we2.png'
import we3 from '../assets/we3.png'
import we4 from '../assets/Icons.png'
const Experience = () => {
    return (
        <div className='w-full sm:px-[2rem] max-[720px]:flex block  flex-col lg:px-[8rem] xl:px-[16rem] 2xl:px-[20rem] md:px-[6rem] px-[2rem]     relative text-white mt-[8rem] py-[5rem]'>
            <h2 className='text-3xl mb-[7rem]'>
                Work Experience
            </h2>


            <div className='grid relative max-[1330px]:grid-cols-1 place-items-center  grid-cols-2 gap-[3rem]'>
                <div className='circle1 bg-radial  from-[#763CAC] from-0%  to-[#320F85] to-90% w-[30rem] absolute max-[900px]:left-[15rem] max-[600px]:left-0 -top-[2rem] left-[20rem] -z-0 h-[30rem] rounded-full blur-[7rem] '></div>
                <div className='circle1 bg-radial  from-[#763CAC] from-0% max-[1330px]:block hidden max-[900px]:left-[15rem] max-[600px]:top-[42rem]  to-[#320F85] max-[600px]:left-0 to-90% w-[30rem] absolute  top-[22rem] left-[20rem] -z-0 h-[30rem] rounded-full blur-[7rem] '></div>

                <div className=' box-gradient z-10   max-[490px]:flex-col  max-[490px]:justify-center  max-[490px]:items-center  max-w-[35rem] flex justify-between items-center border-t-2 border-[#693B93] px-[2rem] py-[1.5rem]  rounded-3xl'>
                    <img src={we1} className=' mr-10  max-[1100px]:size-[6rem]' />
                    <div className='text-white flex  flex-col items-start gap-[1.5rem]'>
                        <h3 className='text-2xl font-bold'>CIB on the Mobile		</h3>
                        <p className='text-[0.8rem]'>Take your client onboard seamlessly by our amazing
                            tool of digital onboard process.
                        </p>
                        <button className='bg-[#2C1250] border-2 rounded-3xl max-[400px]:text-[0.8rem] border-[#693B93] px-[1.6rem] py-[0.4rem]'>Learn More</button>
                    </div>
                </div>

                <div className=' box-gradient z-10 max-[490px]:flex-col  max-[490px]:justify-center  max-[490px]:items-center  max-w-[35rem] flex justify-between items-center border-t-2 border-[#693B93] px-[2rem] py-[1.5rem]  rounded-3xl'>
                    <img src={we2} className=' mr-10' />
                    <div className='text-white flex flex-col items-start gap-[1.5rem]'>
                        <h3 className='text-2xl font-bold'>CIB on the Mobile		</h3>
                        <p className='text-[0.8rem]'>Take your client onboard seamlessly by our amazing
                            tool of digital onboard process.
                        </p>
                        <button className='bg-[#2C1250] border-2 rounded-3xl border-[#693B93] px-[1.6rem] py-[0.4rem]'>Learn More</button>
                    </div>
                </div>


                <div className=' box-gradient max-[490px]:flex-col  max-[490px]:justify-center  max-[490px]:items-center z-10  max-w-[35rem] flex justify-between items-center border-t-2 border-[#693B93] px-[2rem] py-[1.5rem]  rounded-3xl'>
                    <img src={we3} className=' mr-10' />
                    <div className='text-white flex flex-col items-start gap-[1.5rem]'>
                        <h3 className='text-2xl font-bold'>CIB on the Mobile		</h3>
                        <p className='text-[0.8rem]'>Take your client onboard seamlessly by our amazing
                            tool of digital onboard process.
                        </p>
                        <button className='bg-[#2C1250] border-2  rounded-3xl border-[#693B93] px-[1.6rem] py-[0.4rem]'>Learn More</button>
                    </div>
                </div>


                <div className=' box-gradient max-[490px]:flex-col  max-[490px]:justify-center  max-[490px]:items-center z-10  max-w-[35rem] flex justify-between items-center border-t-2 border-[#693B93] px-[2rem] py-[1.5rem] rounded-3xl'>
                    <img src={we4} className=' mr-10' />
                    <div className='text-white flex flex-col items-start gap-[1.5rem]'>
                        <h3 className='text-2xl font-bold'>CIB on the Mobile		</h3>
                        <p className='text-[0.8rem]'>Take your client onboard seamlessly by our amazing
                            tool of digital onboard process.
                        </p>
                        <button className='bg-[#2C1250] py-[0.4rem] border-2 rounded-3xl border-[#693B93] px-[1.6rem] '>Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience