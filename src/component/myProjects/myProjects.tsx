import React from 'react';
import {ProjectData} from '../DummyData/Data'
import MyProject from './myProject/myProject';

const myProjects = () => {
  return <div className='flex flex-col px-5 sm:px-20 py-16' id='projects'>
          <div className='flex flex-col mb-8'>
              <div className='w-[70px] h-[5px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 shadow-lg mt-4'/>
              <h1 className='mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-400 to-white font-Manrope
            text-4xl font-[700]'>Projects</h1>
          </div>
          <div className='flex flex-wrap justify-center items-center'>
            {ProjectData.map(item=>(
                <MyProject Project={item} key={item.id}  />
            ))}
          </div>
        </div>;
};

export default myProjects;





