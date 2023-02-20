
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {MdOutlineCancel} from 'react-icons/md'
import {AiOutlineDashboard, AiOutlineHistory} from 'react-icons/ai'
import {HiOutlineBuildingOffice2} from 'react-icons/hi2'
import {FaHistory} from 'react-icons/fa'
import logo from '../assets/logo.png'
import { Tooltip } from '@mui/material'

import { useStateContext } from '../contexts/ContextProvider'
import NavButton from './NavButton'

const Sidebar = () => {

  const { activeMenu, setActiveMenu, screenSize, setScreenSize } = useStateContext()

  const activeLink = 'text-white text-xl flex gap-3 items-center mb-7 hover:bg-maroon-light p-2 rounded-l-full px-5 bg-maroon-light'
  const normalLink = 'text-white text-xl flex gap-3 items-center mb-7 hover:bg-maroon-light p-2 rounded-l-full px-5'

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900)
      setActiveMenu(false)
  }

  return (
    //Main Container
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          {/* Sidebar Header */}
          <div className='flex justify-between items-center px-2'>
            <Link to={`/`} onClick={handleCloseSideBar} 
            className="flex items-end gap-2" >
              <img src={logo} alt="logo" className='h-10 w-10 object-contain'/>
              <span className='font-extrabold text-2xl text-white tracking-widest'>Audit</span>
            </Link>

            {/* Sidebar Close Button */}
            <Tooltip title="close" arrow>
              <button type='button' onClick={() => setActiveMenu((prev)=>!prev)}
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
              func={handleCloseSideBar}
            />
              <span className='text-slate-300 m-3 uppercase'>Offices</span>
            <NavButton 
              key={'2'}
              title={"Offices"}
              icon={<HiOutlineBuildingOffice2 />}
              func={handleCloseSideBar}
            />
            <NavButton 
              key={'3'}
              title={"History"}
              icon={<AiOutlineHistory />}
              func={handleCloseSideBar}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar
