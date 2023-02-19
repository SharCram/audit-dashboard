
import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineCancel} from 'react-icons/md'
import logo from '../assets/logo.png'

import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {

  const { activeMenu, setActiveMenu, screenSize, setScreenSize } = useStateContext()

  return (
    //Main Container
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          {/* Sidebar Header */}
          <div className='flex justify-between items-center px-2'>
            <Link to={`/`} onClick={() => {}} 
            className="flex items-end gap-2" >
              <img src={logo} alt="logo" className='h-10 w-10 object-contain'/>
              <span className='font-extrabold text-2xl text-white tracking-widest'>Audit</span>
            </Link>

            {/* Sidebar Close Button */}
            <button type='button' onClick={() => {}}
            className=''>
              <MdOutlineCancel />
            </button>
          </div>

        </>
      )}
    </div>
  )
}

export default Sidebar
