'use client'

import React from 'react'



const project = (props: { categories: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined }) => {
  return (
    <button className="relative w-full min-h-[150px] border-1 border border-white/10 flex items-center justify-between group projectGroup">
        <div className="flex w-full items-center z-10">
            <div className="h-[3px] w-20 bg-white mr-5 group-hover:w-44 transition-all duration-300"></div>
            <p className="mr-5 group-hover:hidden transition-all duration-300 font-bold">{props.nr}</p>
            <div className="flex flex-col">
                <p className="uppercase text-2xl font-semibold transition-all duration-300">{props.title}</p>
                <p className="uppercase text-[10px] w-fit">{props.categories}</p>
            </div>
        </div>
        <div className="relative flex items-center  z-10 w-[284px] h-[80px] bg-cover projectButton transition-all duration-300">
            <p className='absolute left-7 uppercase font-bold text-xs group-hover:text-black'>View Project</p>
        </div>
        <img className="absolute bg-red-300 h-full w-[0%] z-0 group-hover:w-full  object-cover transition-all duration-300" src='https://oss.canisminor.cc/2018-08-18-panda.png' />
    </button>
  )
}

export default project