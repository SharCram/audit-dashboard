import React from 'react'
import { Tooltip } from '@mui/material'
import { useStateContext } from '../contexts/ContextProvider'
import { AiOutlineMenu } from 'react-icons/ai'
import { RiNotification3Line } from 'react-icons/ri'

const TopButton = ( {title, customFunc, icon} ) => (
  <Tooltip title={title} arrow>
    <button type='button' onClick={customFunc} className='relative text-black text-xl rounded-full p-3 hover:bg-maroon-light'>
      {/* <span className='absolute inline-flex rounded-full h-2 w-2 right-2' /> */}
      {icon}
    </button>
  </Tooltip>
)



const Topbar = () => {

  const {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize} = useStateContext()

  return (
    // Main Container
    <nav className='flex justify-between p-2 md:mx-6 relative'>
      {/* Menu Button */}
      <TopButton 
        title={'menu'}
        customFunc={() => setActiveMenu((prev) => !prev)}
        icon={<AiOutlineMenu />} 
      />

      {/* other buttons */}
      <div className='flex'>
        <TopButton 
          title={'notification'}
          customFunc={() => handleClick('notification')} 
          icon={<RiNotification3Line />} 
        />
        <TopButton 
        title={'notification'}
        customFunc={() => handleClick('notification')} 
        icon={<RiNotification3Line />} 
        />
      </div>
    </nav>
  )
}

export default Topbar
