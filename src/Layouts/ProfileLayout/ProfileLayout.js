import React, { useState } from 'react'
import Appbar from '../../components/Appbar/Appbar'
import Feed from '../../components/Feed/Feed'
import Profile from '../../components/Profile/Profile'
import Sidebar from '../../components/Sidebar/Sidebar'

import './ProfileLayout.css'
const ProfileLayout = () => {
  const [sidebar, setSidebar] = useState(false)
  const handleSidebar = () => {
    setSidebar(!sidebar);
  }
  return (
    <div className="profilelayout">

      <Appbar handleSidebar={handleSidebar} />
      <div className={sidebar ? "ProfileLayoutSidebar open" : "ProfileLayoutSidebar"}>
        <Sidebar />
      </div>
      {/* content */}
      <div className="profilelayout_content">
        <div className='profilelayout_content-feed'>
          <Feed />
        </div>
        <div className='profileLayout'>
          <Profile/>
        </div>
      </div>
    </div>
  )
}

export default ProfileLayout