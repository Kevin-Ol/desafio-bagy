import React from 'react';
import { Link } from 'react-router-dom';
import dashboard from '../icons/dashboard-bagy.svg';
import SidebarItems from '../helpers/SidebarItems';

function Sidebar() {
  return (
    <nav>
      <div>
        <img src={dashboard} alt="bagy-logo" />
        <span>Dashboard Bagy</span>
      </div>
      <ul>
        {SidebarItems.map((link) => (
          <Link to={`${link.path}`}>
            <li>{link.baseName}</li>
          </Link>
        ))}
        <li>
          <button type="button">Sair</button>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
