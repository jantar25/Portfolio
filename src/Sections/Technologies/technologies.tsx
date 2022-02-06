import React from 'react';
import { FaReact,FaFigma,FaNodeJs } from "react-icons/fa";
import { BsServer } from "react-icons/bs";
import { DiHtml5,DiCss3,DiJavascript1 } from "react-icons/di";
import { SiTailwindcss,SiExpress,SiMongodb } from "react-icons/si"

const technologies = () => {
  return <div className='flex flex-col px-5 sm:px-20 py-20' id='technologies'>
            <div className='flex flex-col mb-8'>
                <div className='w-[70px] h-[5px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 shadow-lg mt-4'/>
                <h1 className='mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-400 to-white font-Manrope
                text-4xl font-[700]'>Technologies</h1>
            </div>
            <p className='sm:w-2/3 text-[20px] font-[300]'>
                I have worked with a range of technologies in the web development world,from Server side to Client side.</p>
            <div className='flex flex-col sm:flex-row justify-center items-start py-8'>
                <div className='flex-1 flex flex-col mt-8'>
                    <FaReact style = {{fontSize: "1.5rem"}}/>
                    <h1 className='font-[700] my-2 text-[1.5rem]'>Front-End</h1>
                    <p>Experienced with:</p>
                    <div className='flex flex-col '>
                        <div className='flex justify-start items-center'>
                            <FaReact style = {{fontSize: "1rem",marginRight:"10px"}}/><span>React</span>
                        </div>
                        <div className='flex justify-start items-center'>
                            <SiTailwindcss style = {{fontSize: "1rem",marginRight:"10px"}}/><span>Tailwind Css</span>
                        </div>
                        <div className='flex justify-start items-center'>
                            <DiJavascript1 style = {{fontSize: "1rem",marginRight:"10px"}}/><span>Javascript</span>
                        </div>
                        <div className='flex justify-start items-center'>
                            <DiHtml5 style = {{fontSize: "1rem",marginRight:"10px"}}/><span>Html</span>
                        </div>
                        <div className='flex justify-start items-center'>
                            <DiCss3 style = {{fontSize: "1rem",marginRight:"10px"}}/><span>Css</span>
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex flex-col mt-8'>
                    <BsServer style = {{fontSize: "1.5rem"}}/>
                    <h1 className='font-[700] my-2 text-[1.5rem]'>Back-End</h1>
                    <p>Experienced with:</p>
                    <div className='flex flex-col'>
                        <div className='flex justify-start items-center'>
                            <FaNodeJs style = {{fontSize: "1rem",marginRight:"10px"}}/><span>Node</span>
                        </div>
                        <div className='flex justify-start items-center'>
                            <SiExpress style = {{fontSize: "1rem",marginRight:"10px"}}/><span>Express</span>
                        </div>
                        <div className='flex justify-start items-center'>
                            <SiMongodb style = {{fontSize: "1rem",marginRight:"10px"}}/><span>Mongo DB</span>
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex flex-col mt-8'>
                    <FaFigma style = {{fontSize: "1.5rem"}}/>
                    <h1 className='font-[700] my-2 text-[1.5rem]'>Ux&Ui</h1>
                    <p>Experienced with:</p>
                    <div className='flex flex-col'>
                        <div className='flex justify-start items-center'>
                            <FaFigma style = {{fontSize: "1rem",marginRight:"10px"}}/><span>Figma</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
};

export default technologies;
