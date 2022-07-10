import { Chat, ExpandMoreOutlined, LocalHospital, People } from '@material-ui/icons';
import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <SidebarRow src="" title="UserName"/>
        <SidebarRow Icon={LocalHospital} title='Feed'/>
        <SidebarRow Icon={People} title='Friends'/>
        <SidebarRow Icon={Chat} title='Messenger'/>
        <SidebarRow Icon={ExpandMoreOutlined} title='More' />

    </div>
  )
}

export default Sidebar;