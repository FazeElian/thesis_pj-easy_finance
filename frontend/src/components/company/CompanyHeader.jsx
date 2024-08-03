import React from 'react'
import { Outlet } from 'react-router-dom'

const CompanyHeader = () => {
  return (
    <div>
      CompanyHeader
      <Outlet />
    </div>
  )
}

export default CompanyHeader