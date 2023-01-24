import React from 'react'
import Appbar from '../../components/Appbar/Appbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './ProfileLayout.css'
const ProfileLayout = () => {
  return (
    <div className="profilelayout">
      {/* appbar */}
      <Appbar />
      <Sidebar/>
      {/* content */}
      <div className="profilelayout_content">
        {/* feed */}
        {/* profile */}
      </div>
    </div>
  )
}

export default ProfileLayout