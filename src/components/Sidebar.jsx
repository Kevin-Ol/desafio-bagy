import React from 'react';
import { Link, useParams } from 'react-router-dom';
import dashboard from '../icons/dashboard-bagy.svg';
import { ReactComponent as Logout } from '../icons/logout.svg';
import SidebarItems from '../helpers/SidebarItems';
import '../styles/Sidebar.scss';

function Sidebar() {
  const currentRoute = useParams()['*'];
  const currentPage = SidebarItems.find((page) => page.path === currentRoute);

  return (
    <nav>
      <div>
        <img src={dashboard} alt="Logo da Bagy" />
        <div>
          <span>Dashboard</span>
          <span>Bagy</span>
        </div>
      </div>
      <ul>
        {SidebarItems.map((link) => (
          <Link
            to={`${link.path}`}
            key={link.path}
            className={currentPage?.path === link.path ? 'selected' : undefined}
          >
            <li>
              {link.icon}
              {link.baseName}
            </li>
          </Link>
        ))}
        <li>
          <button type="button">
            <Logout />
            Sair
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
