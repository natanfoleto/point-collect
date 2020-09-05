import React from 'react';

import { ContainerCard, CompanyName, CompanyImage } from './styles';

export default function CardFavorite() {
  return (
    <>
     <ContainerCard>
        <CompanyImage />
        
        <CompanyName>
            Empresa do kropinho
        </CompanyName>
        <CompanyName>
            Almeida Reciclagem
        </CompanyName>
        <CompanyName>
            Latinha nova
        </CompanyName>
        <CompanyName>
            Reciclagem pese e pague
        </CompanyName>
     </ContainerCard>

    </>
  )
}
