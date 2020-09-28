import React from 'react';
import {useNavigation} from '@react-navigation/native';


import ButtonBar from '../../components/ButtonBar'

import { ContainerCard, BoxButton, CompanyName, CompanyImage, Info, InfoText } from './styles';

import Imagee from '../../assets/logoEco.png'

export default function CardFavorite(...rest) {

  const navigation = useNavigation();

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

        <Info onPress={() => navigation.navigate('Company')} >
          <InfoText>
            Mais informações
          </InfoText>
          <ButtonBar icon="arrow-forward" cor="#1f6325" />
        </Info>

     </ContainerCard>

    </>
  )
}
