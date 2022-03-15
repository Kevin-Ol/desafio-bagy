import React from 'react';
import {
  useParams,
} from 'react-router-dom';
import SidebarItems from '../helpers/SidebarItems';
import notifications from '../icons/notifications.svg';
import search from '../icons/search.svg';
import user from '../icons/user.png';

function Header() {
  const currentRoute = useParams()['*'];
  const currentPage = SidebarItems.find((page) => page.path === currentRoute);

  return (
    <header>
      <h1>{currentPage?.baseName}</h1>
      <div>
        <img src={search} alt="Ícone de pesquisa" />
        <img src={notifications} alt="Ícone de notificações" />
      </div>
      <span>Matheus Borges</span>
      <img src={user} alt="Imagem do usuário" />
    </header>
  );
}

export default Header;
