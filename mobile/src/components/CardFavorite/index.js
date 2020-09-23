import React from 'react';

import ButtonBar from '../../components/ButtonBar'

import { ContainerCard, BoxButton, CompanyName, CompanyImage } from './styles';

import Imagee from '../../assets/logoEco.png'

export default function CardFavorite(...rest) {
  return (
    <>
     <ContainerCard {...rest}>
        <BoxButton>
          <ButtonBar icon="delete" cor="#4F4F4F" tamanho={20}/>
        </BoxButton>

        <CompanyImage source={Imagee} />

        <CompanyName>
          ECONEW
        </CompanyName>

     </ContainerCard>

    </>
  )
}
