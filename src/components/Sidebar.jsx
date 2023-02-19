
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {MdOutlineCancel} from 'react-icons/md'
import {AiOutlineDashboard} from 'react-icons/ai'
import {HiOutlineBuildingOffice2} from 'react-icons/hi2'
import {FaHistory} from 'react-icons/fa'
import logo from '../assets/logo.png'
import { Tooltip } from '@mui/material'

import { useStateContext } from '../contexts/ContextProvider'
import NavButton from './NavButton'

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
            <Tooltip title="close" arrow>
              <button type='button' onClick={() => {}}
              className='text-xl rounded-full p-3 hover:bg-maroon-light block text-white md:hidden'>
                <MdOutlineCancel />
              </button>
            </Tooltip>
          </div>

          {/* Navlinks Container */}
          <div className='mt-10'>
            <NavButton 
              key={'1'}
              title={"Dashboard"}
              icon={<AiOutlineDashboard />}
            />
            <NavButton 
              key={'2'}
              title={"Offices"}
              icon={<HiOutlineBuildingOffice2 />}
            />
            <NavButton 
              key={'3'}
              title={"History"}
              icon={<FaHistory />}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar
