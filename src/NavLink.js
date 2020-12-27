import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './NavLink.css';

const NavLinks = props => {

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Planets
        </NavLink>
      </li>
      <li>
      <NavLink to="/favorites" exact>
          Favorites
          </NavLink>
      </li>
        
    </ul>
  );
};

export default NavLinks;
