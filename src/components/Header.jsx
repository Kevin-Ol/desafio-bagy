import React from 'react';
import { useParams } from 'react-router-dom';
import SidebarItems from '../helpers/SidebarItems';
import { ReactComponent as Notifications } from '../icons/notifications.svg';
import { ReactComponent as Search } from '../icons/search.svg';
import user from '../icons/user.png';
import '../styles/Header.scss';

function Header() {
  const currentRoute = useParams()['*'];
  const currentPage = SidebarItems.find((page) => page.path === currentRoute);

  return (
    <header>
      <h1>{currentPage?.baseName}</h1>
      <div>
        <div>
          <Search data-testid="search-icon" />
          <Notifications data-testid="notifications-icon" />
        </div>
        <div>
          <span data-testid="user-name">Matheus Borges</span>
          <img src={user} alt="Imagem do usuário" />
        </div>
      </div>
    </header>
  );
}

export default Header;
