import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-green.png';

import Notifications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';

function Header() {
  const profile = useSelector(state => state.collector.profile);

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
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>

            <img 
              src={
                profile.avatar ? profile.avatar.url : 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt={
                profile.name
              }
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;