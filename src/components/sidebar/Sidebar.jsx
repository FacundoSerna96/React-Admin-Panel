import React from 'react';
import './sidebar.scss';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
          <Link to='/' style={{textDecoration:'none'}}>
            <span className="logo">React Admin Panel</span>
          </Link>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <Link to='/' style={{textDecoration:'none'}}>
              <li>
                <DashboardIcon className='icon'/>
                <span>Dashboard</span>
              </li>
            </Link>
            <p className="title">LISTS</p>
            <Link to='/users' style={{textDecoration:'none'}}>
              <li>
                <PersonIcon className='icon'/>
                <span>Users</span>
              </li>
            </Link>
            <Link to='/products' style={{textDecoration:'none'}}>
              <li>
                <StoreMallDirectoryIcon className='icon'/>
                <span>Products</span>
              </li>
            </Link>
            <li>
              <CreditCardIcon className='icon'/>
              <span>Orders</span>
            </li>
            <li>
              <LocalShippingIcon className='icon'/>
              <span>Delivery</span>
            </li>

            <p className="title">USEFUL</p>
            <li>
              <InsertChartIcon className='icon'/>
              <span>Stats</span>
            </li>
            <li>
              <NotificationsIcon className='icon'/>
              <span>Notifications</span>
            </li>
            
            <p className="title">SERVICES</p>
            <li>
              <SettingsSystemDaydreamIcon className='icon'/>
              <span>System Health</span>
            </li>
            <li>
              <PsychologyIcon className='icon'/>
              <span>Logs</span>
            </li>
            <li>
              <SettingsApplicationsIcon className='icon'/>
              <span>Settings</span>
            </li>
            
            <p className="title">USER</p>
            <li>
              <AccountBoxIcon className='icon'/>
              <span>Profile</span>
            </li>
            <li>
              <LogoutIcon className='icon'/>
              <span>Logout</span>
            </li>
          </ul>
        </div>


        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar