import React from 'react';

import { useSelector } from 'react-redux';
import { Container, Dados, Cards, Card, CardData, Menu } from './styles';

export default function Dashboard() {
  const profile = useSelector(state => state.collector.profile);

  return (
    <Container>
      <h1>Dados do Sistema</h1>
      <Dados>
        <Menu>
          <button onClick={() => { alert('Sistema em sua primeira versão 1.0.0') }}>
            Versão 1.0.0
          </button>
        </Menu>
      </Dados>

      <Cards>
        <Card>
          <h1>Dados da empresa</h1>

          <CardData>
            <h1>Indentificação</h1>
            <p><strong>Nome da empresa:</strong> { profile.name} </p>
            <br></br>

            <h1>Contato</h1>
            <p><strong>E-mail:</strong> {profile.email} </p>
            <p><strong>Telefone:</strong> {profile.telephone} </p>
            <p><strong>WhatsApp:</strong> {profile.whatsapp} </p>
          </CardData>
        </Card>
        
        <Card>
          <h1>Localização</h1>

          <CardData>
            <h1>Endereço</h1>
            <p><strong>Rua:</strong> {profile.logradouro} </p>
            <p><strong>Numero:</strong> {profile.numero} </p>
            <p><strong>Bairro:</strong> {profile.bairro} </p>
            <p><strong>Cidade:</strong> {profile.localidade} </p>
            <p><strong>Estado:</strong> {profile.uf} </p>
            <br></br>

            <h1>Maps</h1>
            <p><strong>Latitude:</strong> {profile.latitude} </p>
            <p><strong>Longitude:</strong> {profile.longitude} </p>

          </CardData>
        </Card>

        <Card>
          <h1>Dados técnicos</h1>

          <CardData>
            <h1>Segmento</h1>
            <p><strong>Tipo de cadastro:</strong> {profile.entity} </p>
            <p><strong>Materiais trabalhados:</strong> {profile.materials} </p>
          </CardData>
        </Card>
      </Cards>
    </Container>
  );
}
