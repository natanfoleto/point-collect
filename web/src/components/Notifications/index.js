 import React, { useState } from 'react';

 import { MdNotifications } from 'react-icons/md';
 
 import { Container, Badge, NotificationList, Scroll, Notification } from './styles';
 
 function Notifications() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

   return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread>
        <MdNotifications color="#1E9E76" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          <Notification unread>
            <p>Você possui um novo pedido de entrega</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>

          <Notification>
            <p>Você possui um novo pedido de entrega</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>

          <Notification>
            <p>Você possui um novo pedido de entrega</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>

          <Notification>
            <p>Você possui um novo pedido de entrega</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>

          <Notification>
            <p>Você possui um novo pedido de entrega</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>

          <Notification>
            <p>Você possui um novo pedido de entrega</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
   );
 }
 
 export default Notifications;