import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import NavLinks from './NavLink';

import './MainNavigation.css';

const MainNavigation =()=>{
  return (
    <React.Fragment>
     
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>

      
    </React.Fragment>
  );
  }

export default MainNavigation;
