import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
// import { Link } from 'react-router-dom'
import { FaGithub, FaArrowUp } from 'react-icons/fa'
import { projectText1, project1Link, projectName1 } from '../utils/constant'
const Projects = () => {
    return (
        // <div className='w-full  flex flex-col gap-[5rem]   px-[14rem] relative text-white mt-[8rem] py-[5rem]'>

        //     <div className='project-1 flex justify-between max-[1440px]:flex-col flex-row mb-[10rem] gap-[2rem] items-start'>

        //         <div className='project-text relative '>
        //             <div>
        //                 <p className='text-[#9857D3]'>Featured  Project</p>
        //                 <h2 className='text-[#CCD6F6] text-4xl'>Example Project</h2>
        //             </div>
        //             <div className="px-6 py-4 w-[32rem] h-[10rem] top-[5rem]  absolute bg-white/20 backdrop-blur-lg rounded-lg shadow-lg">
        //                 <p className=' absolute  text-[#CCD6F6] top-[1rem] cursor-pointer' >A web app for visualizing personalized Spotify data. View your
        //                     top artists, top tracks, recently played tracks, and detailed audio
        //                     information about each track. Create and save new playlists of
        //                     recommended tracks based on your existing playlists and more.</p>
        //             </div>
        //             <div className='links flex mt-[12rem] gap-[1rem] text-2xl'>
        //                 <a href='' ><FaGithub className=' cursor-pointer' /></a>
        //                 <a href='' > <FaArrowUp className=' cursor-pointer' /></a>
        //             </div>
        //         </div>

        //         <div className='project-image min-w-[50%]  ml-[2rem] relative  rounded-3xl '>
        //             <img src={project1} draggable="false" className='border-t-[3rem]  z-10 absolute bg-[#2b0b3a]  rounded-2xl border-l-[3rem] border-[#2b0b3a]' />

        //             <div className='circle1   bg-radial from-[#763CAC] w-[25rem] absolute  -top-[2rem] left-[3rem] -z-0 h-[25rem] rounded-full blur-xl  to-[#320F85]'></div>
        //             <div className='circle2  bg-radial from-[#763CAC] w-[25rem] absolute -left-[3rem] -top-[2rem] -z-0 h-[25rem] rounded-full blur-3xl  to-[#320F85]'></div>

        //         </div>
        //     </div>



        //     {/* Project -2 */}

        //     <div className='project-2 flex max-[1440px]:flex-col flex-row justify-start  gap-[1rem] items-start'>

        //         <div className='project-image min-w-[50%]  z-0  mr-[2rem] static  rounded-3xl '>
        //             <img src={project2} draggable="false" className='border-t-[3rem]  z-10 absolute bg-[#2b0b3a] rounded-2xl border-r-[3rem] border-[#2b0b3a]' />

        //             <div className='circle1 bg-radial from-[#763CAC] to-[#320F85] w-[25rem] absolute  -top-[2rem] right-[3rem] z-0 h-[25rem] rounded-full blur-3xl  '></div>
        //             <div className='circle2 bg-radial  from-[#763CAC] to-[#320F85] w-[25rem] absolute -right-[3rem] -top-[2rem] z-0 h-[25rem] rounded-full blur-3xl  '></div>

        //         </div>

        //         <div className=' relative w-full'>
        //             <div className='w-full text-end'>
        //                 <p className='text-[#9857D3] '>Featured  Project</p>
        //                 <h2 className='text-[#CCD6F6] text-4xl'>Example Project</h2>
        //             </div>
        //             <div className="px-6 py-4 w-[32rem] h-[10rem] top-[5rem]  absolute bg-white/20 backdrop-blur-lg rounded-lg shadow-lg">
        //                 <p className=' absolute  text-[#CCD6F6] top-[1rem] cursor-pointer' >A web app for visualizing personalized Spotify data. View your
        //                     top artists, top tracks, recently played tracks, and detailed audio
        //                     information about each track. Create and save new playlists of
        //                     recommended tracks based on your existing playlists and more.</p>
        //             </div>
        //             <div className='links justify-end w-full flex mt-[12rem] gap-[1rem] text-2xl'>
        //                 <a href='' ><FaGithub className=' cursor-pointer' /></a>
        //                 <a href='' > <FaArrowUp className=' cursor-pointer' /></a>
        //             </div>
        //         </div>
        //     </div>

        // </div>

        <div
            id='projects' className=' w-full flex flex-col gap-[5rem] py-[6.5rem]   sm:px-[4rem] lg:px-[10rem] xl:px-[15rem] 2xl:px-[18rem] md:px-[6rem] px-[2rem]'
        >

            <div className='project-1  xl:flex-row flex-col flex justify-between gap-[1rem] items-center  p-[2rem]'>

                <div className='textbox flex flex-col gap-[1.5rem]   z-10'>
                    <div>
                        <h3 className='text-[#9857D3] text-[1rem] max-[500px]:text-[0.5rem]'>Featured Project</h3>
                        <h2 className='text-[#CCD6F6] text-[2rem] max-[500px]:text-[1rem]'>{projectName1}</h2>
                    </div>

                    <div className='bg-linear-to-r from-[#693B93] xl:px-[3rem] xl:py-[1rem] px-[1rem] py-[0.6rem] rounded-3xl -z-10 from-0% via-[#6ebef446] via-70% to-[#468fd47b] to-100% '>
                        <p className='text-[#CCD6F6] text-[0.8rem] max-[500px]:text-[0.5rem] '>
                            {projectText1}</p></div>



                    <div className='text-white flex gap-[2rem] max-[500px]:gap-[1rem] max-[500px]:text-[0.8rem]  text-2xl'>
                        <a href={project1Link}><FaGithub></FaGithub></a>
                        <a href={project1Link}><FaArrowUp></FaArrowUp></a>

                    </div>
                </div>

                <div className='imgbox z-0'>
                    <img src={project1} className='sm:max-w-[30rem] max-w-[20rem] max-[300px]:w-[10rem] max-[400px]:max-w-[15rem]  border-[#2B0b3a] bg-[#2b0b3a] border-l-[2rem] border-t-[2rem] max-[500px]:border-l-[1rem] max-[500px]:border-t-[1rem] rounded-l-2xl rounded-t-2xl' />
                </div>
            </div>

            <div className='project-2  xl:flex-row flex-col flex justify-between gap-[1rem] items-center  p-[2rem]'>
                <div className='imgbox z-0'>
                    <img src={project2} className='sm:max-w-[30rem] max-[300px]:w-[10rem] max-w-[20rem] max-[400px]:max-w-[15rem]  border-[#2B0b3a] bg-[#2b0b3a] border-r-[2rem] border-t-[2rem] max-[500px]:border-l-[1rem] max-[500px]:border-t-[1rem] rounded-l-2xl rounded-t-2xl' />
                </div>

                <div className='textbox flex flex-col gap-[1.5rem]   z-10'>
                    <div className='w-full text-end'>
                        <h3 className='text-[#9857D3] text-[1rem] max-[500px]:text-[0.5rem]'>Featured Project</h3>
                        <h2 className='text-[#CCD6F6] text-[2rem] max-[500px]:text-[1rem]'>{projectName1}</h2>
                    </div>

                    <div className='bg-linear-to-r from-[#693B93] xl:px-[3rem] xl:py-[1rem] px-[1rem] py-[0.6rem] rounded-3xl -z-10 from-0% via-[#6ebef446] via-70% to-[#468fd47b] to-100% '>
                        <p className='text-[#CCD6F6] text-[0.8rem] max-[500px]:text-[0.5rem] '>{projectText1}</p></div>



                    <div className='text-white w-full items-end justify-end flex gap-[2rem] max-[500px]:gap-[1rem] max-[500px]:text-[0.8rem]  text-2xl'>
                        <a href={project1Link} ><FaGithub ></FaGithub></a>
                        <a href={project1Link} ><FaArrowUp ></FaArrowUp></a>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default Projects