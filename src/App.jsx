import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar, Sidebar } from './components'

import {useStateContext} from './contexts/ContextProvider'
import { Dashboard, History, Offices } from './pages'

const App = () => {

  const { activeMenu } = useStateContext()

  return (
    <div>
      <BrowserRouter>
        <div className='flex relative'>
          {/* SIDEBAR */}
          {activeMenu ? (
            <div className='w-72 fixed sidebar bg-maroon bg-bg-pattern-1'>
              {/* TODO: sidebar */}
              <Sidebar />
            </div>
          ) : (
            <div className='w-0'>
              <Sidebar />
            </div>
          )}
          
          {/* Second Half of Screen */}
          <div className={`min-h-screen bg-main-bg w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            
            {/* NAVBAR */}
            <div className='bg-main-bg fixed md:static navbar w-full'>
              {/* TODO: navbar */}
              <Navbar />
            </div>

            {/* PAGES */}
            <div>
              <Routes>
                {/* TODO: dashboard */}
                <Route path='/' element={<Dashboard />} />
                <Route path='/dashboard' element={<Dashboard />} />
                {/* TODO: offices */}
                <Route path='/offices' element={<Offices />} />
                {/* TODO: history */}
                <Route path='/history' element={<History />} />
              </Routes>
            </div>

          </div>

        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
