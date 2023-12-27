import React from 'react'
import { ProjectData } from '../Constants/Data'
import Project from '../component/Project/Project'

const Projects = () => {
  return (
    <div className='px-5 sm:px-20 flex flex-wrap justify-center items-center'>
      {ProjectData.map(item=>(
        <Project Project={item} key={item.id}  />
       ))}
    </div>
  )
}

export default Projects