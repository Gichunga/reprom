import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import ProjectList from '../ProjectList/ProjectList'

const Homepage = () => {
  return (
    <div className='lg:flex px-5 lg:px-20 pt-[2.9vh]'>
        <div className='hidden lg:block w-[25vw] relative'>
            <Sidebar/>
        </div>
        <div className='right-side-part flex justify-center w-full mb-10'>
            <ProjectList/>
        </div>
    </div>
  )
}

export default Homepage