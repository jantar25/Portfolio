import React from 'react';


const Project = ({Project}:{Project:any}) => {

    const tags = Project.technologies

  return <div>
            <div className='max-w-[400px] sm:max-w-[320px] h-[400px] shadow shadow-gray-600 rounded my-8 md:mx-4 bg-body 
            hover:border-b-8 hover:border-blue-600 duration-200'>
                <img src={Project.img}
                  alt="projectImg" className="block w-full h-[150px]" />
                <div className="px-4 my-2 h-[100px]">
                    <p className="text-[13px] mb-1">{Project.cat}</p>
                    <h1 className="text-[30px] my-2 leading-5">{Project.title}</h1>
                    <p className="mb-1 text-sm">{Project.description}&hellip;</p>
                </div>
                <div className="px-4 py-2 h-[80px]">
                    {tags.map((tag:any,index:number)=>(
                        <span key={index} className="inline-block bg-gray-300 rounded-full px-2 text-[12px]
                        font-semibold text-teal-700 mr-2">#{tag}</span>
                    ))}
                </div>
                <div className='flex justify-between items-center p-4'>
                    <a target='_blank' rel="noreferrer" 
                    href={Project.linkGithub} 
                    className="text-white rounded px-2 py-1 bg-blue-900 hover:bg-blue-700 text-[10px] font-[500]">Github</a> 
                    <a target='_blank' rel="noreferrer" 
                    href={Project.linkWeb} 
                    className="text-white rounded px-2 py-1 bg-gray-700 hover:bg-gray-500 text-[10px] font-[500]">Web View</a> 
                </div>
            </div>
        </div>
};

export default Project;
