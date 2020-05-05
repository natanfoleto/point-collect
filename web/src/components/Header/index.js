import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-green.png';

import Notifications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoRecicle" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Natan Foleto</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="Natan Foleto"/>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;