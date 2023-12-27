import React from 'react';
import { HashLink  } from 'react-router-hash-link';
import Project from '../../component/Project/Project';
import {ProjectData} from '../../Constants/Data'


const Projects = () => {
  const firstThreeElements = ProjectData.slice(0, 3);

  return  <div className='flex flex-col px-5 sm:px-20 py-16' id='projects'>
            <div className='flex flex-col mb-8'>
                <div className='w-[70px] h-[5px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 shadow-lg mt-4'/>
                <h1 className='mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-400 to-white font-Manrope
              text-4xl font-[700]'>Projects</h1>
            </div>
            <div className='flex flex-wrap justify-center items-center'>
              {firstThreeElements.map(item=>(
                  <Project Project={item} key={item.id}  />
              ))}
            </div>
            <HashLink smooth to="/projects#top">
              <button className='bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-4 py-1 rounded font-Manrope 
                    font-bold text-white text-lg' type='button'>View more Projects</button>
            </HashLink>
          </div>;
};

export default Projects;



