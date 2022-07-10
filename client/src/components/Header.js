import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Person } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { Settings } from '@material-ui/icons';

const Header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
            <img src='https://media.istockphoto.com/vectors/modern-sb-logo-design-for-business-and-company-identity-creative-sb-vector-id1319267301?k=20&m=1319267301&s=170667a&w=0&h=yBC875Q6QYR_gfPYtO0Y937VClY7NWCiln3rD31T4Yo=' alt='Social Book Logo'/>
        </div>

        <div className='header-input'>
            <SearchIcon />
            <input placeholder='Search Social Book' type="text" />
        </div>

        <div className='header-right'>
            <div className='header-option'>
                <Person fontsize='large'/>
                <h4>UserName</h4>
            </div>

            <div className='header-option'>
                <AddIcon fontsize='large'/>
            </div>

            <div className='header-option header-option-active'>
                <HomeIcon fontsize='large'/>
            </div>

            <div className='header-option'>
                <NotificationsActiveIcon fontsize='large'/>
            </div>      
               
            <div className='header-option'>
                <Settings fontsize='large'/>
            </div>   

        </div>
    </div>
  )
}

export default Header