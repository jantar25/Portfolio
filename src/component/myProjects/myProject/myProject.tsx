import React from 'react';


const myProject = ({Project}:{Project:any}) => {

    const tags = Project.technologies
    console.log(tags)

  return <div>
            <div className='max-w-[400px] md:max-w-[320px] rounded my-8 mx-4 bg-[#d4d4d4] hover:border-b-8 hover:border-[#536dfe] duration-200'>
                <img src="https://images.pexels.com/photos/442559/pexels-photo-442559.jpeg?auto=compress&cs=tinysrgb"  alt="projectImg" className="block w-full" />
                <div className="px-4 py-2">
                    <p className="text-sm mb-1">{Project.cat}</p>
                    <h1 className="text-[30px] mt-1 mb-1 leading-5">{Project.title}</h1>
                    <p className="mb-1 text-sm">{Project.description}&hellip;</p>
                </div>
                <div className="px-4 py-2">
                    {tags.map((tag:any,index:number)=>(
                        <span key={index} className="inline-block bg-gray-200 rounded-full px-2 text-[12px]
                        font-semibold text-teal-700 mr-2">#{tag}</span>
                    ))}
                </div>
                <a href="#0" className="text-[#536dfe] ml-2 mb-2 text-[20px]">Read More</a> 
            </div>
        </div>
};

export default myProject;
