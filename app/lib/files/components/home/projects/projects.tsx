import React from 'react'
import Project from './project'

const projects = () => {
  return (
    <div className="w-full h-screen bg-white/10 px-[100px] py-[50px] gap-3 flex flex-col">
        <Project title="XIVData" nr="01" categories="test 1" />
        <Project title="Landkautz" nr="02" categories="test 2" />
        <Project title="Lukas Kleinecke" nr="03" categories="test 3" />
    </div>
  )
}

export default projects