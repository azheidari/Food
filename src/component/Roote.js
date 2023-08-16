import React from 'react'

import { Outlet } from 'react-router-dom'
import MainNavigation from './MainNavigation'


function Roote() {
  return (
    <>
    <MainNavigation/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default Roote